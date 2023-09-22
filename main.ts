input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("E E F G G F E D ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C C D E E D D - ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("E E F G G F E D ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C C D E D C C - ", 120), music.PlaybackMode.UntilDone)
})
