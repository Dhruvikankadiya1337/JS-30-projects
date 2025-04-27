const songs = [
    {
      title: "Blue Yung Kai",
      file: "songs/Blue Yung Kai - PagalWorld.mp3",
      cover: "img/cover1.jpeg"
    },
    {
      title: "Die With A Smile",
      file: "songs/Die With A Smile - PagalWorld.mp3",
      cover: "img/cover2.jpeg"
    },
    {
      title: "7 Years",
      file: "songs/7 Years - PagalWorld.mp3",
      cover: "img/cover3.jpeg"
    },
    {
      title: "Fell For You",
      file: "songs/Fell For You - PagalWorld.mp3",
      cover: "img/cover4.jpeg"
    },
    {
      title: "Welcome To Hood",
      file: "songs/Welcome To Hood - PagalWorld.mp3",
      cover: "img/cover5.jpeg"
    },
    {
      title: "Feeling",
      file: "songs/Feelinga - PagalWorld.mp3",
      cover: "img/cover6.jpeg"
    },
    {
      title: "You Haunt Me",
      file: "songs/You Haunt Me - PagalWorld.mp3",
      cover: "img/cover7.jpeg"
    }
  ];
  
  const playlist = document.getElementById("playlist");
  const audio = document.getElementById("audio");
  const nowTitle = document.getElementById("nowTitle");
  const nowCover = document.getElementById("nowCover");
  
  let currentPlaying = null;
  
  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="${song.cover}" alt="cover"/>
      <span>${song.title}</span>`;
  
    li.addEventListener("click", () => {
      if (currentPlaying) currentPlaying.classList.remove("active");
  
      nowTitle.textContent = song.title;
      nowCover.src = song.cover;
      audio.src = song.file;
      audio.play();
  
      li.classList.add("active");
      currentPlaying = li;
    });

    playlist.appendChild(li);
  });
  