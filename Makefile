-include .env

.DEFAULT_GOAL := help

help: ## This help command. Anything prepended with a double hash will be displayed to the CLI user
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m\033[0m\n"} /^[a-zA-Z0-9_-]+:.*?##/ { printf "  \033[36m%-21s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

##----------------------------------------------------------------------------------------------------------------------
##@ Installation Actions

build-dev:  ## build all dev
	@docker-compose  -f docker-compose.dev.yml build

build-client:  ## build dev client
	@docker-compose  -f docker-compose.dev.yml build client

build-server:  ## build dev server
	@docker-compose  -f docker-compose.dev.yml build server

down-dev:  ## build all dev
	@docker-compose  -f docker-compose.dev.yml down

dev: ## launch develoment enviornment
	@docker-compose  -f docker-compose.dev.yml up --build

dev-server: ## run server (only) in development
	@docker-compose -f docker-compose.dev.yml up --build server

test-server: build-server ## run server (only) in development
	@docker-compose -f docker-compose.dev.yml run --rm server 				yarn test

dev-client: build-dev ## run client (only) in development
	@docker-compose -f docker-compose.dev.yml up client

storybook: ## run storybook in development
	@docker-compose -f docker-compose.dev.yml run --rm  yarn storybook

bash-client: ## create a bash terminal in the client service
	@docker-compose -f docker-compose.dev.yml run --rm client bash

bash-server: ## create a bash terminal in the server service
	@docker-compose -f docker-compose.dev.yml run --rm server bash

prod: ## down the dev environment and build a prod version
	@docker-compose -f docker-compose.dev.yml down
	@docker-compose -f docker-compose.prod.yml up -- build

