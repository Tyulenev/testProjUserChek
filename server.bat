
@REM @echo off
npm i
set port=3000
explorer http://localhost:%port%
@REM start chrome http://localhost:%port%
node ./index.js