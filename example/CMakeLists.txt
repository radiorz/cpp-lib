# 设置最低版本要求
cmake_minimum_required(VERSION 3.16)
PROJECT(main)
message(STATUS "PROJECT_NAME: ${PROJECT_NAME}")
# 设置源文件目录路径
aux_source_directory(. SRC_LIST)
# link_directories(${CMAKE_CURRENT_SOURCE_DIR}/../libhello)
# 输出源文件列表
message(STATUS "SRC_LIST: ${SRC_LIST}")

# 添加可执行文件
add_executable(${PROJECT_NAME} ${SRC_LIST})

# 链接动态库
find_library(LIB_HELLO hello PATH ${CMAKE_CURRENT_SOURCE_DIR}/../libhello/build)
message(STATUS "LIB_HELLO: ${LIB_HELLO}")
target_link_libraries(${PROJECT_NAME} ${LIB_HELLO})
