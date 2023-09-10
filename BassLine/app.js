
//Toggle Arrow icon
// for popular songs
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let fresh_music = document.getElementsByClassName('fresh_music')[0];

pop_song_left.addEventListener('click', () => {
    fresh_music.scrollLeft -= 330;
});
pop_song_right.addEventListener('click', () => {
    fresh_music.scrollLeft += 330;
});

// for artist
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 330;
});
pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 330;
});



const music = new Audio('songs/song1.mp3');
// music.play();

// we need a poster when it play and title of song

const songs = [           // array of song
    {                     // object of songs
        id: 1,
        songName: `Happy Hour<br>
        <div class="subtitle">Talha Anjum</div>`,
        poster: "thumbs/img1.jpg"
    },
    {
        id: 2,
        songName: `Lajawaab 2<br>
        <div class="subtitle">Taimour Beig</div>`,
        poster: "thumbs/img2.jpg"
    },
    {
        id: 3,
        songName: `Kyun<br>
        <div class="subtitle">Talha Anjum</div>`,
        poster: "thumbs/img3.jpg"
    },
    {
        id: 4,
        songName: `Gumaan<br>
        <div class="subtitle">Talha Anjum</div>`,
        poster: "thumbs/img4.jpg"
    },
    {
        id: 5,
        songName: `Downers At Dusk<br>
        <div class="subtitle">Talha Anjum</div>`,
        poster: "thumbs/img5.jpg"
    },
    {
        id: 6,
        songName: `Agency<br>
        <div class="subtitle">Talha Anjum</div>`,
        poster: "thumbs/img6.jpg"
    },
    {
        id: 7,
        songName: `Afsanay<br>
        <div class="subtitle">Young Stunners</div>`,
        poster: "thumbs/img7.jpg"
    },
    {
        id: 8,
        songName: `Baaz<br>
        <div class="subtitle">JJ47,Talha Anjum</div>`,
        poster: "thumbs/img8.jpg"
    },
    {
        id: 9,
        songName: `Touch Base<br>
        <div class="subtitle">Talha Anjum</div>`,
        poster: "thumbs/img9.jpg"
    },
    {
        id: 10,
        songName: `Aarzu<br>
        <div class="subtitle">Hasan Raheem</div>`,
        poster: "thumbs/img10.jpg"
    },
    {
        id: 11,
        songName: `4AM in Karachi<br>
        <div class="subtitle">Talha Anjum</div>`,
        poster: "thumbs/img11.jpg"
    },
    {
        id: 12,
        songName: `One Love<br>
        <div class="subtitle">Shubh</div>`,
        poster: "thumbs/img12.jpg"
    },
    {
        id: 13,
        songName: `Glass Half Full<br>
        <div class="subtitle">JJ47,Talha Anjum</div>`,
        poster: "thumbs/img13.jpg"
    },
    {
        id: 14,
        songName: `Don't Mind<br>
        <div class="subtitle">Young Stunners</div>`,
        poster: "thumbs/img14.jpg"
    }
    ,                     // you can add extra songs and their poster so you don't repeat songs.. here i have used less poster and songs so these will
    // be repeated here
    {
        id: 15,
        songName: `Don't Mind<br>
        <div class="subtitle">Young Stunners</div>`,
        poster: "thumbs/img7.jpg"
    }
    ,
    {
        id: 16,
        songName: `Don't Mind<br>
        <div class="subtitle">Young Stunners</div>`,
        poster: "thumbs/img8.jpg"
    }
    ,
    {
        id: 17,
        songName: `Don't Mind<br>
        <div class="subtitle">Young Stunners</div>`,
        poster: "thumbs/img9.jpg"
    }
    ,
    {
        id: 18,
        songName: `Don't Mind<br>
        <div class="subtitle">Young Stunners</div>`,
        poster: "thumbs/img10.jpg"
    }
    ,
    {
        id: 19,
        songName: `Don't Mind<br>
        <div class="subtitle">Young Stunners</div>`,
        poster: "thumbs/img11.jpg"
    }
    ,
    {
        id: 20,
        songName: `Don't Mind<br>
        <div class="subtitle">Young Stunners</div>`,
        poster: "thumbs/img12.jpg"
    }
    ,
    {
        id: 21,
        songName: `Don't Mind<br>
        <div class="subtitle">Young Stunners</div>`,
        poster: "thumbs/img13.jpg"
    }
    ,
    {
        id: 22,
        songName: `Don't Mind<br>
        <div class="subtitle">Young Stunners</div>`,
        poster: "thumbs/img14.jpg"
    }

]

Array.from(document.getElementsByClassName('song_item')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster //initiate 1st Poster
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

// start/stop play button

let play_btn = document.getElementById('play_btn');
// let wave = document.getElementById('wave');

play_btn.addEventListener('click', () => {

    if (music.paused && music.currentTime <= 0) {
        music.play();
        play_btn.classList.remove('bi-play-fill');   // change play button icon to pause
        play_btn.classList.add('bi-pause-fill');
        // wave.classList.add('active1');    // wave Start
    }
    else {
        music.pause();
        play_btn.classList.add('bi-play-fill');   // change pause button icon to play
        play_btn.classList.remove('bi-pause-fill');
        // wave.classList.remove('active1');  // wave stop
    }
});

// changing the background of side playlist song when played

let makeAllBackground = () => {
    Array.from(document.getElementsByClassName('song_item')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, 0)';
    })
}

// changing the icon of side playlist song when played
let makePlayIcon = () => {
    Array.from(document.getElementsByClassName('playlist_button')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');   // change pause button icon to play and pause viceversa
        el.classList.remove('bi-pause-circle-fill');
    })
}

// play music according to clicked id number 
//Note:we have to click on button icon to trigger the mechanism thats a fault in this system.. we will resolve this later
let index = 0;
let song_poster_control_bar = document.getElementById('song_poster_control_bar');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playlist_button')).forEach((e) => {
    // we will now check how many id's are there 
    e.addEventListener('click', (el) => {

        index = el.target.id; // target the id of clicked element
        //  console.log(index);

        // change the source of music
        music.src = `songs/song${index}.mp3`;

        // change the poster of song played
        song_poster_control_bar.src = `thumbs/img${index}.jpg`;
        music.play();

        // change button icon
        play_btn.classList.remove('bi-play-fill');
        play_btn.classList.add('bi-pause-fill');

        // hcange title of song
        // we will filter the name using id and whichever matches with the index 
        let songTitles = songs.filter((elem) => {
            return elem.id == index;   // return the object from songs array
        });

        songTitles.forEach(elem => {   // that object will be passed in songTitles
            let { songName } = elem;
            title.innerHTML = songName;

            // we can change the poster also from here
            // let { songName,poster } = elem;
            // song_poster_control_bar.src = poster;
        });
        // change background of side playlist played song
        makeAllBackground();
        Array.from(document.getElementsByClassName('song_item'))[index - 1].style.background = 'rgb(105, 105, 105, .1)';

        // change the side playlist icon button on play/paused
        makePlayIcon();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
    })
})


// music progress bar time

let current_start_time = document.getElementById('current_start_time');
let current_End_time = document.getElementById('current_End_time');

//seek bar

let seek = document.getElementById('seek');
let progress_bar_2 = document.getElementById('progress_bar_2');
let pointer = document.getElementsByClassName('pointer')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_durat = music.duration;
    // convert it into minutes

    let min1 = Math.floor(music_durat / 60);
    let sec1 = Math.floor(music_durat % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    current_End_time.innerText = `${min1}:${sec1}`;


    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    current_start_time.innerText = `${min2}:${sec2}`;


    // Update seek bar
    let progressBar = parseInt((music_curr / music_durat) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    progress_bar_2.style.width = `${seekbar}%`;
    pointer.style.left = `${seekbar}%`;
});

// change song rogress bar by dragging he pointer

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
})


// volume button

let Volume_icon = getElementById('Volume_icon');
let vol = getElementById('vol');
let volume_bar = getElementsByClassName('volume_bar')[0];
let volume_pointer = getElementById('volume_pointer');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol.icon.classList.remove('bi-volume-up-fill');
        vol.icon.classList.remove('bi-volume-down-fill');
        vol.icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol.icon.classList.remove('bi-volume-up-fill');
        vol.icon.classList.add('bi-volume-down-fill');
        vol.icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol.icon.classList.add('bi-volume-up-fill');
        vol.icon.classList.remove('bi-volume-down-fill');
        vol.icon.classList.remove('bi-volume-off-fill');
    }
    // control the volume
    let vol_a = vol.value;
    volume_bar.style.width = `${vol_a}%`;
    volume_pointer.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});


// next / previous button

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {    // so when we are at first song it should go back to last song
        index = Array.from(document.getElementsByClassName('song_item')).length;  // clculate the length
    }
    music.src = `songs/song${index}.mp3`;

    // change the poster of song played
    song_poster_control_bar.src = `thumbs/img${index}.jpg`;
    music.play();

    // change button icon
    play_btn.classList.remove('bi-play-fill');
    play_btn.classList.add('bi-pause-fill');

    // hcange title of song
    // we will filter the name using id and whichever matches with the index 
    let songTitles = songs.filter((elem) => {
        return elem.id == index;   // return the object from songs array
    });

    songTitles.forEach(elem => {   // that object will be passed in songTitles
        let { songName } = elem;
        title.innerHTML = songName;

        // we can change the poster also from here
        // let { songName,poster } = elem;
        // song_poster_control_bar.src = poster;
    });
    // change background of side playlist played song
    makeAllBackground();
    Array.from(document.getElementsByClassName('song_item'))[index - 1].style.background = 'rgb(105, 105, 105, .1)';

    // change the side playlist icon button on play/paused
    makePlayIcon();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');

})
next.addEventListener('click', () => {

    if (index > Array.from(document.getElementsByClassName('song_item')).length) {
        index = 1;
    }
    index++;
    music.src = `songs/song${index}.mp3`;

    // change the poster of song played
    song_poster_control_bar.src = `thumbs/img${index}.jpg`;
    music.play();

    // change button icon
    play_btn.classList.remove('bi-play-fill');
    play_btn.classList.add('bi-pause-fill');

    // hcange title of song
    // we will filter the name using id and whichever matches with the index 
    let songTitles = songs.filter((elem) => {
        return elem.id == index;   // return the object from songs array
    });

    songTitles.forEach(elem => {   // that object will be passed in songTitles
        let { songName } = elem;
        title.innerHTML = songName;

        // we can change the poster also from here
        // let { songName,poster } = elem;
        // song_poster_control_bar.src = poster;
    });
    // change background of side playlist played song
    makeAllBackground();
    Array.from(document.getElementsByClassName('song_item'))[index - 1].style.background = 'rgb(105, 105, 105, .1)';

    // change the side playlist icon button on play/paused
    makePlayIcon();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');

})