import {src, dest, watch, parallel, series} from 'gulp';
import del from 'del';
import yargs from 'yargs';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnext from 'postcss-cssnext';
import nested from 'postcss-nested';
import atImport from 'postcss-import';
import mqpacker from 'css-mqpacker';
import minify from 'cssnano';
import simpleVars from 'postcss-simple-vars';
import rename from 'gulp-rename';

const sources = {
  // Build Dirs
  src: 'src',
  dest: 'dist',
  
  // File Sources
  cssBuild: [
    'src/**/*.css',
    '!src/**/_*.css'
  ],
  
  cssWatch: 'src/**/*.css'
};


// Clean dist directory
export const clean = () => del([sources.dest]);


// PostCSS processors
const processors = [
  atImport,
  simpleVars,
  cssnext,
  nested,
  autoprefixer({ browsers: ['last 2 versions'] }),
  mqpacker
];

// Main build task
export const build = () =>  src(sources.cssBuild)
  .pipe(postcss(processors))
  .pipe(dest(sources.dest))
  .pipe(postcss([minify]))
  .pipe(rename({suffix: '.min'}))
  .pipe(dest(sources.dest));

// Watch Source Files
export const watchSrc = () => watch(sources.cssWatch, build);

// Dist Tasks
export const dist = series(clean, build);
export const dev = series(clean, build, watchSrc);

export default dev;
  
