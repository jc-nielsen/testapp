#!/bin/bash

gulpPath="$(which gulp)"

if [ ${#gulpPath} -gt 0 ]; then
  echo "Success: gulp found"

  echo "Building nvd3-extender..."
  cd nvd3-extender
  npm install

  $gulpPath prod

  echo "Building chart-library..."
  cd ../chart-library
  npm install

  $gulpPath prod
else
  echo "Error: gulp not found, it should be installed globally"
fi



