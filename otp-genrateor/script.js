const numberfield = document.querySelector(".number");
const otpfield = document.querySelector(".otp");
const sendotpbtn = document.querySelector(".sendotp");
const sumbitotpbtn = document.querySelector(".sumbitotp");
const otphere = document.querySelector(".otphere");

let OTP = "";

sendotpbtn.addEventListener("click", () => {
  let val = numberfield.value;

  if (val.length <= 9) {
    alert("enter valid number");
  } else {
    alert("otp sent");

    OTP = otpsent();
    otphere.textContent = `OTP: ${OTP}`;
  }
});

let digits = "0123456789";
function otpsent() {
  let otp = "";
  let len = digits.length;
  for (let i = 0; i < 6; i++) {
    otp += digits.charAt(Math.floor(Math.random() * len));
  }
  return otp;
}

sumbitotpbtn.addEventListener("click", () => {
  let val = otpfield.value;
  if (val === OTP) {
    alert("login succesfully");
    otpfield.value = "";
    numberfield.value = "";
    otphere.textContent = "";
  } else {
    alert("enter valid otp");
  }
});
