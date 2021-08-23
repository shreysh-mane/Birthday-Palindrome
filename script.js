const dobInput = document.querySelector("#dob-input");
const checkBtn = document.querySelector("#palindrome__btn");
const showAns = document.querySelector("#palindrome__ans");

function strReverse(str) {
  return str.split("").reverse().join("");
}

function dateToStr(date) {
  let dateStr = { day: "", month: "", year: "" };
  if (date.day < 10) {
    dateStr.day = "0" + date.day;
  } else {
    dateStr.day = date.day.toString();
  }
  if (date.month < 10) {
    dateStr.month = "0" + date.month;
  } else {
    (dateStr.month = date.month).toString();
  }
  dateStr.year = date.year.toString();
  return dateStr;
}

function getDateFormat(date) {
  var dateStr = dateToStr(date);

  var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
  var yyyymmdd = dateStr.year + dateStr.day + dateStr.month;
  var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
  var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
  var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.year;
  // console.log(ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd);
  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function checkPal(date) {
  var dateFormat = getDateFormat(date);
  // console.log(dateFormat);
  let flag = false;
  for (let format of dateFormat) {
    // console.log(format, strReverse(format));
    if (format == strReverse(format)) {
      // console.log("palindrome");
      flag = true;
      break;
    }
  }
  return flag;
}

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
}

function getNextDate(date) {
  let day = date.day + 1;
  let month = date.month;
  let year = date.year;

  let daysinMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month === 2) {
    if (isLeapYear(year)) {
      if (day > 29) {
        day = 1;
        month += 1;
      }
    } else {
      if (day > 28) {
        day = 1;
        month += 1;
      }
    }
  } else {
    if (day > daysinMonth[month - 1]) {
      day = 1;
      month++;
    }
  }
  if (month > 12) {
    month = 1;
    year++;
  }
  return {
    day: day,
    month: month,
    year: year,
  };
}
function getNextpal(date) {
  let count = 0;
  let nextDate = getNextDate(date);
  while (1) {
    count++;
    let ispal = checkPal(nextDate);
    if (ispal) {
      break;
    }
    nextDate = getNextDate(nextDate);
  }
  return [count, nextDate];
}

function getInput() {
  let dobstr = dobInput.value;
  let dobArr = dobstr.split("-");

  var date = {
    day: Number(dobArr[2]),
    month: Number(dobArr[1]),
    year: Number(dobArr[0]),
  };
  let ispalindrome = checkPal(date);
  if (ispalindrome) {
    showAns.textContent = "It is a Palindrome";
  } else {
    ans = getNextpal(date);
    showAns.textContent = `next palidrome date is ${ans[1].day}-${ans[1].month}-${ans[1].year} which come after ${ans[0]} days`;
  }
}

checkBtn.addEventListener("click", getInput);
