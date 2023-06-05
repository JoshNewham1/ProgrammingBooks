// Pure virtual functions = interfaces in other languages
#include <iostream>
#include <string>

class Printable
{
public:
    virtual std::string GetClassName() = 0; // "Pure" and has to be implemented in a subclass
};

class Entity : public Printable
{
public:
    virtual std::string GetName() { return "Entity"; }
    std::string GetClassName() override { return "Entity"; }
};

class Player : public Entity
{
private:
    std::string m_Name;
public:
    Player(const std::string& name)
        :m_Name(name) {}
    
    std::string GetName() override { return m_Name; } // Use the override keyword to make code more readable and prevent errors
    std::string GetClassName() override { return "Player"; }
};

void PrintClassName(Printable* p)
{
    std::cout << p->GetClassName() << std::endl;
}

int main()
{
    Entity* e = new Entity();
    PrintClassName(e);

    Player* p = new Player("Josh");
    PrintClassName(p);

    Entity* entity = p;
    PrintClassName(entity);
    
    std::cin.get();
}