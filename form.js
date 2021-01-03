class Form
{
    constructor()
    {

    }
    display()
    {
        var title = createElement("h1");
        title.html("Multiplayer Car Racing Game");
        title.position(width/2 - 175, 100);
        var input = createInput("name");
        input.position(width/2 - 50, 200);
        var button = createButton("play");
        button.position(width/2, 300);
        var greeting = createElement("h3");
        button.mousePressed(function()
        {
            input.hide();
            button.hide();
            var name = input.value();
            playerCount++;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Welcome to the game " + name + "!");
            greeting.position(width/2 - 80, 200);
        })
    }
}