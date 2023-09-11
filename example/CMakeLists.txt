cmake_minimum_required(VERSION 3.0)
project(YourProjectName)

# 设置 C++ 标准
set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -g")

# 添加头文件搜索路径
include_directories(
    ./src
    ../libhello/lib
)

# 添加链接库搜索路径
link_directories(
    ../libhello/build
)
# 添加可执行文件
add_executable(main main.cpp)


# 链接所需的库
target_link_libraries(main hello)
