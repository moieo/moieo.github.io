#!/usr/bin/env bash

git add .
time_=$(date "+%Y-%m-%d %H:%M:%S")
git commit -m "Push at ${time_}"
git push origin dev
