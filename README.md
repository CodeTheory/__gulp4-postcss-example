A PostCSS / Gulp 4 / ES2015 Example Repo
--

This repo is here to show off the brilliant the technology we're able to use today, if only a minor amount of it. 

Please feel free to use any of this code on your own system. This repo is a way for me to contribute to the wonderful community that exists through open source code. Thank you to all those that also contribute!


##### Why use PostCSS and not SASS/LESS etc?
Since posting this repo I've had quite a few questions as to why anyone should use PostCSS over SASS at all. The answer is to go with what you prefer. The reason that I've given others as to why I've chosen to experiment with PostCSS lately is that I love some of the features that it supports.

PostCSS doesn't have to be anything you don't want it to be. Pick and chose the extensions you want to use, remove the ones you don't want and extend over time if you wish. Generally it's just a great ecosystem that's highly extendible. The speed of it is also nice too. 


---
### Installation

```
Requirments:
----
gulp-cli version 1.1.0
node v4 
```

First off, you'll need to install the modules from npm, so run `npm install`.
After that you're pretty much good to go. Play around with the files in the `src` directory and run `gulp` to build and watch the files you're changing.

If you want to build the files without the watch task, you can run `gulp dist`.
To find all of the tasks available, run `gulp --tasks` via gulp-cli.


### Contributions
Any and all help will be appreciated here. The goal here is to provide an example of how Gulp 4 / ES2015 and PostCSS can be used together now and not just in the future. 
If you have anything to contribute, please submit a pull request!



### Todo
- Write a more detailed README, listing the modules used and what they're for.
- Add a linter.
- Create a markup file using styles processed through the PostCSS/Gulp build system.
- Investigate more PostCSS modules that may be useful to the build process. 



