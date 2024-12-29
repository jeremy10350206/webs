document.addEventListener("DOMContentLoaded", () => {
  const messages = [
    "🎁 嘿嘿，今天可是你專屬節日耶！我要用最大的熱情ㄉ祝福，給你超滿滿的快樂加倍BUFF！✨",  
    "🎂 新的一歲要更厲害哦！希望接下來的每一天都開開心心！☀️💖",  
    "🎈 你要記得繼續燦爛微笑! 把所有人都融化在你的暖光裡！😄🌈",  
    "🌟 不管前方有什麼冒險等著你，你可是無限潛力大BOSS！加油把夢想一個一個實現，未來超級閃亮都在等著你～💪✨",  
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
