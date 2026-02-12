const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const gif = document.querySelector("#gif");
const text = document.querySelector("#text");
const vid = document.querySelector("video");

let count = 2;
let scale = 1;

// preload GIF biar gak lag
[
  "cat-heart.gif",
  "3shocked-1.gif",
  "4.crying.gif",
  "5.crying.gif",
  "idc.gif"
].forEach(src=>{
  const img = new Image();
  img.src = src;
});


// NO BUTTON
no.addEventListener("click",()=>{

  // BESAR TANPA MERUSAK LAYOUT
  scale += 0.18;
  yes.style.transform = `scale(${scale})`;
  yes.style.zIndex = "10";

  if(count===2){
    gif.src="3shocked-1.gif";
    text.innerHTML="maksudnya kamu tekan yes kan? 🤨";
    count++;

  }else if(count===3){
    gif.src="4.crying.gif";
    text.innerHTML="kamu pasti salah tekan!? 🥹";
    count++;

  }else if(count===4){
    gif.src="5.crying.gif";
    text.innerHTML="sayangg, aku sedih! 😭";
    count++;

  }else{
    gif.src="5.crying.gif";
    text.innerHTML="Aku mohon sayang pilih aku 🥺❤️";
    no.style.display="none";
  }
});


// YES BUTTON
yes.addEventListener("click",()=>{

  vid.style.display="block";

  gif.src="idc.gif";
  text.innerHTML="Terima kasih sayang! ❤️";

  yes.innerHTML =
  '<a href="https://wa.me/6281384600500" target="_blank">Message me</a>';

  no.style.display="none";

  setTimeout(()=>{
    vid.style.display="none";
  },9000);
});
