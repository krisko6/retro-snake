# Retro Snake

http:krisko6.github.io/retro-snake

## Description

Retro Snake is a version of the classic Snake game, with a look inspired
by late 90's/early 00's cell phone games, especially on Nokia devices.

Cell phone games have come quite a long way since then. Who could have imagined
the console-quality games you can play on your cell phone for mere pocket change.
It's hard to believe that at one point in time, this primitive game was the best
timewaster around.

## Rules (also in-game)

Use the arrow keys to turn the snake as it moves. Collect the apples
(the gray dots) to grow your snake. The game ends when you run into the snake's
body or the walls on the sides. Note that reversing into yourself also counts
as a game over.

Use the 'p' key to pause the game, and the spacebar to un-pause it.

## Code Information.

Retro Snake utilizes a slightly unconventional game engine to achieve its
cell-phone like look. This does not use HTML5 Canvas, Enchant.js, or WebGL,
instead making use of simple CSS and Javascript, with a bit of jQuery.

The game board consists entirely of small divs, all floated to the left in a
grid formation. The board is rendered by switching the divs on or off using CSS
classes.

To achieve the "ghosting" effect, CSS transitions are used to fade between
colors. This effect was a hardware limitiation of old cell phone screens,
which were not really designed for gaming.

The "scoreboard" was the trickiest thing to implement. I had to individually
write out the pixels for each number. then, I had to break the score down into
digits and render those digits individually side by side. This was done since
the game engine does not allow for proper text on-screen.
