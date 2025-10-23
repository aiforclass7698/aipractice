// 抓取按鈕與訊息區塊
const button = document.getElementById("thanksButton");
const message = document.getElementById("message");

// 綁定點擊事件
button.addEventListener("click", () => {
  message.textContent = "💬 謝謝瀏覽我的名片！";
  message.style.color = "#00ffff";
  message.style.fontSize = "1.2rem";
  message.style.marginTop = "20px";
  message.style.textShadow = "0 0 10px #00ffff, 0 0 20px #00ffff";
});
