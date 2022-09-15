input.onButtonPressed(Button.A, function () {
    fav_ += 1
    basic.showNumber(fav_)
})
input.onGesture(Gesture.Shake, function () {
    random = randint(0, 10)
    basic.showNumber(random)
    sum = fav_ + 5
    basic.showNumber(sum)
    product = fav_ + 7
    basic.showNumber(product)
    powers = fav_ + 2
    basic.showNumber(powers)
})
let powers = 0
let product = 0
let sum = 0
let random = 0
let fav_ = 0
basic.showIcon(IconNames.Heart)
fav_ = 0
basic.showNumber(fav_)
basic.forever(function () {
	
})
