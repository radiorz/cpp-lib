#ifndef __HELLO_H__
#define __HELLO_H__
#include <iostream>
#include <string>
using namespace std;

extern "C"
{ 
  void hello(string);
  int add(int,int);
}
#endif
