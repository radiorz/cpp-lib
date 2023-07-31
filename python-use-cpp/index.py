# test.py
import ctypes

# 加载 DLL 文件
add_dll = ctypes.cdll.LoadLibrary('../libhello/build/hello.dll')

# 调用 C++ 函数
result = add_dll.add(1, 2)

# 输出结果
print(result)
