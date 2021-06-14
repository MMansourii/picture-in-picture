const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//promt media stream 
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream ;
        videoElement.onloadedmetadata = () =>{
            videoElement.play();
        };

    }catch(error){
        // catch error here
    }
}
button.addEventListener('click', async ()=>{
    //Disable button
    button.disabled = true;
    // Start pic in pic
    await videoElement.requestPictureInPicture();
    //reset button 
    button.disabled = false;
});
//Onload
selectMediaStream();