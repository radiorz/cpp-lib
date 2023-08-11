#!/bin/bash
# 生成文件
cmake -B build
cd ./build
# 生成 动态链接
make
cd ..
