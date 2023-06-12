// Smart pointers allow you to automate the process of freeing memory
// They allow us to avoid calling "new" or "delete"
// They are essentially a wrapper around a "raw" pointer that handle allocating and freeing of memory for an object

// Unique pointers - cannot be copied, when you just want a unique reference in a scope

// Shared pointers - can be copied, passed into functions etc, when you want to share a pointer across scopes
//                 - frees when last reference goes out of scope

// Weak pointers   - don't increase the ref count when copied
//                 - good if you don't want to "take ownership" of an object

#include <iostream>
#include <memory> // Needed for smart pointers

class Entity
{
public:
    int x;

    Entity()
    {
        std::cout << "Created Entity!" << std::endl;
    }

    ~Entity()
    {
        std::cout << "Destroyed Entity!" << std::endl;
    }

    void Print() {}

};

int main()
{
    {
        // There's basically no overhead with unique pointers
        // std::unique_ptr<Entity> entity(new Entity()); // Can create a unique pointer like this
        std::unique_ptr<Entity> entity = std::make_unique<Entity>(); // But it's preferred (more safe) to create one like this
        entity->Print();
    }

    {
        std::shared_ptr<Entity> e0;
        {
            // Don't want to call "new" as shared pointer already allocates memory for reference count etc so you'd be allocating twice
            std::shared_ptr<Entity> sharedEntity = std::make_shared<Entity>();
            e0 = sharedEntity; // Allowed
        } // Doesn't free here
    } // Frees here instead, when there are no references left

    {
        std::weak_ptr<Entity> e0;
        {
            std::shared_ptr<Entity> weakEntity = std::make_shared<Entity>();
            e0 = weakEntity; // Doesn't increase ref count
        } // Will free here
        
        if (e0.expired())
            std::cout << "e0 has expired!" << std::endl;
    }
}