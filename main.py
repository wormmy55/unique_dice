def on_gesture_shake():
    basic.show_number(randint(1, 6))
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

basic.show_string("PLAY DICE!")

def on_forever():
    pass
basic.forever(on_forever)
