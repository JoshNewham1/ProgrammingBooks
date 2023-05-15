// Preprocessor statements (begin with #)
// Processed just before compilation. In this case, just include all the contents of the iostream header file in this file
// Header files aren't compiled, they are just included in .cpp files that are compiled
#include <iostream>
#include "Log.h"

// Declarations (telling the compiler this function exists somewhere)
int Multiply(int a, int b);
float SinApprox(float x);

// Main function (entry point)
// Special case that doesn't have to actually return anything (defaults to returning 0)
int main()
{
    Log("Hello World!");
    std::cout << Multiply(1, 2) << std::endl;
    std::cout << SinApprox(3.14f) << std::endl;
    std::cin.get();
}