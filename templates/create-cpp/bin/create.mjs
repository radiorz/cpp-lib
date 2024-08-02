#!/usr/bin/env node

import inquirer from "inquirer";
import { Creator, checkNodeVersion, echoPackage } from "@tikkhun/create";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
const prompts = [
  {
    type: "input",
    name: "projectName",
    message: "项目名称",
  },
  {
    type: "list",
    name: "template",
    message: "项目模板",
    choices: ["project", "lib"],
    // 手动输入
  },
];
async function bootstrap() {
  checkNodeVersion(12);
  echoPackage();
  let options = await inquirer.prompt(prompts);
  const createOptions = {
    ...options,
    template: join(
      dirname(fileURLToPath(import.meta.url)),
      `../templates/${options.template}`
    ),
    templateFiles: ["CMakeLists.txt",'lib/main.h','lib/main.cpp'],
  };
  if (options.template == "lib") {
    createOptions.replaces = [
      { sourcePath: "./lib/main.h", targetPath: `./lib/${options.projectName}.h` },
      { sourcePath: "./lib/main.cpp", targetPath: `./lib/${options.projectName}.cpp` },
    ];
  }
  const creator = new Creator(createOptions);
  await creator.start();
}
bootstrap();
