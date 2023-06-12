// this = pointer to the current object instance in a method

#include <iostream>

void PrintEntity(const Entity& e);

class Entity
{
public:
    int x, y;
    
    Entity(int x, int y)
    {
        Entity* e = this;
        
        this->x = x;
        this->y = y;
        PrintEntity(*this);
    }

    int GetX() const
    {
        const Entity* e = this; // this has to be const in a const method

        return x;
    }
};

void PrintEntity(const Entity& e)
{
    std::cout << "Entity(" << e.x << ", " << e.y << ")" << std::endl;
}