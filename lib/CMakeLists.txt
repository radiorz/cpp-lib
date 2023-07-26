# 设置最低版本要求
cmake_minimum_required(VERSION 3.16)
# 设置项目名称和版本
project(hello VERSION 1.0)
# 添加库的源文件
add_library(hello SHARED ${CMAKE_CURRENT_SOURCE_DIR}/libhello/hello.cpp)
# 头文件
target_include_directories( ${CMAKE_CURRENT_SOURCE_DIR}/libhello)
# 设置安装路径
install(TARGETS hello DESTINATION lib)
install(FILES hello.h DESTINATION include)
