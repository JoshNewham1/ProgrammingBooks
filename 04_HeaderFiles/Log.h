// Only include this file once into a single translation unit (.cpp file)
// e.g. if we included Log and Common, it wouldn't redefine everything
#pragma once

void InitLog();
void Log(const char* message);