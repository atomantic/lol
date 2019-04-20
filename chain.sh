#!/usr/bin/env bash
set -e
echo "running"
while [ $?==0 ]
do
    cat lol >> chain.txt
    git checkout HEAD^
done
