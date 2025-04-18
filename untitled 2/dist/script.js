function logEntry() {
  const logList = document.getElementById("log-list");
  const li = document.createElement("li");
  const now = new Date().toLocaleString();
  li.innerText = "打卡时间：" + now;
  logList.appendChild(li);
}