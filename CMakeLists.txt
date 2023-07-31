# 设置最低版本要求
cmake_minimum_required(VERSION 3.16)
PROJECT(main)
ADD_SUBDIRECTORY(libhello)
link_directories(${CMAKE_CURRENT_SOURCE_DIR}/libhello/libhello)
add_executable(main main.cpp)
# 链接动态库
target_link_libraries(main ${CMAKE_CURRENT_SOURCE_DIR}/libhello/build/libhello.dll)
