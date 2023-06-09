#include <iostream>
#include <string>

class Entity
{
private:
    std::string m_Name;
    int m_Age;
public:
    Entity(const std::string& name)
        : m_Name(name), m_Age(-1) {}
    explicit Entity(int age)
        : m_Name("Unknown"), m_Age(age) {}
    std::string GetName() const
    {
        return m_Name;
    }
};

void PrintEntity(const Entity& entity)
{
    std::cout << entity.GetName() << std::endl;
}

int main()
{
    Entity e("Josh"); // The standard way of instantiating an object
    Entity a = std::string("Josh"); // Implicitly converting between string and Entity (mapping string to Entity's name)
    // Entity b = 22; // Cannot implicitly convert between int and Entity (mapping int to Entity's age) as we've used "explicit"
    
    // Compiler can't convert between const char array (the default string literal) and std::string so we have to do that conversion
    PrintEntity(std::string("Josh"));
    // PrintEntity(22); // Fails with an explicit constructor
}