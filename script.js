function checkPassword() {
  const correctPassword = "08042552"; // รหัสผ่านที่ต้องการ
  const enteredPassword = document.getElementById("password").value; // รับค่ารหัสผ่านจากผู้ใช้
  if (enteredPassword === correctPassword) {
      document.getElementById("imageContainer").style.display = "block"; // แสดงรูปภาพ
      document.getElementById("message").innerText = ""; // ลบข้อความผิดพลาด
  } else {
      document.getElementById("message").innerText = "รหัสผ่านไม่ถูกต้อง"; // ข้อความเมื่อรหัสผิด
  }
}
