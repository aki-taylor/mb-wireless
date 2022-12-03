def on_button_pressed_a():
    # radio.send_string("Ninja")
    radio.send_string("" + convert_to_text(0) + "," + "My Name")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    msg: List[str] = []
    msg = receivedString.split(",")
    katakana.set_scroll_time(200)
    if msg[0] == "0":
        basic.show_string("" + (msg[1]))
    else:
        katakana.show_string(msg[1])
    basic.pause(500)
    basic.clear_screen()
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    radio.send_string("" + convert_to_text(1) + "," + "ｺﾝﾆﾁﾜ")
input.on_button_pressed(Button.B, on_button_pressed_b)

radio.set_group(1)