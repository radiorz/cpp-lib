#!/usr/bin/env bash

# rm ./build -r
# mkdir -p ./build
# 生成文件
cmake -B build
cd ./build
# 生成 动态链接
make
cd ..
