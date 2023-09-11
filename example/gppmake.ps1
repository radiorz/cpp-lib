# g++ -g main.cpp -o ./build/main
g++ -g main.cpp -I ./src -I ../libhello/lib -L ../libhello/build -lhello -o ./build/main
