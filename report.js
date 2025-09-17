function resetForm() {
  document.querySelectorAll('input, textarea').forEach(el => {
    if (el.type === "radio" || el.type === "checkbox") {
      el.checked = false;
    } else {
      el.value = "";
    }
  });
}

function copyToClipboard() {
  const output = document.getElementById("output");
  const message = output.value.trim();

  if (!message) {
    showAutoAlert("Output trống.");
    return;
  }

  navigator.clipboard
    .writeText(message)
    .then(() => {
      showAutoAlert("Copy thành công.");
    })
    .catch((err) => {
      let error = "Lỗi copy: " + err;
      showAutoAlert(error);
    });
}

function generateMessage() {
  const helpdesk = localStorage.getItem("helpdeskName");
  const done = document.getElementById("done").value.trim();
  const bypass = document.getElementById("bypass").value.trim();
  const contacting = document.getElementById("contacting").value.trim();
  const difficulty = document.getElementById("difficulty").value.trim();

   const isEmpty = (val) => val === null || val === "" || val=== undefined;
  if (!helpdesk ||isEmpty(done) || isEmpty(bypass) || isEmpty(contacting) || isEmpty(difficulty)) {
    showAutoAlert("Điền lại đi bro.");
    return;
  }

const d = new Date();
const date = `${d.getDate().toString().padStart(2,0)}/${(d.getMonth()+1).toString().padStart(2,0)}/${d.getFullYear()}`;
  const message = `${helpdesk} báo cáo ${date}
Nhiệm vụ : Upgrade Win 11
Chi tiết :
Đã hoàn thành : ${done}
Bypass : ${bypass}
Đang liên hệ : ${contacting}
Khó khăn : ${difficulty}
`;
  document.getElementById("output").value = message;
}

function showAutoAlert(message) {
  const alertBox = document.getElementById("autoAlert");
  alertBox.textContent = message;
  alertBox.style.display = "block";
  alertBox.style.opacity = "0.9";
  alertBox.style.color = "black";

  setTimeout(() => {
    alertBox.style.opacity = "0";
    setTimeout(() => {
      alertBox.style.display = "none";
    }, 500);
  }, 2000);
}
