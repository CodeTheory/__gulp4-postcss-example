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


// Sources
const SRC_DIR = 'src';
const DEST_DIR = 'dist';
const CSS_GLOB = `${SRC_DIR}/**/*.css`;
const CSS_PARTIALS = `!${SRC_DIR}/**/_*.css`;


// Clean dist directory
export const clean = () => del([DEST_DIR]);


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
export const build = () =>  src([CSS_GLOB, CSS_PARTIALS])
  .pipe(postcss(processors))
  .pipe(dest(DEST_DIR))
  .pipe(postcss([minify]))
  .pipe(rename({suffix: '.min'}))
  .pipe(dest(DEST_DIR));

// Watch Source Files
export const watchSrc = () => watch(CSS_GLOB, build);

// Dist Tasks
export const dist = series(clean, build);
export const dev = series(clean, build, watchSrc);

export default dev;
  
