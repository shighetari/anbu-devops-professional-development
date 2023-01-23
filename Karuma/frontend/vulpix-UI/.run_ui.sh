#!/bin/bash

# Stop any running containers
docker container stop $(docker container ls -aq)

# Remove any existing containers
docker container rm $(docker container ls -aq)

# Build the container
docker build -t app .

# Run the container
docker run -it --rm -p 4200:4200 app
