# 生成文件
cmake -B build -G "Ninja"
Set-Location .\build
# 生成 dll
ninja
Set-Location ..
