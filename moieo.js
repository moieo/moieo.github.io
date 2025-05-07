var establishedDate = new Date('2020-04-15T00:00:00');

function updateEstablishedTime() {
  var now = new Date();
  var difference = now.getTime() - establishedDate.getTime();

  // 计算天数、小时数、分钟数和秒数
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  var displayTime = "本站已稳定运行 " + days + " 天 " + hours + " 小时 " + minutes + " 分钟 " + seconds + " 秒";

  // 获取HTML元素并更新文本内容
  var establishedTimeElement = document.getElementById('established-time');
  if (establishedTimeElement) {
    establishedTimeElement.textContent = displayTime;
  }

  setTimeout(updateEstablishedTime, 1000); // 每秒更新一次
}

document.addEventListener("DOMContentLoaded", function () {
  updateEstablishedTime();
});