"use strict";
// Old system that only plays MP3 files
class OldAudioPlayer {
    playMP3(fileName) {
        console.log(`Playing MP3 file: ${fileName}`);
    }
}
// Adapter class that bridges the old system with the new interface
class AudioAdapter {
    constructor(oldAudioPlayer) {
        this.oldAudioPlayer = oldAudioPlayer;
    }
    play(audioType, fileName) {
        if (audioType.toLowerCase() === "mp3") {
            this.oldAudioPlayer.playMP3(fileName); // Delegate the call to the old system
        }
        else {
            console.log(`Unsupported audio type: ${audioType}`);
        }
    }
}
const oldPlayer = new OldAudioPlayer(); // Old system
const musicPlayer = new AudioAdapter(oldPlayer); // Adapter bridges the old system to the new one
// Play an MP3 file
musicPlayer.play("mp3", "song.mp3"); // Output: Playing MP3 file: song.mp3
// Attempt to play a WAV file (not supported by the old system)
musicPlayer.play("wav", "sound.wav"); // Output: Unsupported audio type: wav
