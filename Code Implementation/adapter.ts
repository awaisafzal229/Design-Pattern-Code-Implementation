// New interface that the new system expects
interface IMusicPlayer {
    play(audioType: string, fileName: string): void;
}

// Old system that only plays MP3 files
class OldAudioPlayer {
    public playMP3(fileName: string): void {
        console.log(`Playing MP3 file: ${fileName}`);
    }
}

// Adapter class that bridges the old system with the new interface
class AudioAdapter implements IMusicPlayer {
    private oldAudioPlayer: OldAudioPlayer;

    constructor(oldAudioPlayer: OldAudioPlayer) {
        this.oldAudioPlayer = oldAudioPlayer;
    }

    public play(audioType: string, fileName: string): void {
        if (audioType.toLowerCase() === "mp3") {
            this.oldAudioPlayer.playMP3(fileName); // Delegate the call to the old system
        } else {
            console.log(`Unsupported audio type: ${audioType}`);
        }
    }
}


const oldPlayer = new OldAudioPlayer(); // Old system
const musicPlayer: IMusicPlayer = new AudioAdapter(oldPlayer); // Adapter bridges the old system to the new one

// Play an MP3 file
musicPlayer.play("mp3", "song.mp3"); // Output: Playing MP3 file: song.mp3

// Attempt to play a WAV file (not supported by the old system)
musicPlayer.play("wav", "sound.wav"); // Output: Unsupported audio type: wav
