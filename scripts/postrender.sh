#!/usr/bin/env sh

# copy over non-compiled assets
cp src/pages/index.css dist/
cp src/images/favicon-32x32.png dist/
cp -r src/images/icons dist/

# remove compiled js only needed for one-time render
rm -r dist/scripts
rm -r dist/src
