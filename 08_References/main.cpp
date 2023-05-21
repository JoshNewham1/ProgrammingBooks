#include <iostream>

#define LOG(x) std::cout << x << std::endl

void IncrementByValue(int value)
{
    value++; // Passed by value so incrementing a local variable and then losing the result
}

// The pointer and reference functions compile to the exact same code but using a reference is much simpler
void IncrementByPointer(int* value)
{
    (*value)++; // Dereference and increment (so we're not incrementing a memory address)
}

void IncrementByReference(int& value)
{
    value++; // Increment actual variable
}

int main()
{
    // A reference is an alias to a variable. You can't change them like you can with pointers
    // Setting a reference to a value sets the underlying variable to that value (you can't change what a reference references)

    int a = 5;
    int& ref = a; // A variable isn't actually created
    ref = 2;
    LOG("Changing a reference:");
    LOG(a);
    LOG("");

    LOG("Passing by value:");
    a = 5;
    LOG(a);
    IncrementByValue(5);
    LOG(a);
    LOG("");
    

    LOG("Passing by pointer:");
    a = 5;
    LOG(a);
    IncrementByPointer(&a);
    LOG(a);
    LOG("");
    
    LOG("Passing by reference:");
    a = 5;
    LOG(a);
    IncrementByReference(a);
    LOG(a);
    LOG("");

    std::cin.get();
}