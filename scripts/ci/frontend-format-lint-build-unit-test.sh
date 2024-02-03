#!/bin/bash

./gradlew :to-frontend:formatCheckAllCi
exitStatus=$?
if [ $exitStatus -ne 0 ]; then
    echo -e "\n\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    echo "One or more frontend files are not properly formatted."
    echo "To fix, run: ./gradlew :to-frontend:formatWriteAll"
    echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    exit $exitStatus
fi


./gradlew :to-frontend:lintAffectedCi
exitStatus=$?
if [ $exitStatus -ne 0 ]; then
    echo -e "\n\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    echo "One or more lint violations found; fix to continue."
    echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    exit $exitStatus
fi


./gradlew :to-frontend:buildAffectedCi
exitStatus=$?
if [ $exitStatus -ne 0 ]; then
    echo -e "\n\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    echo "One or more modules failed to build; fix to continue."
    echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    exit $exitStatus
fi


./gradlew :to-frontend:unitTestAffectedCi
exitStatus=$?
if [ $exitStatus -ne 0 ]; then
    echo -e "\n\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    echo "One or more module unit tests failed; fix to continue."
    echo "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    exit $exitStatus
fi