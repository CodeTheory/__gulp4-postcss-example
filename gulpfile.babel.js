import {src, dest, watch, parallel, series} from 'gulp';
import del from 'del';
import yargs from 'yargs';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnext from 'postcss-cssnext';
import nested from 'postcss-nested';
import minify from 'csswring';
import simpleVars from 'postcss-simple-vars';

const sources = {
  // Build Dirs
  src: 'src',
  dest: 'dist',
  
  // File Sources
  css: 'src/**/*.css'
};


// Clean dist directory
export const clean = () => del([sources.dest]);


// PostCSS processors
const processors = [
  autoprefixer({ browsers: ['last 2 versions'] }),
  cssnext,
  nested,
  simpleVars,
  minify
];

// Main build task
export const build = () => src(sources.css) 
  .pipe(postcss(processors))
  .pipe(dest(sources.dest));

// Watch Source Files
export const watchSrc = () => watch(sources.css, build);

// Dist Tasks
export const dist = series(clean, build);
export const dev = series(clean, build, watchSrc);

export default dev;
  
