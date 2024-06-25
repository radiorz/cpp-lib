# 设置最低版本要求
cmake_minimum_required(VERSION 3.16)

set(LIB_SRC "<%= projectName %>.cpp")
# 添加库的源文件
add_library(<%= projectName %> SHARED ${CMAKE_CURRENT_SOURCE_DIR}/lib/${LIB_SRC})
# 头文件
target_include_directories(<%= projectName %> PUBLIC ${CMAKE_CURRENT_SOURCE_DIR}/lib)
# 运行 make install 时进行一些文件的拷贝
install(TARGETS <%= projectName %> DESTINATION ${CMAKE_CURRENT_SOURCE_DIR}/dist/lib)
install(FILES ${CMAKE_CURRENT_SOURCE_DIR}/lib/<%= projectName %>.h DESTINATION ${CMAKE_CURRENT_SOURCE_DIR}/dist/include)
