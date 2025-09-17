window.onload = function () {
  const savedName = localStorage.getItem("helpdeskName");
  if (savedName) {
    document.getElementById("helpdeskInput").value = savedName;
  }
};

function showAutoAlert(message) {
  const alertBox = document.getElementById("autoAlert");
  alertBox.textContent = message;
  alertBox.style.display = "block";
  alertBox.style.opacity = "0.9";

  setTimeout(() => {
    alertBox.style.opacity = "0";
    setTimeout(() => {
      alertBox.style.display = "none";
    }, 500);
  }, 2000);
}
function greetPage() {
  const helpdeskName = document.getElementById("helpdeskInput").value.trim();
  if (!helpdeskName) {
    showAutoAlert("Điền tên đi man.");
    return;
  }
  localStorage.setItem("helpdeskName", helpdeskName);
  window.location.href = "/greetPrompt.html";
}
function reportPage() {
  const helpdeskName = document.getElementById("helpdeskInput").value.trim();
  if (!helpdeskName) {
    showAutoAlert("Điền tên đi man.");
    return;
  }
  localStorage.setItem("helpdeskName", helpdeskName);
  window.location.href = "/reportPrompt.html";
}
