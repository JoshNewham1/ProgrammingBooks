#include <iostream>

class Entity
{
public:
    // Primitive types are not automatically initialised, otherwise there will be set to whatever was left over in memory
    float X, Y;

    // Constructors
    Entity()
    {
        std::cout << "Entity object created" << std::endl;
        X = 0.0f;
        Y = 0.0f;
    }

    // Destructor
    ~Entity()
    {
        // We don't actually need to clean anything up as these variables have been initialised inside the class
        // This needs to be done for manually created, heap-allocated variables
        std::cout << "Entity object destroyed" << std::endl;
    }

    void Print()
    {
        std::cout << "X: " << X << ", Y: " << Y << std::endl;
    }
};

void Function()
{
    Entity e;
    e.Print();
}

int main()
{
    Function();
    std::cin.get();
}