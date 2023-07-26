const ffi = require("ffi-napi");
const lib = new ffi.Library("../lib/build/libhello", {
  // 函数
  hello: ["int", ["int"]],
});
const value = lib.hello(123);
console.log(`value`, value);
