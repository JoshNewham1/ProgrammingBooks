// Visibility is used by developers only and doesn't exist after compilation
// Private = only "allowed" to use inside the class, generally by library authors
// Public = can be used from outside the class, allows for additional behaviour / validation
#include <iostream>
#include <string>

// Default visibility for classes = private
// Default visibility for structs = public
class Entity
{
private:
    int X, Y;

protected:
    void Print(const char* message)
    {
        std::cout << message << std::endl;
    }

public:
    Entity()
    {
        X = 0;
        Y = 0;
        Print("Instantiated Entity");
    }

    virtual void PrintClassName()
    {
        Print("Entity");
    }
};

class Player : public Entity
{
public:
    Player()
    {
        // Can't access X or Y here as they're private, can access protected methods / attributes
        Print("Instantiated Player");
    }
    virtual void PrintClassName() override
    {
        Print("Player");
    }
};

int main()
{
    Entity e;
    Player p;
    
    // Cannot access X or Y anywhere else (e.X and e.Y throw errors)
    std::cin.get();
}