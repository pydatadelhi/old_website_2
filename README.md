<p align="center">
    <img src="./static/images/logo.png" width="220">
</p>

# Index

- [About](#beginner-about)
	- [PyData](#bar_chart-pydata)
	- [PyData Delhi](#chart_with_upwards_trend-pydata-delhi)
	- [NumFOCUS](#1234-numfocus)
- [Development](#hammer-development)
	- [Pre-Requisites](#notebook-pre-requisites)
	- [Development-Environment](#milky_way-development-environment)
	- [FileStructure](#file_folder-filestructure)
	- [Build](#wrench-build)
- [Contribution](#tada-contribution)
	- [Community](#heart-community)
	- [Guideline](#exclamation-guideline)
		- [Root files](#root-files)
		- [Working with vue files](#working-with-vue-files)
		- [Adding a new route](#adding-a-new-route)
	- [Branch](#cactus-branches)
- [Resources](#page_facing_up-resources)
- [Credit](#star-credit)
- [License](#key-license)

## :beginner: About

`This project is under heavy development.`


This project is the home for the official website of PyData Delhi, developed and maintained by PyData Delhi Team and other volunteers. Its purpose is to inform visitors more about events and culture at PyData Delhi and getting them involved with it.


### :bar_chart: PyData

Starting out with a PyData Workshop at the Googleplex in Mountain View, CA, in 2012 PyData has evolved into a successful conference series on using Python for the management, processing, analysis, and visualization of data. Alongside the popular conferences and the excellent PyData tools/packages a steadily growing PyData community has formed.

### :chart_with_upwards_trend: PyData Delhi

PyData Delhi is a gathering of users and developers of data analysis tools in Python. A major goal of the meetup is to provide a venue for users across all the various domains of data analysis to share their experiences and their techniques, as well as highlight the most triumphs and potential pitfalls of using Python for certain kinds of problems.

### :1234: NumFOCUS

The PyData conference series is organized by NumFOCUS, a non-proﬁt organization which supports and promotes world-class, innovative, open source scientiﬁc software. NumFOCUS aims to ensure that money is available to keep projects in the scientiﬁc Python stack funded and available. So if you ﬁnd value in these tools and have always wanted to give back, donating to NumFOCUS gives you a way of supporting either a speciﬁc project of your choice or all of these great codes at once. NumFOCUS website.


## :hammer: Development

### :notebook: Pre-Requisites

In order to work on this project or to develop it, you need to have some pre-installed tools and knowledge about them. Below are the tools you need to install on your system:

- NPM
- NodeJs


### :milky_way: Development-Environment

Once you have all the requirements checked out, you can develop this project. You need to set up the development environment to work on it. Follow the steps given below to setup:

1. Fork this repo.
2. Clone the forked repo on your system. `$ git clone https://github.com/YOUR_USERNAME/pydatadelhi.github.io`
3. We prefer you to work on different branched on your forked repo.
4. Go inside the cloned folder, and install all the dependencies. `$ npm install`
5. Now you can make your changes, to test them run the dev server. `$ npm run dev`

### :file_folder: FileStructure

```
.
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
├── webpack.config.js
├── node_modules/...
├── docs/...
├── src
│   ├── app.js
│   ├── App.vue
│   ├── components
│   │   ├── Archive.vue
│   │   ├── Blog.vue
│   │   ├── Conference.vue
│   │   ├── Contact.vue
│   │   ├── Home.vue
│   │   ├── News.vue
│   │   ├── PageNotFound.vue
│   │   ├── Sponsors.vue
│   │   ├── Team.vue
│   │   └── Volunteer.vue
│   └── router.js
└── static
    ├── CNAME
    ├── index.html
    ├── images
    │   ├── favicon.png
    │   ├── logo.png
    │   └── icons/...
    └── style
        └── index.css
```

 No | File/Folder name   | Details
 ---|--------------------|--------
 1 	| ./docs 		     | Webpack output the build here, which is then hosted by github pages.
 2 	| ./src              | Contains un-built application source code.
 3 	| ./src/components   | Individual components view, styling, and logic that our application uses.
 4 	| ./static           | Static files like images, third-party libraries, PWA manifest, and service worker are stored here.
 5  | ./node_modules/... | Auto installed node packages.
 6  | package.json       | NPM package file for this project.
 7  | package-lock.json  | NPM packages details.
 8  | webpack.config.js  | Configuration file for webpack.
 9  | LICENSE 		     | MIT License.
 10 | README.md          | This file.
 11 | .gitignore         | To ignore files to be a part version control.


### :wrench: Build

To build the project for production, you can use the following command. The output will be dumped in `/docs` folder which is used by the github pages to host the site.

```
$ npm run build
```

## :tada: Contribution

Your contributions are always welcome and appreciated. Following are the things you can do to contribute to this project.

1. **Report a bug** <br>
If you think you have encountered a bug, and we should know about it, feel free to report it [here](https://github.com/pydatadelhi/pydatadelhi.github.io/issues/new) and we will take care of it.

2. **Request a feature** <br>
You can also request for a feature [here](https://github.com/pydatadelhi/pydatadelhi.github.io/issues/new), and if it will viable, it will be picked for development.  

3. **Create a pull request** <br>
It can't get better then this, your pull request will be really appreciated by the community. You can get started by picking up any open issues from [here](https://github.com/pydatadelhi/pydatadelhi.github.io/issues) and make a pull request.

> If you are new to open-source, make sure to check read more about it [here](https://www.digitalocean.com/community/tutorial_series/an-introduction-to-open-source) and learn more about creating a pull request [here](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github).

### :heart: Community


PyData - Delhi has members and contributors around Delhi and the world,  constantly improving the community and helping others as well to do so. To get in touch with the community, you can use the following communication channels.

**Meetup**: [https://www.meetup.com/PyDataDelhi/](https://www.meetup.com/PyDataDelhi/) <br>
**Twitter**: [https://twitter.com/meilix_](https://twitter.com/meilix_) <br>
**Facebook**: [http://facebook.com/pydatadelhi](http://facebook.com/pydatadelhi) <br>
**Youtube**: [https://www.youtube.com/channel/UCz_xSLNdtnkDsVTuYuLprMg](https://www.youtube.com/channel/UCz_xSLNdtnkDsVTuYuLprMg) <br>
**Github**: [https://github.com/pydatadelhi](https://github.com/pydatadelhi) <br>
**Telegram**: [https://bit.do/joinpydd](https://bit.do/joinpydd) <br>



### :exclamation: Guideline

This project use Vue.js v2 framework and It is highly recommended that you check out its docs [here](https://vuejs.org/v2/guide/). Further, if you are short on time, to quickly get productive with this project, below are some details about how to work with this project.

#### Root files

The root/entry file for the project can be found in the `./static` folder, it also consists of all the global files like index.css, plus its purpose is to store the static file like images etc. 


#### **Working with .vue files.**

In the folder `./src/components`, you will find most of the `.vue` files, they are the components for different pages, which you will understand from there name. Below is the basic structure of any `.vue` file. 

``` vue
<template>
    HTML CODE...
</template>

<style scoped>
    CSS SHEET...
</style>

<script>
    JAVASCRIPT CODE...
</script>
```

Here, `template` tag consist of all the HTML for that particular component, in our case page. `style` tag consists of all the CSS style and finally, `script` tag consists of all the javascript. To create a new component, you just have to add a `NEW-COMPONENT.vue` to components folder.

#### **Adding a new route** 

All the routers are defined in `./src/router.js` file. To add a new route, you must create a new component and import it to this file. 

```
...
import Home from '@/components/NEW-COMPONENT-NAME'
...
export default new Router({
  routes: [...
    {
      path: '/NEW-LOC',
      name: 'NEW-COMPONENT-NAME',
      component: NEW-COMPONENT-NAME
    }
...]})

```

### :cactus: Branches

We use a two branch methodology, where one branch `develop` holds the un-build source code, and branch `master` holds the build code. The reason for this is, the Github pages in case of `USERNAME.github.io` only support hosting from master branch, and that too from root folder but our source code dump out the output in `docs` folder.

- `master` is the **Production** branch, where the build source code is stored.

- `develop` is a the **Development** branch, where the un-build source code is stored, **your pull request should be made to this branch**.

**Steps to create a pull request**

1. Make a PR to `develop` branch only.
2. Comply with the best practices and guidelines e.g. where the PR concerns visual elements it should have an image showing the effect.
3. Also, do not commit the docs folder.
4. If the review is not positive and changes are not clear, PR will be asked for further updates.

After this, changes will be merged.

## :page_facing_up: Resources

- [Vuejs 2 Guide](https://vuejs.org/v2/guide/)
- [Meetup.com API](https://www.meetup.com/meetup_api/)

## :star: Credit

- Initial UI by [Sandeep Kumar](https://www.behance.net/SandeepKumarBhatia) 

## :key: License

MIT License

Copyright (c) 2019 PyData Delhi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
