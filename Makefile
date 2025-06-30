SHELL := /bin/bash

.PHONY: test
test: install-node-modules
	npm run test

.PHONY: install-node-modules
install-node-modules:
	npm ci

.PHONY: build
build: install-node-modules
	npm run build

.PHONY: run
run:
	npm run dev

.PHONY: deploy
deploy:
	aws s3 sync dist/ s3://cardp-tasks-frontend-bucket --delete