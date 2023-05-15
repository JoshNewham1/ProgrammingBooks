#include <iostream>

void Log(const char* message) 
{
    // The << operator is a function that pushes "Hello World!" and cout INTO the cout function
    std::cout << message << std::endl;
}