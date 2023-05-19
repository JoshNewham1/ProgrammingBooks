#include <iostream>

int main()
{
    printf("=== Data Types ===\n");
    int signedNum = 16; // ~-2bn to +2bn
    printf("Signed int: %d (Size: %ld)\n", signedNum, sizeof(int));

    unsigned int unsignedNum = 8; // Up to ~4bn
    printf("Unsigned int: %d (Size: %ld)\n", unsignedNum, sizeof(int));
    unsignedNum = 20;
    printf("Unsigned int: %d\n", unsignedNum);

    char a = 'A';
    a = 65; // ASCII code for A
    printf("Char: %c (Size: %ld)\n", a, sizeof(char));

    long long veryBigNum = 99999999999999999LL;
    printf("long long: %lld (Size: %ld)\n", veryBigNum, sizeof(long long));

    float floatingPoint = 5.5f; // 4 bytes
    double morePreciseFloatingPoint = 5.5; // 8 bytes
    printf("Float: %f (Size: %ld). Double: %f (Size: %ld)\n", floatingPoint, sizeof(float), morePreciseFloatingPoint, sizeof(double));

    bool boolean = true; // 1 byte (can't address individual bits)
    printf("Boolean: %d (Size: %ld)\n", boolean, sizeof(bool)); // true = 1, false = 0

}