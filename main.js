document.addEventListener("DOMContentLoaded", () => {
  const musicButton = document.getElementById("music-button");
  const music = document.getElementById("background-music");
  const canvas = document.getElementById("balloons");
  const ctx = canvas.getContext("2d");

  // 初始化畫布大小
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const balloons = [];
  const colors = ["#ff6b81", "#ffc107", "#28a745", "#007bff", "#6f42c1"];

  class Balloon {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + Math.random() * 100;
      this.radius = Math.random() * 30 + 20;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.speed = Math.random() * 2 + 1;
    }

    update() {
      this.y -= this.speed;
      if (this.y + this.radius < 0) {
        this.y = canvas.height + this.radius;
        this.x = Math.random() * canvas.width;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    }
  }

  function createBalloons(count) {
    for (let i = 0; i < count; i++) {
      balloons.push(new Balloon());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    balloons.forEach((balloon) => {
      balloon.update();
      balloon.draw();
    });
    requestAnimationFrame(animate);
  }

  // 音樂按鍵邏輯
  if (musicButton) {
    musicButton.addEventListener("click", () => {
      if (music) {
        music.play().catch((error) => {
          console.error("音樂播放失敗：", error);
        });
      }

      // 啟動氣球動畫
      createBalloons(20);
      animate();

      // 隱藏按鍵
      musicButton.style.display = "none";
    });
  }
});
