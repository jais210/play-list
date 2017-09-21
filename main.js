// creación de una clase
class Song {
    constructor(title, artist, duration) {
        this.title = title;
        this.artist = artist;
        this.duration = duration;
        this.isPlaying = false;
    }

    play() {
        this.isPlaying = true;
    }

    stop() {
        this.isPlaying = false;
    }

    toHTML() {
        var htmlString = '<li';
        if (this.isPlaying) {
            htmlString += ' class="current"';
        }
        htmlString += '>';
        htmlString += this.title;
        htmlString += ' - '
        htmlString += this.artist;
        htmlString += '<span class="duration">'
        htmlString += this.duration;
        htmlString += '</span></li>';
        return htmlString;
    }
}
// creación de un objeto literal
var myPlaylist = {
        // usar el init para que inicie la función donde se almacena los elementos del array vacío
        init: function() {
            this.songs = [];
            this.nowPlayingIndex = 0;
        },

        add: function(song) {
            this.songs.push(song);
        },

        play: function() {
            var currentSong = this.songs[this.nowPlayingIndex];
            currentSong.play();
        },

        stop: function() {
            var currentSong = this.songs[this.nowPlayingIndex];
            currentSong.stop();
        },

        next: function() {
            this.stop();
            this.nowPlayingIndex++;
            if (this.nowPlayingIndex === this.songs.length) {
                this.nowPlayingIndex = 0;
            }
            this.play();
        },

        renderInElement: function(list) {
            list.innerHTML = "";
            for (var i = 0; i < this.songs.length; i++) {
                list.innerHTML += this.songs[i].toHTML();
            }
        }
    }
    // creación de clase
class Playlist {

    constructor() {
        this.songs = [];
        this.nowPlayingIndex = 0;
    }

    add(song) {
        this.songs.push(song);
    }

    play() {
        var currentSong = this.songs[this.nowPlayingIndex];
        currentSong.play();
    }

    stop() {
        var currentSong = this.songs[this.nowPlayingIndex];
        currentSong.stop();
    }

    next() {
        this.stop();
        this.nowPlayingIndex++;
        if (this.nowPlayingIndex === this.songs.length) {
            this.nowPlayingIndex = 0;
        }
        this.play();
    };

    renderInElement(list) {
        list.innerHTML = "";
        for (var i = 0; i < this.songs.length; i++) {
            list.innerHTML += this.songs[i].toHTML();
        }
    }
}

myPlaylist.init();
var playlist = myPlaylist;

//var playlist = new Playlist();

var hereComesTheSun = new Song("Here Comes the Sun", "The Beatles", "2:54");
var walkingOnSunshine = new Song("Walking on Sunshine", "Katrina and the Waves", "3:43");

var song3 = new Song("Sunshine", "Katrina", "3:43");


playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);
playlist.add(song3);


var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function() {
    playlist.play();
    playlist.renderInElement(playlistElement);
}

var nextButton = document.getElementById("next");
nextButton.onclick = function() {
    playlist.next();
    playlist.renderInElement(playlistElement);
}

var stopButton = document.getElementById("stop");
stopButton.onclick = function() {
    playlist.stop();
    playlist.renderInElement(playlistElement);
}