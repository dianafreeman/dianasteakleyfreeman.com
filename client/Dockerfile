FROM node:current-alpine3.10

# Create app directory
WORKDIR /client

RUN apk update && apk upgrade && apk add --update --no-cache \
  bash wait4ports

COPY . .

RUN yarn install
