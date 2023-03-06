def on_button_pressed_a():
    ship.move(-1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global SHOOT
    SHOOT = game.create_sprite(ship.get(LedSpriteProperty.X), ship.get(LedSpriteProperty.Y))
    SHOOT.change(LedSpriteProperty.BRIGHTNESS, 80)
    for index in range(4):
        SHOOT.change(LedSpriteProperty.Y, -1)
        basic.pause(150)
        if SHOOT.is_touching(enemy):
            game.add_score(1)
            SHOOT.delete()
            enemy.delete()
    if SHOOT.get(LedSpriteProperty.Y) <= 0:
        SHOOT.delete()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    ship.move(1)
input.on_button_pressed(Button.B, on_button_pressed_b)

enemy: game.LedSprite = None
SHOOT: game.LedSprite = None
ship: game.LedSprite = None
ship = game.create_sprite(2, 4)
game.set_score(0)

def on_forever():
    global enemy
    enemy = game.create_sprite(randint(0, 4), 0)
    enemy.set(LedSpriteProperty.BRIGHTNESS, 150)
    basic.pause(100)
    enemy.turn(Direction.RIGHT, 90)
    for index2 in range(4):
        enemy.move(1)
        basic.pause(400)
        if enemy.is_touching(ship):
            game.remove_life(1)
    if enemy.is_touching_edge():
        game.game_over()
basic.forever(on_forever)
