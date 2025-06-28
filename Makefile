SHELL := /bin/bash

.PHONY: test
test: install-node-modules
	npm run test

.PHONY: install-node-modules
install-node-modules:
	npm install

# For now only Frontend
.PHONY: run
run: 
	npm run dev