#include <iostream>
#define UNUSED(expr) do { (void)(expr); } while (0)

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

};

/*

int* CreateArray1()
{
    int array[50];
    return array;
} // Will fail as the array is deallocated when function goes out of scope

*/

int* CreateArray2(int* array)
{
    // Do something with the array
    return array;
}

int* CreateArray3()
{
    int* array = new int[50];
    return array;
} // Array will stay on the heap until freed

class ScopedPtr
{
private:
    Entity* m_Ptr;

public:
    ScopedPtr(Entity* ptr)
        : m_Ptr(ptr) {}
    
    ~ScopedPtr()
    {
        delete m_Ptr;
    }
};

int main()
{
    // This is an empty scope but could be an if statement, for loop etc.
    {
        Entity e; // Create, allocate memory on stack, call constructor
    } // Delete when goes out of scope, free memory on stack, call destructor

    {
        Entity* e = new Entity(); // Create, allocate memory on heap, call constructor
        UNUSED(e); // Suppress unused error
    } // Will never free

    {
        // ScopedPtr is allocated on the stack so is deleted automatically, calling destructor and deleting entity
        ScopedPtr e = new Entity();
        UNUSED(e); // Suppress unused error
    }
}