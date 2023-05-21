#include <iostream>

int s_Variable = 10;

struct Entity
{
    static int x, y; // Shared across all instances but logically stored inside the Entity struct

    static void Print() // This can also be static as we're using static variables (so it doesn't need to pass an Entity in)
    {
        std::cout << "x: " << x << ", y: " << y << std::endl;
    }
};

// Get definitions for compiler
int Entity::x;
int Entity::y;

int main()
{
    std::cout << s_Variable << std::endl; // Doesn't try to link to s_Variable in Static.cpp so compiles fine and has a value of 10

    Entity e;
    e.x = 2;
    e.y = 3;

    Entity e1;
    e1.x = 5; // As x and y are static, this is basically the same as writing Entity::x = 5
    e1.y = 8;

    Entity::Print();
    Entity::Print();

    std::cin.get();
}