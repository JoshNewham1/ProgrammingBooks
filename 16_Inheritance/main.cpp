#include <iostream>

class Entity
{
public:
    float X, Y;

    void Move(float xa, float ya)
    {
        X += xa;
        Y += ya;
    }
};

// Player is a subclass of Entity
class Player : public Entity
{
public:
    const char* Name = "";

    void PrintName()
    {
        std::cout << Name << std::endl;
    }
};

int main()
{
    Player player;
    player.PrintName();
    player.Move(5, 5);

    std::cout << sizeof(Entity) << std::endl; // 2 * 4 bytes
    std::cout << sizeof(Player) << std::endl; // (2 * 4) + 4 (for the name) bytes

    std::cin.get();
}