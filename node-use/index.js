const ffi = require("ffi-napi");
const lib = new ffi.Library("../libhello/build/libhello", {
  // 函数
  hello: ["int", ["int"]],
});
const value = lib.hello(123);
console.log(`value`, value);
