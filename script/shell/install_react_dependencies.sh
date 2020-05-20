#!/bin/bash

package="package.json"
if [ -f $package ]; then
  echo "exist $package"
else
  cd ../../
  if [ -f $package ]; then
    echo "exist $package"
  else
    echo "No Sunch File : $package"
    exit
  fi
fi

reactList=(
  react
  react-dom
  react-router-dom
  mobx
  mobx-react
)
reactTypesList=(
  @types/react
  @types/react-dom
  @types/react-router-dom
)

installDependencies() {
  echo "installing ${reactList[*]}"
  yarn add ${reactList[*]}
}
installDependencies

installDevDependencies() {
  echo "installing ${reactTypesList[*]}"
  yarn add ${reactTypesList[*]} --dev
}
installDevDependencies
