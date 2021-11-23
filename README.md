## Usage

### Pre-requisites
Create a workflow `.yml` file in your repositories `.github/workflows` directory. An [example workflow](#example-workflow) is available below. For more information, reference the GitHub Help Documentation for [Creating a workflow file](https://help.github.com/en/articles/configuring-a-workflow#creating-a-workflow-file).

### Inputs

* `level` - notice, warn, error *OPTIONAL* (defaults to notice)
* `message` - message for annotation *REQUIRED*
* `title` - title for annotation *OPTIONAL*
* `file` - file for annotation *OPTIONAL*
* `start-line` - start-line for annotation *OPTIONAL*
* `end-line` - end-line for annotation *OPTIONAL*
* `start-column` - title for annotation *OPTIONAL*
* `end-column` - title for annotation *OPTIONAL*

### Example Workflow

```yaml
- name: Notice
  uses: hipcamp/annotate@v1
  with:
    level: notice
    message: 'This is a test of Notice'
    title: 'Title for Notice'
- name: Warn
  uses: hipcamp/annotate@v1
  with:
    level: warn
    message: 'This is a test of warning'
    title: 'Title for Warning'
- name: Error
  uses: hipcamp/annotate@v1
  with:
    level: error
    message: 'This is a test of Error'
    title: 'Title for Error'
```

## How to Contribute

> First, you'll need to have a reasonably modern version of `node` handy. This won't work with versions older than 9, for instance.

Install the dependencies  
```bash
$ npm install
```

Build the typescript and package it for distribution
```bash
$ npm run build && npm run package
```

Run the tests :heavy_check_mark:  
```bash
$ npm test

 PASS  ./index.test.js
  ✓ throws invalid number (3ms)
  ✓ wait 500 ms (504ms)
  ✓ test runs (95ms)

...
```

## Change action.yml

The action.yml contains defines the inputs and output for your action.

Update the action.yml with your name, description, inputs and outputs for your action.

See the [documentation](https://help.github.com/en/articles/metadata-syntax-for-github-actions)

## Change the Code

Most toolkit and CI/CD operations involve async operations so the action is run in an async function.

```javascript
import * as core from '@actions/core';
...

async function run() {
  try { 
      ...
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
```

See the [toolkit documentation](https://github.com/actions/toolkit/blob/master/README.md#packages) for the various packages.

## Publish to a Distribution Branch

Actions are run from GitHub repos so we will checkin the packed dist folder. 

```bash
$ npm run all
$ git add -A
$ git commit -m "your commit message"
$ git tag v[version from package.json]
$ git push origin v[version from package.json]
```

Your action is now published! :rocket: 

See the [versioning documentation](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md)