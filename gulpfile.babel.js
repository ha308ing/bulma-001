import { task, src, dest, series, parallel, watch } from "gulp"
import dartSass from "sass"
import gulpSass from "gulp-sass"
import browser from "browser-sync"
import babel from "gulp-babel"
import sourcemaps from "gulp-sourcemaps"
import { argv as yarg } from "yargs"

const sass = gulpSass( dartSass )

const server = cb => { browser.init( { server: "dist" } ); cb() }
const yargs = cb => { console.log( yarg ); cb() }

task( "html", () =>
  src( "src/html/**/*.html" ).
  pipe( dest( "dist" ) ) )

task( "babel", () =>
  src( "src/js/**/*.js" ).
  pipe( babel() ).
  pipe( dest( "dist/js" ) ) )

task( "sass", () =>
  src( "src/sass/main.scss" ).
  pipe( sourcemaps.init() ).
  pipe( sass( { includePaths: [ "./node_modules/bulma" ] } ).on( "error", sass.logError ) ).
  pipe( sourcemaps.write() ).
  pipe( dest( "dist/css" ) ) )

task( "watch", () => {
  watch( "src/html" ).on( "all", series( "html", browser.reload ) )
  watch( "src/js" ).on( "all", series( "babel", browser.reload ) )
  watch( "src/sass" ).on( "all", series( "sass", browser.reload ) ) } )

task( "local", parallel( "html", "sass", "babel" ) )
task( "default", series( parallel( "html", "sass", "babel" ), server, yargs, "watch" ) )
