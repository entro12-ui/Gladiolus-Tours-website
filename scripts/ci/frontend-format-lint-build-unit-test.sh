#!/bin/bash

npx nx format:check --all
exitStatus=$?
if [ $exitStatus -ne 0 ]; then
    echo -e "\n\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    echo "One or more frontend files are not properly formatted."
    echo "To fix, run: nx format:write --all"
    echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    exit $exitStatus
fi