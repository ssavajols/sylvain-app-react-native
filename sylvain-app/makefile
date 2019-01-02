include .env
export $(shell sed 's/=.*//' .env)

help:
	@awk -F ':|##' '/^[^\t].+?:.*?##/ {printf "\033[36m%-30s\033[0m %s\n", $$1, $$NF}' $(MAKEFILE_LIST) 

start: ## Start local dev
	npm start

start-android: ## Start local dev android
	npm run android

start-ios: ## Start local dev ios
	npm run ios

test: ## Run tests
	npm test --coverage

test-watch: ## Run tests
	npm test -- --watch --coverage