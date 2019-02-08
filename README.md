# Create Boilerplate app script

This script clones the default branch of the repo, asks the user a few questions and then modifies the files among other things, to accomodate the code to the user preferences. The questions include:

- Project name
- Database engine
- Git remote URL where the new project will live
- Stack choices

The script also initializes a new git repository and creates random passwords and secrets for the database and secure cookie seed.

## Usage

End users use this script like this:

`npx github:chadfurman/create-boilerplate-app#feature/multi-stack-boilerplate my-new-app`

Where `my-new-app` is the name of the directory where your new project will be stored.
