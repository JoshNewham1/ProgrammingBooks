#include "Log.h"
#include <iostream>

int main()
{
    Log("==============");
    const int LEVEL = 5;
    // Ternary operator - if level > 5 then 10 else 5
    int speed = LEVEL > 5 ? 10 : 5;
    std::string rank = LEVEL <= 5 ? "Beginner" : "Advanced"; // Avoids constructing an empty string
    
    std::cout << "speed: " << speed << "  rank: " << rank << std::endl;

    Log("==============");
    for (int i = 0; i < 5; i++)
    {
        if (i > 2)
            continue; // Continue skips to the next iteration of the for loop
        Log("Hello World!");
        std::cout << i << std::endl;
    }

    Log("==============");
    for (int i = 0; i < 5; i++)
    {
        if ((i + 1) % 2 == 0)
            break; // Break exits the loop
        Log("Hello World!");
        std::cout << i << std::endl;
    }

    Log("==============");
    for (int i = 0; i < 5; i++)
    {
        if ((i + 1) % 2 == 0)
            return 0; // Return breaks out of the current function and can be written anywhere
        Log("Hello World!");
        std::cout << i << std::endl;
    }

    std::cin.get();
}