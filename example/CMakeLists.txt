# 设置最低版本要求
cmake_minimum_required(VERSION 3.16)
PROJECT(main)
link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../libhello/hello)
# 将目录文件的源文件放在变量SRC_LIST
aux_source_directory(*cpp SRC_LIST)
add_executable(${PROJECT_NAME} main.cpp)
# 链接动态库
find_library(LIB_HELLO hello PATH ${CMAKE_CURRENT_SOURCE_DIR}/../libhello/build)
target_link_libraries(${PROJECT_NAME} ${LIB_HELLO})
