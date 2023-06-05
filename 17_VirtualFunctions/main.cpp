// Virtual functions allow us to override methods in subclasses
#include <iostream>
#include <string>

class Entity
{
public:
    virtual std::string GetName() { return "Entity"; }
};

class Player : public Entity
{
private:
    std::string m_Name;
public:
    Player(const std::string& name)
        :m_Name(name) {}
    
    std::string GetName() override { return m_Name; } // Use the override keyword to make code more readable and prevent errors
};

void PrintName(Entity* entity)
{
    // If GetName isn't virtual, this calls entity's GetName, even if we're passing a Player
    std::cout << entity->GetName() << std::endl;
}

int main()
{
    // This all seems to work fine
    Entity* e = new Entity();
    std::cout << e->GetName() << std::endl;

    Player* p = new Player("Josh");
    std::cout << p->GetName() << std::endl;

    // This fails and prints "Entity" if GetName isn't virtual
    Entity* entity = p;
    PrintName(entity);
    
    std::cin.get();
}