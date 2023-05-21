#include "Log.h"
#include <iostream>

int main()
{
    Log("==================");
    // Third clause in the for loop is always executed after the current iteration
    for (int i = 0; i < 5; i++)
    {
        Log("Hello World!");
    }

    Log("==================");
    // We can even move clauses around
    int i = 0;
    for ( ; i < 5; )
    {
        Log("Hello World!");
        i++;
    }

    Log("==================");
    // While loops are more condition-focused and should be used if you already have a condition that exists
    bool running = true;
    i = 0;
    while (running)
    {
        Log("Hello World!");
        i++;
        if (i == 5) running = false;
    }

    Log("==================");
    // Do-while loops aren't that useful. They check the condition at the end instead of the start
    do
    {
        Log("Hello World");
    } while (running);
    

    std::cin.get();
}