# Use the official Node.js image as the base image
FROM node:16.15.1

# Set the working directory to /app
WORKDIR /app

# Copy all files from the host machine to the container
COPY . .

# Copy package.json separately to ensure that it is used when running yarn install
COPY package.json .

# Set an environment variable for the version of TypeScript to be installed
ENV TYPESCRIPT_VERSION=4.7.4

# Install Angular CLI and the specific version of TypeScript specified in the environment variable
RUN yarn global add @angular/cli && yarn global add typescript@${TYPESCRIPT_VERSION}

# Install all dependencies from package.json
RUN yarn install

# Automate the process of starting the dev server with hot reloading enabled
CMD ["yarn", "start"]

# This Dockerfile uses the official Node.js image as the base image. 
# It then sets the working directory to /app, copies all files from the host machine to the container, 
# and copies the package.json file separately.
# An environment variable is set for the version of TypeScript to be installed.
# Angular CLI and the specific version of TypeScript is then installed using yarn. All dependencies are then installed from package.json.
# Finally, the command to start the dev server with hot reloading enabled is automated using the yarn start command. 
# This means that once the container is running, the developer will not have to manually start the dev server, it will start automatically.