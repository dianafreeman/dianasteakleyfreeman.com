-include .env

.DEFAULT_GOAL := help

help: ## This help command. Anything prepended with a double hash will be displayed to the CLI user
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m\033[0m\n"} /^[a-zA-Z0-9_-]+:.*?##/ { printf "  \033[36m%-21s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

dev: ## make develoment enviornment
	docker-compose -f docker-compose.dev.yml up --build

storybook: ## make develoment enviornment
	docker-compose -f docker-compose.dev.yml run --rm		 yarn storybook

build: ## make develoment enviornment
	docker-compose run --rm client						yarn build

