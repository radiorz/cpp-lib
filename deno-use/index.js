import { dlopen } from "deno";

const lib = new Library("path/to/file.(so|dll|dylib)", {
  add: {
    params: ["i32", "i32"],
    returns: "i32",
  },
});

console.log("add", lib.call("add", 1, 2));
