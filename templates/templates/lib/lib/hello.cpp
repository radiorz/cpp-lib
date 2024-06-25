#include "./hello.h"


namespace hello {
  void hello(string name)
  {
    cout << "hello " << name << "!"<< endl;
  }

  int add(int a, int b){
    return a + b;
  }
}
