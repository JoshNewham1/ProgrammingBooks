#include <iostream>
#include "string.h" // Needed for memset

#define LOG(x) std::cout << x << std::endl

int main()
{
    // A pointer simply points to an address in memory (it is just a number). It doesn't hold any data
    // The data at the address is assumed to be of type void
    void* ptr = nullptr; // or NULL or 0 - this is completely useless as a memory address of 0 is not valid
    LOG("nullptr:");
    LOG(ptr);
    LOG("");

    int var = 8;
    int* varPtr = &var; // Create a pointer from the memory address of an existing variable (with &)
    
    LOG("Address of var:");
    LOG(varPtr);
    LOG("");
    
    LOG("Value of var:");
    LOG(*varPtr); // * dereferences this pointer and gets the data at varPtr
    LOG("");
    
    *varPtr = 10; // Sets var to 10
    LOG("New value of var:");
    LOG(var);
    LOG("");

    char* buffer = new char[8]; // Allocate 8 bytes of memory on the heap ('new') and returns a pointer to its address
    memset(buffer, 0, 8); // Fill the buffer with 8 bytes of 0
    char** bufferPtr = &buffer; // Get a pointer to the pointer to the start of buffer
    LOG("Buffer address:");
    LOG(bufferPtr);
    delete[] buffer; // Clean up when done (deallocate)

    std::cin.get();
}