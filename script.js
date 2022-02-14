console.log("Welcome to Pahadi Songs");
// Initialize the variables
let songIndex =0;
let audioElement = new Audio('music/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs =[
    {songName: "Thal Ki Bazar I by Pappu Karki",filePath:"music/1.mp3",coverPath:"covers/1.jpg"},
    {songName: "Almora Bazar by Karishma Shah Ashish Chamoli ",filePath:"music/2.mp3",coverPath:"covers/2.jpg"},
    {songName: "Baand Chon Pahadi Karishma Shah Ruhaan Bhardwaj",filePath:"music/3.mp3",coverPath:"covers/3.jpg"},
    {songName: "Chaita Ki Chaitwalचत क चतवलAmit Saagar",filePath:"music/4.mp3",coverPath:"covers/4.jpg"},
    {songName: "Drill Damau ड्रिल दमौ by Team Tornado",filePath:"music/5.mp3",coverPath:"covers/5.jpg"},
    {songName: "Fyoladiya by Kishan Mahipal",filePath:"music/6.mp3",coverPath:"covers/6.jpg"},
    {songName: "Ghuguti by Kishan Mahipal",filePath:"music/7.mp3",coverPath:"covers/7.jpg"},
    {songName: "Hu Main Pahad Se  Sachin x Amit x Rage100 Team Tornado",filePath:"8.mp3",coverPath:"covers/8.jpg"},
    {songName: "Lehenga 3 by Inder arya & Jyoti arya",filePath:"music/9.mp3",coverPath:"covers/9.jpg"},
    {songName: "Mero lehenga ।। Inder arya",filePath:"music/10.mp3",coverPath:"covers/10.jpg"},
    {songName: "Modern & Folk Pahadi Mashup by TEAM TORNADO",filePath:"music/11.mp3",coverPath:"covers/11.jpg"},
    {songName: "GHUMAI DE by PRIYANKA MEHER Featuring RONGPAZ",filePath:"music/12.mp3",coverPath:"covers/12.jpg"},
    {songName: "दैणा होयां खोली का गणेशा by Narendra Singh Negi",filePath:"music/13.mp3",coverPath:"covers/13.jpg"}

]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity =0;
    }
})
// Listen to events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeAllPlays();
        songIndex =parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src =`music/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime =0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=13){
        songIndex =0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src =`music/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime =0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex =0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src =`music/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime =0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})