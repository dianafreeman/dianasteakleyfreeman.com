FROM node:current-alpine3.10

# Create app directory
WORKDIR /server

RUN apk update && apk upgrade && apk add --update --no-cache \
  bash wait4ports

COPY . .

RUN yarn install
