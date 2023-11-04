//輸入月份1~12月，利用switch判斷相對應的季節春、夏、秋、冬並印出。若不在此範圍則印出”輸入錯誤”。

var input = document.getElementById("input");
var submitBtn = document.querySelector(".submitBtn"); //选择具有class为 "submitBtn" 的 HTML 元素

function FsubmitBtn(value) {
  var str = "";
  var submitValue = parseInt(input.value);
  switch (submitValue) {
    case 1:
    case 2:
    case 3:
      str = "spring";
      break;
    case 4:
    case 5:
    case 6:
      str = "summer";

      break;

    case 7:
    case 8:
    case 9:
      str = "fall";

      break;

    case 10:
    case 11:
    case 12:
      str = "winter";

      break;
    default:
      str = "輸入錯誤";
  }
  alert(str);
}
submitBtn.addEventListener("click", FsubmitBtn);
