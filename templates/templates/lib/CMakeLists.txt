# 设置最低版本要求
cmake_minimum_required(VERSION 3.16)

set(LIBHELLO_SRC "hello.cpp")
# 添加库的源文件
add_library(hello SHARED ${CMAKE_CURRENT_SOURCE_DIR}/lib/${LIBHELLO_SRC})
# 头文件
target_include_directories(hello PUBLIC ${CMAKE_CURRENT_SOURCE_DIR}/lib)
# 运行 make install 时进行一些文件的拷贝
install(TARGETS hello DESTINATION ${CMAKE_CURRENT_SOURCE_DIR}/dist/lib)
install(FILES ${CMAKE_CURRENT_SOURCE_DIR}/lib/hello.h DESTINATION ${CMAKE_CURRENT_SOURCE_DIR}/dist/include)
