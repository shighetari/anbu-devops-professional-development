cd ..\..
cd ui
docker build -t my-ui-app .
docker run -it -p 4200:4200 my-ui-app
