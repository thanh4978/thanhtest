#!/usr/bin/env bash

if [ "$ENV" == "production" ];
then
  echo "<============== START [ PRODUCTION ] ==============>"
  
  # copy the firebase config file
  yes | cp -rf "configs/production/google-services.json" android/app
  yes | cp -rf "configs/production/GoogleService-Info.plist" ios/FJob

  echo "<============== END  [ PRODUCTION ] ==============>"

elif [ "$ENV" == "development" ]
then
    
  echo "<============== START [ DEVELOPMENT ] ==============>"

  # copy the firebase config file
  yes | cp -rf "configs/development/google-services.json" android/app
  yes | cp -rf "configs/development/GoogleService-Info.plist" ios/FJob

  echo "<============== END [ DEVELOPMENT ] ==============>"

else
    echo "<============== ERROR -> ENV NOT FOUND ==============>"
fi