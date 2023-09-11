#ifndef __HELLO_H__
#define __HELLO_H__
#include <iostream>
#include <string.h>
using namespace std;

// ??? extern "C" 
extern "C"
{ 
  // ??? 为何报错
  // declspec(dllexport); int hello(int); // windows 要加
  int hello(int) {
    std::clog << "123 "<< 123 << std::endl;
    return 0;
  }
}
#endif
