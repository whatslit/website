#WhatsLit Website
This repo houses the whatslit front-end and website. The following is a simple guide for setting up the development environment. *Make sure to read the git section to understand how we will be working with Github!*


## Setup
The client web application actually uses heroku as its host. This means you'll need to get heroku. Depending on your platform:

* Linux: `$ wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh`
* Mac: Go to `https://toolbelt.heroku.com/osx` and then download/install the heroku toolbelt. 

This will add the `heroku` command to your bash. You won't necisarrily need to create a heroku account to work on the project, but if you'd like to work on infrastructure scaling, with a certainty you should create an account and request access.

You'll now need to get node.js! Download it at `https://nodejs.org/en/download/` and make sure it's in your path! 

Once you have heroku installed, you'll need to get something called Ember.CLI--scary I know! We're using Ember.JS as our main frontend javascript framework. I reccomend you look up some of these terms if you don't understand them. 

First install it using`npm`. 
``
$ npm install -g ember-cli``

Then grab bower for jQuery, Ember, and even QUnit.
``
$ npm install -g bower``

Lastly we need to install watchman. Depending on your platform:

* Mac: `$ brew install watchman`
* Linux: KYS -___-, `https://facebook.github.io/watchman/docs/install.html` You can use LinuxBrew but make sure to perform a `$ sudo apt-get install python-dev` before brewing watchman.

Now all the requisites are installed, grab the repository and switch to the dev branch!
### Install

* `git clone <repository-url>` this repository
* change into the new directory
* `git checkout dev`
* `npm install`
* `bower install`

That's it you're done.

## Running / Development
To run the website do the following.
* `ember server`
* Visit the app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building
*You shouldn't really need to do this, since this is all handled when deploying occurs.*
* `ember build` (development)
* `ember build --environment production` (production)

### Deploying/Git Use
You need to use the What's Lit branching paradigm. Essentially we will have two branches:
```
dev -> #our main working branch where code will be committed.
production -> #this branch is actually run live on the website.
```
This means your job is simple: all of your code and committs should go directly to the `dev` branch, and in the case that you want to make your code live on `whatslit.io`, you simply make a pull request on github.

* Before you develop, make sure you're on the `dev` branch. `git branch`
    * To switch to `dev`, `git checkout dev`
* After you're finished working
    * `git add .`
    * `git commit -m "<useful message>"`
    * `git push origin dev dev`
* To deploy to `whatslit.io` simply create a pull-request on github from `dev` into `master`.



## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


