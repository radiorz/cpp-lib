#ifndef __HELLO_H__
#define __HELLO_H__
#include <iostream>
#include <string.h>
using namespace std;

extern "C"
{
  __declspec(dllexport) int hello(int); // windows 要加
  // int hello(int);
}
#endif
