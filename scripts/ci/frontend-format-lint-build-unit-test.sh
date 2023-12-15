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


npx nx affected --target=lint --parallel --max-warnings=0
exitStatus=$?
if [ $exitStatus -ne 0 ]; then
    echo -e "\n\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    echo "One or more lint violations found; fix to continue."
    echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    exit $exitStatus
fi


npx nx affected --target=build --prod --parallel
exitStatus=$?
if [ $exitStatus -ne 0 ]; then
    echo -e "\n\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    echo "One or more modules failed to build; fix to continue."
    echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    exit $exitStatus
fi


npx nx affected --target=test --parallel
exitStatus=$?
if [ $exitStatus -ne 0 ]; then
    echo -e "\n\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    echo "One or more module unit tests failed; fix to continue."
    echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    exit $exitStatus
fi