setInterval(() => {
  main()
},1000)

let activeVideo;
let openToggel = false;

let pipOpen = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M446 613h335V356H446v257ZM140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24.75 0 42.375 18T880 316v520q0 24-17.625 42T820 896H140Zm0-60V316v520Zm0 0h680V316H140v520Zm366-283V416h215v137H506Z"/></svg>`
let pipClose = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M140 896q-24 0-42-18t-18-42V536h60v300h680V316H440v-60h380q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm557-140 43-43-151-150h118v-60H487v220h60V606l150 150ZM80 476V256h300v220H80Zm400 100Z"/></svg>`

const newElement = document.createElement('div');
newElement.className = "pipController"

const main = () => {
  let videos = document.querySelectorAll(".tC2Wod.ACcyyc.kssMZb")

// Set the current video to request pip for
  if (videos && videos[0] !== (null || undefined)) {
    activeVideo = videos[0].parentElement.getElementsByTagName("video")
  }

// Create the button to enable PIP
  const existingElement = document.querySelector(".kiGYZb")
  if(existingElement?.parentElement.children.length < 10 && activeVideo !== (null || undefined)) {
    existingElement.insertAdjacentElement('afterend', newElement);
  }

  // We have a pip so keep requesting pip incase new one. 
  if (document.pictureInPictureElement && activeVideo[0] !== document.pictureInPictureElement) {
    activeVideo[0].requestPictureInPicture();
    console.log(document.pictureInPictureElement)
  }

  // Make sure button icon changes aswell 
  if (!document.pictureInPictureElement) {
    newElement.innerHTML = pipOpen
    openToggel = false
  }
}

// Check for button press to enable pip
newElement?.addEventListener('click',() => {
  openToggel = !openToggel
  if (openToggel) {
    activeVideo[0].requestPictureInPicture();
    newElement.innerHTML = pipClose
  } else {
    newElement.innerHTML = pipOpen
    document.exitPictureInPicture();
  }
})


