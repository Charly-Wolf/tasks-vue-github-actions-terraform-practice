SHELL := /bin/bash

.PHONY: test
test: install-node-modules
	npm run test

.PHONY: install-node-modules
install-node-modules:
	npm install

.PHONY: build
build: install-node-modules
	npm run build

.PHONY: deploy
deploy:
	aws s3 sync dist/ s3://cardp-tasks-frontend-bucket --delete