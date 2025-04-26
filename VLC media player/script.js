// 1. Sabhi important HTML elements ko select kar liya
const speedUp = document.querySelector("#speedup");
const speedDown = document.querySelector("#speeddown");
const volumeUp = document.querySelector("#volumeup");
const volumeDown = document.querySelector("#volumedown");
const videobtn = document.querySelector("#videobtn");
const videoInput = document.querySelector("#videoInput");
const videoplayer = document.querySelector("#main");

let videoelement = null; // Global variable: video element ka reference store karenge

// 2. Jab "Open" button pe click hoga toh file chooser khulega
const handleInput = () => {
    videoInput.click();
};

// 3. Jab user koi video file select karega
const acceptInputHandler = (obj) => {
    const selectedFiles = obj.target.files; // User ke selected files
    if (selectedFiles.length === 0) {
        console.log("No file selected!");
        return; // Agar koi file nahi hai, toh return kar jao
    }

    const selectedVideo = selectedFiles[0]; // Sirf pehli file uthai
    const link = URL.createObjectURL(selectedVideo); // File ka temporary URL banaya

    videoelement = document.createElement("video"); // Naya video element create kiya
    videoelement.src = link; // Us video element ka source set kiya
    videoelement.className = "video"; // Class set ki style ke liye
    videoelement.controls = true; // Controls (play, pause, seek) show kar diye
    videoelement.volume = 0.7; // Default volume 70% rakha

    videoplayer.innerHTML = ""; // Pehle koi video loaded hai toh usko hata diya
    videoplayer.appendChild(videoelement); // Naya video page pe laga diya

    // Video ko autoplay karne ki koshish kari
    videoelement.play()
        .then(() => console.log("Video started playing."))
        .catch(err => console.error("Error playing video:", err));
};

// 4. Speed up karne ke liye function
const speedUpHandler = () => {
    if (videoelement) { // Check ki video loaded hai ya nahi
        videoelement.playbackRate = Math.min(videoelement.playbackRate + 0.1, 5); // Speed 0.1 se badhao (max 5x)
        console.log("Speed increased:", videoelement.playbackRate.toFixed(2));
    } else {
        console.log("No video loaded to change speed!"); // Video nahi hai toh message do
    }
    // toast show
    toast.textContent=increasespeed+" "
    toast.style.display="block";
};

// 5. Speed down karne ke liye function
const speedDownHandler = () => {
    if (videoelement) {
        videoelement.playbackRate = Math.max(videoelement.playbackRate - 0.1, 0.1); // Speed 0.1 se ghatao (min 0.1x)
        console.log("Speed decreased:", videoelement.playbackRate.toFixed(2));
    } else {
        console.log("No video loaded to change speed!");
    }
};

// 6. Volume up karne ka function
const volumeUpHandler = () => {
    if (videoelement) {
        videoelement.volume = Math.min(videoelement.volume + 0.1, 1); // Volume 0.1 se badhao (max 1)
        console.log("Volume increased:", videoelement.volume.toFixed(2));
    } else {
        console.log("No video loaded to change volume!");
    }
};

// 7. Volume down karne ka function
const volumeDownHandler = () => {
    if (videoelement) {
        videoelement.volume = Math.max(videoelement.volume - 0.1, 0); // Volume 0.1 se kam karo (min 0)
        console.log("Volume decreased:", videoelement.volume.toFixed(2));
    } else {
        console.log("No video loaded to change volume!");
    }
};

// 8. Sabhi buttons ke event listeners lagaye
speedUp.addEventListener("click", speedUpHandler); // Speed up button pe click ka listener
speedDown.addEventListener("click", speedDownHandler); // Speed down button pe click ka listener
volumeUp.addEventListener("click", volumeUpHandler); // Volume up button pe click ka listener
volumeDown.addEventListener("click", volumeDownHandler); // Volume down button pe click ka listener
videobtn.addEventListener("click", handleInput); // "Open" button pe click ka listener
videoInput.addEventListener("change", acceptInputHandler); // File select hone par listener
const handlefullscreen= () => {

}

// controls
const fullScreenElem =document.querySelector("#fullscreen");
fullScreenElem.addEventListener("click",handlefullscreen)