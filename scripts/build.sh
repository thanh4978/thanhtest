#!/usr/bin/env bash

FLATFORM=$1
MODE=$2

buildProductionIos() {
    echo "============== BUILD PRODUCTION IOS =============="
}

buildDevelopmentIos() {
    echo "============== BUILD DEVELOPMENT IOS =============="
}

buildIos() {
    echo "============== BUILD IOS =============="

    if [ "$MODE" == "production" ];
    then
        buildProductionIos
    else
        buildDevelopmentIos
    fi
}

buildProductionAndroid() {
    echo "============== BUILD PRODUCTION ANDROID =============="
}

buildDevelopmentAndroid() {
    echo "============== BUILD DEVELOPMENT ANDROID =============="
}

buildAndroid() {
    echo "============== BUILD ANDROID =============="

    if [ "$MODE" == "production" ];
    then
        buildProductionAndroid
    else
        buildDevelopmentAndroid
    fi
}

if [ "$FLATFORM" == "ios" ];
then
    buildIos
else
    buildAndroid
fi