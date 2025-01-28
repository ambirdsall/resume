#!/usr/bin/env sh

# This script is written to be run via an npm script, and thus assumes its working
# directory is the project root.

babel . \
    --extensions '.js' \
    --out-dir dist \
    --ignore node_modules \
    --ignore public \
    --ignore 'gatsby-*'
