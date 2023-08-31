# flutter 使用 dll 库
## 步骤
### 新建项目
```bash
flutter create --template=plugin_ffi --platforms=android,ios,linux,macos,windows ffigen_app
```
### 修改 cmake
总结： 最好的方式是加入 cmakelists.txt 中

生成的项目目录下，有一个windows文件夹，里面有一个 CMakeLists.txt, 直接运行example/lib的main.dart, 会自动生成预设的ffigen_app.dll文件。此时如果我们需要引入别的dll文件，则只需要修改 CMakeLists.txt, 在下面添加:
bash复制代码set(ffigen_app_bundled_libraries
        "${CMAKE_CURRENT_SOURCE_DIR}/helloworld.dll"
        PARENT_SCOPE
        )

(假设helloworld.dll和CMakeLists同级)
保存后再重新运行，此时引入的helloworld.dll就会自动被拷贝到 Debug 目录下。如果运行 flutter build windows 则会被自动拷贝到 Release 目录下。

# 参考文档
https://juejin.cn/post/7223676609794015287
