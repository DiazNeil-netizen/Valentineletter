  const yes = document.querySelector("#yes");
  const no = document.querySelector("#no");
  const gif = document.querySelector("#gif");
  const text = document.querySelector("#text");
  const vid = document.querySelector("video");

  let count = 2;

  // preload gifs (semua file ada di folder yang sama)
  const gifs = [
    "cat-heart.gif",
    "3shocked-1.gif",
    "4.crying.gif",
    "5.crying.gif",
    "idc.gif"
  ];

  gifs.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  // NO button logic
  no.addEventListener("click", () => {
    if (count === 2) {
      gif.src = "3shocked-1.gif";
      text.innerHTML = "maksudnya kamu tekan yes kan? 🤨";
      yes.style.height = "65%";
      yes.style.width = "60%";
      no.style.width = "30%";
      count++;

    } else if (count === 3) {
      gif.src = "4.crying.gif";
      text.innerHTML = "kamu pasti salah tekan!? 🥹";
      yes.style.height = "70%";
      yes.style.width = "70%";
      no.style.width = "20%";
      count++;

    } else if (count === 4) {
      gif.src = "5.crying.gif";
      text.innerHTML = "sayangg,aku sedih! 😭";
      yes.style.height = "80%";
      yes.style.width = "80%";
      no.style.fontSize = "4vh";
      no.style.width = "10%";
      count++;

    } else if (count === 5) {
      gif.src = "5.crying.gif";
      text.innerHTML = "Aku mohon sayang pilih aku 🥺😘";
      yes.style.height = "90%";
      yes.style.width = "96%";
      no.style.display = "none";
    }
  });

  // YES button logic
  yes.addEventListener("click", () => {
    vid.style.display = "block";
    gif.src = "idc.gif";
    text.innerHTML = "Terima kasih sayang! I'll make u happy 😘";

    yes.innerHTML = '<a href="https://wa.me/6289628116619" target="_blank">Message me</a>';
    yes.style.height = "90%";
    yes.style.width = "96%";
    no.style.display = "none";

    setTimeout(() => {
      vid.style.display = "none";
    }, 9000);
  });
