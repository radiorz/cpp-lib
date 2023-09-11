const ffi = require("ffi-napi");
const lib = new ffi.Library("../libhello/build/libhello", {
  // 函数
  hello: ["void", ["string"]], // 字符串为啥不行
  add: ["int", ["int", "int"]],
});
const name = Buffer.from("world", "utf8");
lib.hello(name);

const sum = lib.add(1, 2);
console.log(`sum`, sum);
