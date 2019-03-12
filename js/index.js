$(document).ready(function () {
  // jQuery UI 加日期
  $(".arrow").addClass("fas fa-caret-right");
  $(".date-start").datepicker();
  $(".date-end").datepicker();
  // tooltip jquery
  $('[data-toggle="tooltip"]').tooltip();
});
// change index button content
const changeBtnContent = function (dropDownItemTextContent) {
  let dropDownBtn = document.querySelector('.dropdown button');
  dropDownBtn.textContent = dropDownItemTextContent;
}
let dropDownItem = document.querySelectorAll('.dropdown-item');
for (let i = 0; i < dropDownItem.length; i++) {
  dropDownItem[i].addEventListener('click', function (e) {
    let dropDownItemTextContent = e.target.textContent;
    changeBtnContent(dropDownItemTextContent);
  })
}


