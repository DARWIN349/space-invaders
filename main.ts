input.onButtonPressed(Button.A, function () {
    ship.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    SHOOT = game.createSprite(ship.get(LedSpriteProperty.X), ship.get(LedSpriteProperty.Y))
    SHOOT.change(LedSpriteProperty.Brightness, 80)
    for (let index = 0; index < 4; index++) {
        SHOOT.change(LedSpriteProperty.Y, -1)
        basic.pause(150)
        if (SHOOT.isTouching(enemy)) {
            game.addScore(1)
            SHOOT.delete()
            enemy.delete()
        }
    }
    if (SHOOT.get(LedSpriteProperty.Y) <= 0) {
        SHOOT.delete()
    }
})
input.onButtonPressed(Button.B, function () {
    ship.move(1)
})
let enemy: game.LedSprite = null
let SHOOT: game.LedSprite = null
let ship: game.LedSprite = null
ship = game.createSprite(2, 4)
game.setScore(0)
OLED.init(128, 64)
OLED.drawLoading(0)
basic.pause(500)
OLED.drawLoading(50)
basic.pause(500)
OLED.drawLoading(69)
basic.pause(2000)
OLED.drawLoading(99)
basic.pause(2000)
OLED.drawLoading(100)
basic.forever(function () {
    enemy = game.createSprite(randint(0, 4), 0)
    enemy.set(LedSpriteProperty.Brightness, 150)
    basic.pause(100)
    enemy.turn(Direction.Right, 90)
    for (let index = 0; index < 4; index++) {
        enemy.move(1)
        basic.pause(400)
        if (enemy.isTouching(ship)) {
            game.removeLife(1)
        }
    }
    if (enemy.isTouchingEdge()) {
        game.gameOver()
    }
})
