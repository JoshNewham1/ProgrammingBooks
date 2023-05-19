#include "Log.h" // Look for Log.h in the relative path
#include <iostream> // Search the "compiler include paths" for iostream (doesn't have to be relative)
// C++ standard library header files don't have an extension and C std lib headers are usually .h

void InitLog()
{
    Log("Initialising Log");
}

void Log(const char* message)
{
    std::cout << message << std::endl;
}