const box = document.getElementById('movingBox');
let pos = 0;
let dir = 1;
setInterval(() => {
  pos += 3 * dir;
  if (pos > 100 || pos < 0) dir *= -1;
  box.style.transform = `translateX(${pos}px)`;
}, 16);


const circle = document.getElementById('scalingCircle');
let scale = 1;
let growing = true;

function scaleCircle() {
  scale += growing ? 0.01 : -0.01;
  if (scale >= 1.4 || scale <= 0.6) growing = !growing;
  circle.style.transform = `scale(${scale})`;
  requestAnimationFrame(scaleCircle);
}
requestAnimationFrame(scaleCircle);


function animate({ timing, draw, duration }) {
  const start = performance.now();
  requestAnimationFrame(function frame(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;
    const progress = timing(timeFraction);
    draw(progress);
    if (timeFraction < 1) requestAnimationFrame(frame);
  });
}


function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

const purpleBox = document.getElementById('purpleBox');

function animatePurple() {
  animate({
    duration: 2000,
    timing: easeInOut,
    draw(progress) {
      const move = progress * 100;
      purpleBox.style.transform = `translateY(${-move}px)`;
    },
  });
  setTimeout(animatePurple, 2000);
}
animatePurple();




const canvas = document.getElementById('logoCanvas');
const ctx = canvas.getContext('2d');
const btn = document.getElementById('toggleBtn');
const logo = new Image();
logo.src = 'logo.jpg';

let running = false;
let x = 50;
let dx = 2;
let size = 80;
let logoGrowing = true;
let textOpacity = 0;
let textVisible = true;
let circles = [];

function draw() {
  if (!running) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (circles.length < 10 && Math.random() < 0.05) {
    circles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 5 + Math.random() * 10,
      alpha: 1
    });
  }

  circles.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(80,201,206,${c.alpha})`;
    ctx.fill();
    c.y -= 0.5;
    c.alpha -= 0.01;
  });
  circles = circles.filter(c => c.alpha > 0);

  x += dx;
  if (x > canvas.width - size || x < 0) dx = -dx;

  if (logoGrowing) size += 0.5; else size -= 0.5;
  if (size > 100 || size < 60) logoGrowing = !logoGrowing;

  ctx.drawImage(logo, x, 100, size, size);

  if (textVisible) {
    textOpacity += 0.02;
    if (textOpacity >= 1) textVisible = false;
  } else {
    textOpacity -= 0.02;
    if (textOpacity <= 0) textVisible = true;
  }

  ctx.globalAlpha = textOpacity;
  ctx.font = 'bold 26px Poppins';
  ctx.fillStyle = '#50c9ce';
  ctx.fillText('Інженерія програмного забезпечення', 80, 250);
  ctx.globalAlpha = 1;

  requestAnimationFrame(draw);
}

btn.addEventListener('click', () => {
  running = !running;
  if (running) requestAnimationFrame(draw);
});

logo.onload = () => {
  ctx.font = '20px Poppins';
  ctx.fillStyle = '#aaa';
  ctx.fillText('Натисни ▶ щоб почати анімацію', 180, 150);
};
