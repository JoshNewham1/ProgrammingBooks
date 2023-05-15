#include <cmath>
#include "Log.h"

#if 1
int Multiply(int a, int b) 
{
    Log("Multiplying");
    return a * b;
}
#endif

// Static functions can only be referenced in the current file / translation unit
// They aren't checked by the linker
static int Factorial(int n)
{
    int result = 1;
    for (int i = 1; i <= n; i++)
    {
        result *= i;
    }
    return result;
}

float SinApprox(float x) 
{
    return x 
            - (std::pow(x, 3) / Factorial(3)) 
            + (std::pow(x, 5) / Factorial(5))
            - (std::pow(x, 7) / Factorial(7))
            + (std::pow(x, 9) / Factorial(9))
            - (std::pow(x, 11) / Factorial(11));
}