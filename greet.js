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
  const genderInput = document.querySelector('input[name="gender"]:checked');
  const helpdesk = localStorage.getItem("helpdeskName");
  const user = document.getElementById("user").value.trim();
  const seat = document.getElementById("seat").value.trim();

  if (!helpdesk || !user || !seat) {
    showAutoAlert("Điền hết đi bro.");
    return;
  }

  if (!genderInput) {
    showAutoAlert("Giới tính đâu bro.");
    return;
  }

  const gender = genderInput.value;

  const message = `Dear ${gender} ${user}!\n\nEm là ${helpdesk} bên IT phụ trách hỗ trợ Upgrade thiết bị lên Win 11 cho thiết bị ${gender.toLowerCase()} đang quản lý.\n${gender} có ở seatcode ${seat} không để em qua hỗ trợ ạ?`;

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
