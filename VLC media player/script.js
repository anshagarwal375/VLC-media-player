// 1. Selected all important HTML elements
const speedUp = document.querySelector("#speedup");
const speedDown = document.querySelector("#speeddown");
const volumeUp = document.querySelector("#volumeup");
const volumeDown = document.querySelector("#volumedown");
const videobtn = document.querySelector("#videobtn");
const videoInput = document.querySelector("#videoInput");
const videoplayer = document.querySelector("#main");

let videoelement = null; // Global variable: will store reference to the video element

// 2. When the "Open" button is clicked, file chooser will open
const handleInput = () => {
    videoInput.click();
};

// 3. When the user selects a video file
const acceptInputHandler = (obj) => {
    const selectedFiles = obj.target.files; // User's selected files
    if (selectedFiles.length === 0) {
        console.log("No file selected!");
        return; // If no file selected, return
    }

    const selectedVideo = selectedFiles[0]; // Took only the first file
    const link = URL.createObjectURL(selectedVideo); // Created a temporary URL of the file

    videoelement = document.createElement("video"); // Created a new video element
    videoelement.src = link; // Set the source of the video element
    videoelement.className = "video"; // Set class for styling
    videoelement.controls = true; // Show controls (play, pause, seek, etc.)
    videoelement.volume = 0.7; // Set default volume to 70%

    videoplayer.innerHTML = ""; // If there was already a loaded video, removed it
    videoplayer.appendChild(videoelement); // Added the new video to the page

    // Tried to autoplay the video
    videoelement.play()
        .then(() => console.log("Video started playing."))
        .catch(err => console.error("Error playing video:", err));
};

// 4. Function to increase speed
const speedUpHandler = () => {
    if (videoelement) { // Check if video is loaded
        videoelement.playbackRate = Math.min(videoelement.playbackRate + 0.1, 5); // Increase speed by 0.1 (max 5x)
        console.log("Speed increased:", videoelement.playbackRate.toFixed(2));
    } else {
        console.log("No video loaded to change speed!"); // If no video, show message
    }
    // show toast
    toast.textContent = "Increased speed";
    toast.style.display = "block";
};

// 5. Function to decrease speed
const speedDownHandler = () => {
    if (videoelement) {
        videoelement.playbackRate = Math.max(videoelement.playbackRate - 0.1, 0.1); // Decrease speed by 0.1 (min 0.1x)
        console.log("Speed decreased:", videoelement.playbackRate.toFixed(2));
    } else {
        console.log("No video loaded to change speed!");
    }
};

// 6. Function to increase volume
const volumeUpHandler = () => {
    if (videoelement) {
        videoelement.volume = Math.min(videoelement.volume + 0.1, 1); // Increase volume by 0.1 (max 1)
        console.log("Volume increased:", videoelement.volume.toFixed(2));
    } else {
        console.log("No video loaded to change volume!");
    }
};

// 7. Function to decrease volume
const volumeDownHandler = () => {
    if (videoelement) {
        videoelement.volume = Math.max(videoelement.volume - 0.1, 0); // Decrease volume by 0.1 (min 0)
        console.log("Volume decreased:", videoelement.volume.toFixed(2));
    } else {
        console.log("No video loaded to change volume!");
    }
};

// 8. Added event listeners to all buttons
speedUp.addEventListener("click", speedUpHandler); // Listener on speed up button
speedDown.addEventListener("click", speedDownHandler); // Listener on speed down button
volumeUp.addEventListener("click", volumeUpHandler); // Listener on volume up button
volumeDown.addEventListener("click", volumeDownHandler); // Listener on volume down button
videobtn.addEventListener("click", handleInput); // Listener on "Open" button
videoInput.addEventListener("change", acceptInputHandler); // Listener for when file is selected

const handlefullscreen = () => {

}

// Controls
const fullScreenElem = document.querySelector("#fullscreen");
fullScreenElem.addEventListener("click", handlefullscreen);
