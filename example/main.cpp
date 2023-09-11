#include <iostream>
#include "../libhello/lib/hello.h"
using namespace std;
int main()
{
  std::clog << "123123 "<< 123123 << std::endl;
  int a = hello(123);
  cout << a << endl;
  return 0;
}
