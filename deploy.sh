#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

SOURCE_BRANCH="prod"
TARGET_BRANCH="gh-pages"
OUTPUT_DIR="dist"

function build {
  npm install -g grunt-cli
  npm install
  grunt build --target=prod
}

# Pull requests and commits to other branches shouldn't try to deploy, just build to verify
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Skipping deploy; just doing a build."
    build
    exit 0
fi

# Save some useful information
REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
SHA=`git rev-parse --verify HEAD`

# Clone the repo in the output directory and get there
git clone $REPO $OUTPUT_DIR
cd $OUTPUT_DIR

# Change the remote url from https:// to git@
git remote set-url origin $SSH_REPO

# Set user data
git config user.name "Travis CI"
git config user.email "$COMMIT_AUTHOR_EMAIL"

# Get the deploy key by using Travis's stored variables to decrypt deploy_key.enc
ENCRYPTED_KEY_VAR="encrypted_${ENCRYPTION_LABEL}_key"
ENCRYPTED_IV_VAR="encrypted_${ENCRYPTION_LABEL}_iv"
ENCRYPTED_KEY=${!ENCRYPTED_KEY_VAR}
ENCRYPTED_IV=${!ENCRYPTED_IV_VAR}
openssl aes-256-cbc -K $ENCRYPTED_KEY -iv $ENCRYPTED_IV -in deploy_key.enc -out deploy_key -d
chmod 600 deploy_key
eval `ssh-agent -s`
ssh-add deploy_key

# Create empty target branch
git checkout --orphan $TARGET_BRANCH

# Unstage everything
git reset

# Clean out existing contents in the output directory
shopt -s extglob
rm -rf !(README.md) || exit 0
rm .travis.yml .gitignore || exit 0

# Build the project to the output directory
cd ..
build

# Go to the output directory and commit the project
cd $OUTPUT_DIR
git add .
git commit -m "Deploy to GitHub Pages: ${SHA}"

# Now that we're all set up, we can remove the old target branch and replace it with new one
git push origin --delete $TARGET_BRANCH
git push $SSH_REPO $TARGET_BRANCH