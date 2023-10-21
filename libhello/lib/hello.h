#ifndef __HELLO_H__
#define __HELLO_H__
#include <iostream>
#include <string>
using namespace std;

// 变成c 才能被调用
#ifdef __cplusplus
extern "C"
{
#endif

  void hello(string);
  int add(int, int);

#ifdef __cplusplus
}
#endif

#endif
