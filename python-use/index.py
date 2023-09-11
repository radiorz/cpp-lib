import ctypes
import os

current_dir = os.path.dirname(os.path.abspath(__file__))


lib = ctypes.CDLL(os.path.join(current_dir, '..', 'libhello', 'build', 'libhello.dll'))

result = lib.add(1,2)
lib.hello("world")
