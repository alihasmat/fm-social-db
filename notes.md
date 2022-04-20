# Functional requirements and notes

Dark/Light theme toggle

- How HTML markup(accessible toggle html, css) -- here we will be using radio buttons so its a FORM. check accessibility forms -- https://scottaohara.github.io/a11y_styled_form_controls/src/radio-button--switch/
  Sara codepen: https://codepen.io/SaraSoueidan/pen/jpBbrq

- switch dark/light theme using JS -- https://dev.to/rubalaine/dark-mode-with-html-css-javascript-only-4nb9

- preference color scheme -- https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme

- Three stage toggle: light, dark and system preference -- https://codepen.io/miqureshi/pen/veEOOb

CSS variables (custom properties)

- https://css-tricks.com/updating-a-css-variable-with-javascript/

Accessibility

- Correct Heading tags
- Screenreaders text only -- https://www.accessibility-developer-guide.com/examples/hiding-elements/visually/

why script tag should be in the head

- https://flaviocopes.com/javascript-async-defer/

Inorder to parse the scss files, we will use GUlP
How to install Gulp:

- First, remove gulp files if you have installed previously. npm rm --global gulp.
- Second, check you node, npm and npx version. npm --version
- Third, npm install --global gulp-cli. If you ran int problem like permission denied by operating system. Then use this command first sudo chown -R $USER /usr/local/lib/node_modules. And then use npm install --global gulp-cli.
- After then, create package.json file (npm init -y).
- Next install npm install --save-dev gulp.
- Now type, gulp --version. You should get CLI version and Local version.
- create gulpfile.js file in root folder. This is the only file you will need to use gulp. It contains all the tasks that you want gulp to do.

Now, lets install plugin for Gulp

- npm install @babel/core @babel/preset-env postcss autoprefixer browser-sync cssnano sass gulp-babel gulp-postcss gulp-sass gulp-terser
- create gulp.js file in root folder. This is the only file you will need to use gulp. It contains all the tasks that you want gulp to do.

BEM Model:
Block - Card
Elements - fb icon, twitter handle, count, followers text, change
modifier - cards have different top color and change color

Deploying a gulp project:

- in the gulpfile.js => exports.build = series(scssTask, jsTask);
- use cloudflare to deploy your project. https://www.youtube.com/watch?v=MTc2CTYoszY
