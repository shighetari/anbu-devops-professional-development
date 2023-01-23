@echo off

rem Stop any running containers
docker container stop %docker container ls -aq%

rem Remove any existing containers
docker container rm %docker container ls -aq%

rem Build the container
docker build -t app .

rem Run the container
docker run -it --rm -p 4200:4200 app
