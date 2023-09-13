# 新建文件夹
New-Item -ItemType Directory -Path ./build
# 编译
g++ -shared -o ./build/libhello.dll ./lib/hello.cpp
