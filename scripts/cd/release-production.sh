#!/bin/bash

TARGET=$1

if [[ "$TARGET" == "s3" ]]; then
  echo "Deploying frontend to S3..."
  aws s3 sync ./dist/frontend s3://your-s3-bucket-name --delete
elif [[ "$TARGET" == "lambda" ]]; then
  echo "Deploying backend to AWS Lambda..."
  zip -r backend.zip .
  aws lambda update-function-code \
    --function-name your-lambda-function-name \
    --zip-file fileb://backend.zip
else
  echo "Unknown deployment target: $TARGET"
  exit 1
fi