// Char = 1 byte which makes them useful for pointer arithmetic, allocating specific sizes and storing an ASCII character
// Strings = array of 1 byte characters
#include <iostream>
#include <string> // Contains overload to send std::string to an output stream (for cout)

void PrintString(const std::string& string) // Use const and & to get memory address instead of copying
{
    std::cout << string << std::endl;
}

int main()
{
    // C-style string
    // An array of ASCII bytes followed by a null terminator (completed zeroed byte)
    const char* name = "Josh"; // Using "const" is best practice, not heap-allocated
    char name2[5] = { 'J', 'o', 's', 'h', '\0' }; // Manually creating a string
    std::cout << name << std::endl;
    std::cout << name2 << std::endl;

    // Should be using std::string
    std::string name3 = "Josh"; // std::string has a constructor that takes in a const char[] so we can use it like this
    std::cout << name3 << std::endl;
    std::cout << "Length of name3: " << name3.size() << std::endl;
    
    // Concatenation
    name3 += " Newham";
    std::string name4 = std::string("Josh") + " Newham";

    // Searching
    bool contains = name4.find("Josh") != std::string::npos; // npos = illegal position
    std::cout << "name4 contains Josh: " << contains << std::endl;
}