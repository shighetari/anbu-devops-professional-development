@echo off

rem navigate to the ui directory 
cd /d %~dp0
cd ../..

rem build the image and spin up the container
docker build -t app .
docker run -it -p 4200:4200 app
