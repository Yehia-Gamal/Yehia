let img_content = document.querySelector(".img");
let images = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
];
let change = images.length;

function nextimage() {
  if (change < images.length) {
    change = change + 1;
  } else {
    change = 1;
  }
  img_content.innerHTML = "<img src=" + images[change - 1] + ".jpeg>";
}

function prewimage() {
  if (change < images.length + 1 && change > 1) {
    change = change - 1;
  } else {
    change = images.length;
  }
  img_content.innerHTML = "<img src=" + images[change - 1] + ".jpeg>";
}
setInterval(nextimage, 3000);
