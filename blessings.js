document.addEventListener("DOMContentLoaded", () => {
  const messages = [
    "🎉 祝你生日快樂！",
    "🎂 願你的每一天都充滿驚喜與快樂！",
    "🎁 祝福你的夢想都能成真！"
  ];
  const typingEffect = document.getElementById("typing-effect");
  let index = 0;
  let charIndex = 0;

  function typeMessage() {
    if (index < messages.length) {
      const currentMessage = messages[index];
      if (charIndex < currentMessage.length) {
        typingEffect.innerHTML += currentMessage[charIndex++];
        setTimeout(typeMessage, 100);
      } else {
        typingEffect.innerHTML += "<br>";
        index++;
        charIndex = 0;
        setTimeout(typeMessage, 500);
      }
    }
  }

  typeMessage();
});
