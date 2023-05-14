// Preprocessor statements (begin with #)
// Processed just before compilation. In this case, just include all the contents of the iostream header file in this file
// Header files aren't compiled, they are just included in .cpp files that are compiled
#include <iostream>

// Declaration (telling the compiler this function exists somewhere)
void Log(const char* message);

// Main function (entry point)
// Special case that doesn't have to actually return anything (defaults to returning 0)
int main()
{
    // The << operator is a function that pushes "Hello World!" and cout INTO the cout function
    Log("Hello World!");
    std::cin.get();
}