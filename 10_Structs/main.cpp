#include <iostream>

#define LOG(x) std::cout << x << std::endl

// Structs are *technically* the same as classes, except that methods / variables are public by default
// Best practice is to use structs if you only need variables and aren't doing anything fancy
// Also, it's best to not use inheritance with structs
struct Player
{
    int x, y;
    int speed;
    
    void Move(int xa, int ya)
    {
        // Modifies the current player's x and y
        x += xa * speed;
        y += ya * speed;
    }
};

struct Vec2
{
    float x, y;

    // Just a simple method modifying data
    void Add(Vec2 &other)
    {
        x += other.x;
        y += other.y;
    }
};

int main()
{
    Player player;
    player.x = 5;
    player.Move(1, -1);

    std::cin.get();
}