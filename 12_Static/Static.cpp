// Static (outside a class) - only available in this file / translation unit
// Should use whenever you don't need a global variable that is used across translation units - especially useful in header files
[[maybe_unused]] static int s_Variable = 5;