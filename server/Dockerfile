FROM node:current-alpine3.10

# Create app directory
WORKDIR /usr/src/app

# update lunx package managers
# add bash and wait4ports
RUN apk update && apk upgrade && apk add --update --no-cache \
  bash wait4ports

COPY . .

RUN yarn install
