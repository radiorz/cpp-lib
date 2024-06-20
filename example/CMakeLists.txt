cmake_minimum_required(VERSION 3.5)
project(YourProjectName)

# 设置 C++ 标准
set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -g")

# 添加头文件搜索路径
include_directories(
    ./src
    ./modules/libhello@0.0.1/dist/include
)

# 添加链接库搜索路径
link_directories(
    ./modules/libhello@0.0.1/dist/lib
)
# 添加可执行文件
add_executable(main ./src/main.cpp)


# 链接所需的库
target_link_libraries(main hello)

# 打包用
install(TARGETS main DESTINATION ${CMAKE_CURRENT_SOURCE_DIR}/dist)
# 获取 build 目录下所有的 DLL 文件
file(GLOB DLL_FILES ${CMAKE_CURRENT_BINARY_DIR}/*.dll)

install(FILES ${DLL_FILES} DESTINATION ${CMAKE_CURRENT_SOURCE_DIR}/dist)

