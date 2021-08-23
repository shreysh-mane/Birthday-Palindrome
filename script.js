const dobInput = document.querySelector("#dob-input");
const checkBtn = document.querySelector("#palindrome__btn");
const showAns = document.querySelector("#palindrome__ans");

function revStr() {
  let strr = dobInput.value;
  var he = strr.split("");
  console.log(he);
  return he;
}

checkBtn.addEventListener("click", revStr);
