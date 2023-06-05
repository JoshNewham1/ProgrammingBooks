#include <iostream>
#include <array>

class Entity
{
public:
    static constexpr int exampleSize = 5;
    int example[exampleSize]; // You need to keep track of the size yourself if using raw arrays

    std::array<int, 5> another; // A safer but more expensive way of doing arrays with the standard lib
};

int main()
{
    /// Arrays on the stack ///
    // Destroyed when out of scope, want to do this whenever possible
    int example[5]; // Arrays are pointers to the first element
    int* ptr = example;
    // int count = sizeof(example) / sizeof(int); // 5 (not a reliable method, only works for stack-allocated arrays)
    
    example[2] = 5;
    *(ptr + 2) = 6; // Same as above but using pointer arithmetic as arrays are contiguous (8 bytes, 4 bytes per int)

    example[5] = 5; // Overflow

    for (int i = 0; i < 5; i++)
        example[i] = 2;

    std::cout << example[0] << std::endl;
    std::cout << example << std::endl;

    /// Arrays on the heap ///
    // Not automatically deleted, used when returning from a function
    int* another = new int[5];
    for (int i = 0; i < 5; i++)
    {
        another[i] = 2;
    }
    delete[] another;

    std::cin.get();
}