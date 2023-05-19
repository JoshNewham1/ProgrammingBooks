#include <iostream>

// The primary reason for functions is to avoid code duplication
// There is a small overhead for invoking a function (pushing args onto the stack, return address etc.)
// so don't go crazy with it!

int Multiply(int a, int b)
{
    return a * b;
}

// void returns nothing
void MultiplyAndLog(int a, int b)
{
    std::cout << Multiply(a, b) << std::endl;
}

// The main function is a "special" function in modern C/C++ that doesn't need to return an int explicitly
// It will return 0 by default, if no return value is specified
int main()
{
    MultiplyAndLog(3, 2);
    MultiplyAndLog(8, 5);
    MultiplyAndLog(90, 45);
    std::cin.get();
}