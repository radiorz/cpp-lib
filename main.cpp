#include <iostream>
#include "./lib/libhello/hello.h"
using namespace std;
int main()
{
  int a = hello(123);
  cout << a << endl;
  return 0;
}
