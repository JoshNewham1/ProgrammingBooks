// Char = 1 byte which makes them useful for pointer arithmetic, allocating specific sizes and storing an ASCII character
// Strings = array of 1 byte characters
#include <iostream>
#include <string> // Contains overload to send std::string to an output stream (for cout)
#include <cstring> // C standard library (for C string utils)

void PrintString(const std::string& string) // Use const and & to get memory address instead of copying
{
    std::cout << string << std::endl;
}

int main()
{
    // C-style string
    // An array of ASCII bytes followed by a null terminator (completed zeroed byte)
    const char* name = "Josh";  /* Using "const" is best practice, not heap-allocated
                                  Undefined behaviour if you change it as it's part of the read-only data segment of the assembly
                                */
    char name2[5] = { 'J', 'o', 's', 'h', '\0' }; // Manually creating a string
    
    std::cout << name << std::endl;
    std::cout << name2 << std::endl;
    std::cout << "Length of name2: " << strlen(name2) << std::endl << std::endl;

    // If we want to modify a string, it needs to be a non-const array
    char nameModifiable[5] = "Josh";
    nameModifiable[0] = 'H';
    std::cout << "Name (modifiable): " << nameModifiable << std::endl << std::endl;

    // Other character types
    const char* utf8 = u8"£1.20"; // Regular char, UTF-8 (depending on compiler)
    const wchar_t* wName = L"Josh"; // "Wide char", 2 bytes on Windows, 4 bytes on Linux
    // Only really useful for writing to files as no standard output stream
    const char16_t* char16Name = u"Josh"; // UTF-16LE (native text on Windows)
    const char32_t* char32Name = U"Josh"; // UTF-32
    
    std::cout << "Different string types:" << std::endl;
    std::cout << "utf8: " << utf8 << std::endl;
    std::cout << "wName: " << wName << std::endl;
    std::cout << "char16Name: " << char16Name << std::endl;
    std::cout << "char32Name: " << char32Name << std::endl << std::endl;

    // Multi-line strings
    // R = raw, ignores escape characters
    const char* multiLine = R"(Line1
    Line2
    Line3
    Line4)";
    std::cout << "Multi-line strings:" << std::endl;
    std::cout << "utf8: " << multiLine << std::endl << std::endl;

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