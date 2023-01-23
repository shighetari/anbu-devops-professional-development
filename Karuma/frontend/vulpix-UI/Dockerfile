FROM node:16.15.1
COPY . /app
WORKDIR /app
RUN npm i --location=global @angular/cli && npm i --location=global typescript
RUN npm install
EXPOSE 4200
CMD ["ng","serve","--host", "0.0.0.0", "--disable-host-check", "--public-host", "0.0.0.0"]
