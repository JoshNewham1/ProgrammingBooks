#include <iostream>

class Entity
{
private:
    int m_X, m_Y;
    int* m_ptrX, *m_ptrY;
    mutable int m_mutVar; // Can be modified in a const method
public:
    Entity()
    {
        m_X = 0;
        m_Y = 0;
    }

    // Method won't modify any class member variables
    int GetX() const
    {
        // m_X = 2; // CAN'T change any values
        return m_X;
    }

    // Returning a pointer that can't be repointed or have its value modified
    // and the method won't modify any class variables
    const int* const GetXPtr() const
    {
        return m_ptrX;
    }

    void SetX(int x) // Can't be const as we're writing
    {
        m_X = x;
    }
    
    void SetMutable(int x) const
    {
        m_mutVar = x;
    }
};

void PrintEntity(const Entity& e)
{
    // ONLY const methods can be called when an object is passed by reference
    std::cout << "Entity: " << e.GetX() << std::endl;
    e.SetMutable(10); // Allowed as variable is mutable
    // e.SetX(10); // Not allowed
}

int main()
{
    const int MAX_AGE = 90;

    int* a = new int; // Create a normal int ptr on the heap
    
    *a = 2;
    a = (int*)&MAX_AGE; // Breaking the const "promise" and setting a to point at the const
    std::cout << "*a: " << *a << std::endl;
    
    const int* b = new int; // Create a const int ptr on the heap, makes the value of what's being pointed to
    
    // *b = 2; // Can't change the CONTENTS of the pointer, can change what it points to
    b = (int*)&MAX_AGE; // Breaking the const "promise" and setting a to point at the const
    std::cout << "*b: " << *b << std::endl;
    
    int* const c = new int; // Create an int const ptr on the heap, makes the actual pointer constant
    
    *c = 2; // Can change the contents of the pointer
    // c = (int*)&MAX_AGE; // CAN'T change what it points to
    std::cout << "*c: " << *c << std::endl;
    
    int const* d = new int; // Create an int const ptr on the heap, same as b
    
    // *d = 2; // Can't change the CONTENTS of the pointer
    d = (int*)&MAX_AGE; // CAN change what it points to
    std::cout << "*d: " << *d << std::endl;
    
    const int* const e = new int;
    
    // *e = 2; // CAN'T change the CONTENTS of the pointer
    // e = (int*)&MAX_AGE; // CAN'T change what it points to
    std::cout << "*e: " << *e << std::endl;

    Entity entity;
    PrintEntity(entity);
}