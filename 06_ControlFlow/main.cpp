#include "Log.h"
#include <iostream>

int main()
{
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