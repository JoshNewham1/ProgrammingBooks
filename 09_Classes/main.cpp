#include <iostream>

#define LOG(x) std::cout << x << std::endl

// Classes help group data and methods together. Anything you can do with a class, you can do without a class.
// They just help make code easier to maintain
class Player
{
    // Methods and variables are private by default
public:
    int x, y;
    int speed;
    
    void Move(int xa, int ya)
    {
        // Modifies the current player's x and y
        x += xa * speed;
        y += ya * speed;
    }
};

int main()
{
    Player player;
    player.x = 5;
    player.Move(1, -1);

    std::cin.get();
}