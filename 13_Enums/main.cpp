#include <iostream>

// Simply representing possibilities as numerical values so they can be easily checked
enum Example : unsigned char
{
    A, B, C
};

int main()
{
    Example value = A; // Does not allow anything other than A, B or C

    if (value == B)
    {

    }

    std::cin.get();
}