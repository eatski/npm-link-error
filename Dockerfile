FROM node:latest
COPY . /src
WORKDIR /src
# package sample library
RUN cd ./libs/sample-library && npm i && npm pack
# install libraries
RUN cd ./app && npm i