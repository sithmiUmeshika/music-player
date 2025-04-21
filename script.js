const songs = [
    { title: "Song 1", file: "songs/song1.mp3" },
    { title: "Song 2", file: "songs/song2.mp3" }
  ];
  
  let currentSong = 0;
  const audio = document.getElementById("audio-player");
  const title = document.getElementById("song-title");
  
  function loadSong(index) {
    audio.src = songs[index].file;
    title.textContent = "Now Playing: " + songs[index].title;
  }
  
  function togglePlay() {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
  
  function prevSong() {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    loadSong(currentSong);
    audio.play();
  }
  
  function nextSong() {
    currentSong = (currentSong + 1) % songs.length;
    loadSong(currentSong);
    audio.play();
  }
  
  window.onload = () => {
    loadSong(currentSong);
  };
  