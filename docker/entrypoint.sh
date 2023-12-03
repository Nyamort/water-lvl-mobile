#!/bin/sh

# Exécute npm install
npm install

# Exécute la commande passée en arguments (s'il y en a)
npm run $@
