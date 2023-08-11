Remove-Item ./build
mkdir ./build
# 生成文件
cmake -B build -G "MinGW Makefiles"
Set-Location .\build
# 生成 dll
make
Set-Location ..
