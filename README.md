# ConnectUs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Syncing your Fork
When you clone your fork to your machine, it gets manifested as origin. So now you can update the changes in your local repo to your fork. But what if someone else in this entire while made a PR to the parent repo (from which you forked your repo) and it was merged? Now the parent repo has some code which you do not have. Here, if you try to make a PR to the parent repo without updating the changes just made by someone else, you will encounter merge conflicts. Here's what you have to do:

`git remote add <name> <url>` where 'name' is the name you want to give to the remote. For example, your fork is named 'origin'. The 'url' is the url of the parent repository, i.e this repo in your case. The general convention for name is 'upstream'. Now 'upstream' is set as the parent remote.

Every time you sit down to work, remember to update your fork with potential changes that might have been made in the parent repo by running

`git fetch upstream`

`git pull upstream develop`

This has now pulled the changes in the develop branch of the parent repo to the current branch of your remote. Now you can simply make your additional changes, push the code to your fork and make a PR.

Remember to execute step 2 before you start working every time, or be ready to face some nasty merge conflicts!

Conflicts occur when the same piece of code has been modified in one way by you, and in some other way in the parent repo, and you obviously don't have those modifications updated in your fork. In case of merge conflicts, your editor will give you two choices in the same piece of code which you will have to manually resolve by choosing what you want to keep and you don't. Just delete the code snippet you don't want, and keep the one you do. Once you do this for every conflict, simply commit the changes and push them to your fork.

