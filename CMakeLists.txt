# 设置最低版本要求
cmake_minimum_required(VERSION 3.16)
PROJECT(main)
ADD_SUBDIRECTORY(lib)
link_directories(app ${CMAKE_CURRENT_SOURCE_DIR}/lib/libhello)
add_executable(app main.cpp)
# 链接动态库
target_link_libraries(app ${CMAKE_CURRENT_SOURCE_DIR}/lib/build/libhello.dll)
