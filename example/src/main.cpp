#include <iostream>
#include "hello.h"
using namespace std;
int main()
{
  hello("world");
  std::clog << "add(1,2) "<< add(1,2) << std::endl;
  return 0;
}
