const ffi = require("ffi-napi");
const lib = new ffi.Library("hello", {
  // 函数
  hello: ["void", ["string"]],
  getMessage: [
    // 返回类型
    "string",
    // 参数类型列表
    ["string"],
  ],
});
lib.hello("123");
const value = lib.getMessage("abc");
console.log(`value`, value);
