
const viewer = document.getElementById("photo-viewer");

const photos = ["/res/2023_back.jpg","/res/love.jpg"];

let index = 0;

init();

Array.from(document.querySelectorAll('#photos img')).forEach(domNode => {
    domNode.addEventListener("load",()=>layout());
    
  });

window.addEventListener("resize",()=>layout());

function init() {
    addImg(photos[photos.length-2]);
    addImg(photos[photos.length-1]);
    for (const src of photos) {
        addImg(src);
    }
    addImg(photos[0]);
    addImg(photos[1]);
}

function addImg(src) {
    let img = document.createElement("img");
    img.src = src;
    viewer.appendChild(img);
}

function prevWidth() {
    let sum = 0;
    for (let i = 0; i < index+2; i++) {
        sum+=viewer.children[i].clientWidth;
    }
    return sum;
}

function layout() {
    const img = viewer.children[index+2];
    viewer.scrollTo({left: prevWidth() - (window.innerWidth - img.clientWidth)/2, behavior: "instant"});
}

function next() {
    index++;
    const img = viewer.children[index+2];
    let targetPos = prevWidth() - (window.innerWidth - img.clientWidth)/2;
    viewer.scrollTo({left: targetPos, behavior: "smooth"});
    if (index == photos.length) {
        index = 0;
        //setTimeout(()=>layout(), 450);
    }
}

function previous() {
    index--;
    const img = viewer.children[index+2];
    let targetPos = prevWidth() - (window.innerWidth - img.clientWidth)/2;
    viewer.scrollTo({left: targetPos, behavior: "smooth"});
    if (index < 0) {
        index = photos.length-1;
        //setTimeout(()=>layout(), 450);
    }
}