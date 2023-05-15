#pragma once
#include <iostream>

// Header files can contain definitions but these might collide if included in multiple files
// So best practice is to have declarations in the header and definitions in a .cpp file
void Log(const char* message);