#!/bin/bash

# navigate to the root directory
cd ../..

# navigate to the child directory where the UI code is located
cd ui

# Build the Docker container
docker build -t my-ui-app .

# Run the Docker container
docker run -it -p 4200:4200 my-ui-app
