document.addEventListener("DOMContentLoaded", () => {
  const messages = [
    "🎁 今天是你的生日！希望這一天帶給你滿滿的快樂和溫暖～✨",  
    "🎂 新的一歲是全新的起點，我相信你的未來會更加閃亮，夢想一一實現！☀️💖",  
    "🎈 學測快到了，我知道你一直很努力！不管結果如何，你的認真已經是最棒的成就！💪📚",  
    "🌟 記得放鬆心情，考場上就像平常一樣發揮自己就好！我們都相信你，你真的很棒！🌈",  
    "🎉 生日快樂！希望這一年不僅有好成績，還有更多美好的回憶陪伴你～🎊🎂",  
    "❤️ 這段準備的日子很辛苦，但記得，你的每一步努力都在為夢想鋪路，我們永遠在你身後支持你！💖",
    "🎉 生日快樂~~～🎊🎂"

  ];

  const typingEffect = document.getElementById("typing-effect");
  const music = document.getElementById("background-music");
  let messageIndex = 0;
  let charIndex = 0;

  // 播放音樂
  function playMusic() {
    if (music.paused) {
      music.play().catch((error) => {
        console.error("音樂播放失敗：", error);
      });
    }
  }

  // 打字效果
  function typeMessage() {
    if (messageIndex < messages.length) {
      const currentMessage = messages[messageIndex];
      if (charIndex < currentMessage.length) {
        typingEffect.innerHTML += currentMessage[charIndex++];
        setTimeout(typeMessage, 50); // 每個字的速度
      } else {
        typingEffect.innerHTML += "<br><br>"; // 每條訊息間距
        messageIndex++;
        charIndex = 0;
        setTimeout(typeMessage, 500); // 下一條訊息的間隔
      }
    }
  }

  // 確保音樂與打字效果同時運行
  playMusic();
  typeMessage();

  // 每隔 1 秒確保音樂未停止
  setInterval(playMusic, 1000);
});
