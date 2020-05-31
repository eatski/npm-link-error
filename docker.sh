#/bin/bash
docker build . -t npm-link-error
docker run -it --rm npm-link-error:latest bash
docker rmi npm-link-error