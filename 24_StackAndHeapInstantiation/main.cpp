#include <iostream>
#include <string>

using String = std::string;

class Entity
{
private:
    String m_Name;
public:
    Entity() : m_Name("Unknown") {}
    Entity(const String& name) : m_Name(name) {}

    const String& GetName() const { return m_Name; }
};

int main()
{
    // Instantiated and stored on the stack
    // Do this whenever you can as it's faster and will be cleaned up when it goes out of scope
    Entity entity("Josh");
    std::cout << entity.GetName() << std::endl;

    // However, if you need the object to persist after the function goes out of scope, need to use the heap
    // Also, if you have large objects or many of them, you'll need to use the heap as the stack is only a couple of MB
    Entity* e;
    {
        // "new" allocates on the heap
        Entity* entity = new Entity("Josh 2");
        e = entity;
        std::cout << entity->GetName() << std::endl;
        
        // Have to use "delete" whenever you use "new" to free the memory
        delete entity;
    }
    // std::cout << e->GetName() << std::endl; // Gives a seg fault as we've freed the object
}