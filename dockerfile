# image to bulid on
FROM node:latest

# image for server source code to be stored
RUN mkdir -p /toolbox/server

# container to reference where server source code is stored
WORKDIR /toolbox/server

# source code to copy over
COPY . /toolbox/server

# install dependencies
RUN npm install

# port that server is on locally
EXPOSE 2001

# start server
CMD npm start