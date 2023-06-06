#include <iostream>

class Example
{
public:
    Example()
    {
        std::cout << "Created an Example object" << std::endl;
    }

    Example(int x)
    {
        std::cout << "Created an Example object with x = " << x << "!" << std::endl;
    }
};

class Entity
{
private:
    std::string m_Name;
    Example m_Example;

public:
    Entity()
    {
        m_Name = "Unknown";
        m_Example = Example(8);
    }

    Entity(const std::string& name)
    {
        m_Name = name;
        m_Example = Example(12);
    }

    const std::string& GetName() const { return m_Name; }
};

// Using Member Initialiser Lists makes code more readable but also stops double construction
// (where the object is instantiated once in the member region at the top and again in the constructor)
// This stops unintentionally wasting performance
class EntityInitialiserList
{
private:
    std::string m_Name;
    int m_Score;
    Example m_Example;

public:
    EntityInitialiserList()
        : m_Name("Unknown"), m_Score(0), m_Example(8) // MUST be in order
    {
    }

    EntityInitialiserList(const std::string& name)
        : m_Name(name), m_Score(0), m_Example(12)
    {
    }

    const std::string& GetName() const { return m_Name; }
};

int main()
{
    std::cout << "----------------------------------" << std::endl;
    std::cout << "Without a member initialiser list:" << std::endl;
    std::cout << "----------------------------------" << std::endl;
    
    Entity e0;
    std::cout << e0.GetName() << std::endl << std::endl;
    
    Entity e1("Josh");
    std::cout << e1.GetName() << std::endl << std::endl;
    
    std::cout << "-------------------------------" << std::endl;
    std::cout << "With a member initialiser list:" << std::endl;
    std::cout << "-------------------------------" << std::endl;
    
    EntityInitialiserList e2;
    std::cout << e2.GetName() << std::endl << std::endl;
    
    EntityInitialiserList e3("Josh");
    std::cout << e3.GetName() << std::endl << std::endl;
}