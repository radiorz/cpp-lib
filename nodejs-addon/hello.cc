#include <napi.h>
#include <iostream>
Napi::String Method(const Napi::CallbackInfo &info)
{
  Napi::Env env = info.Env();
  std::clog << "env " << env << std::endl;
  return Napi::String::New(env, "world");
}

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
  exports.Set(Napi::String::New(env, "hello"),
              Napi::Function::New(env, Method));
  return exports;
}

NODE_API_MODULE(hello, Init)
