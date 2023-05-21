#include <iostream>

class Entity
{
public:
    // Primitive types are not automatically initialised, otherwise there will be set to whatever was left over in memory
    float X, Y;

    // Constructors
    Entity()
    {
        X = 0.0f;
        Y = 0.0f;
    }
    Entity(float x, float y)
    {
        X = x;
        Y = y;
    }

    void Print()
    {
        std::cout << "X: " << X << ", Y: " << Y << std::endl;
    }
};

// If we don't want to allow an object to be instantiated (just static methods)
class NoCtor
{
public:
    NoCtor() = delete;
};

// Alternatively, we can make the constructor private
class NoCtor2
{
private:
    NoCtor2() {}
};

int main()
{
    Entity e;
    e.Print();

    Entity e1(10.0f, 5.0f);
    e1.Print();

    std::cin.get();
}