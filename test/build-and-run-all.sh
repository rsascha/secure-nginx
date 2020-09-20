#!/bin/bash

#
# * Build the test application (npm, nodejs, nestjs)
# * Install NPM modules
# * Build the application (create /dist folder)
# * Build the secure-nginx base image for testing
# * Build & start the test environment
#   - test-app
#   - NGINX
#

cd test-app \
&& npm install \
&& npm run build \
&& cd .. \
&& docker build --tag=test-secure-nginx .. \
&& docker-compose up --build
