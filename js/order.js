// BS4 tooltip
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
})
// tag dropdown menu show and close effect
let faTags = document.querySelector('.fa-tags');
let tagDropDownMenu = document.querySelector('#tagDropDownMenu');
const hoverFunction = function () {
  let displayValue = window.getComputedStyle(tagDropDownMenu, null).getPropertyValue('display');
  if (displayValue == "none") {
    tagDropDownMenu.setAttribute('style', 'display:block;');
  } else {
    tagDropDownMenu.setAttribute('style', 'display:none;');
  }

}
faTags.addEventListener('click', function () {
  hoverFunction();
})


// table col control
let tableInputCheckBox = document.querySelectorAll('.tableControl');
let td = document.querySelectorAll('td');
let th = document.querySelectorAll('th');
// table show or not function
const tableColSetup = function () {
  for (let i = 0; i < tableInputCheckBox.length; i++) {
    if (tableInputCheckBox[i].checked == false) {
      th[i].style.display = "none";
      for (let j = 0; j < td.length; j++) {
        if (j % 10 == i) {
          td[j].style.display = "none";
        }
      }
    } else {
      th[i].style.display = "";
      for (let j = 0; j < td.length; j++) {
        if (j % 10 == i) {
          td[j].style.display = "";
        }
      }
    }
  }
}
tableColSetup();
// table col setup show or not by event listner
for (let i = 0; i < tableInputCheckBox.length; i++) {
  tableInputCheckBox[i].addEventListener('click', function () {
    tableColSetup();
  })
}

// change table property function
const changeColor = function () {
  let buttonBtn = document.querySelectorAll('button.tableBtn');
  let tbodyTr = document.querySelectorAll('tbody tr');
  for (let i = 0; i < buttonBtn.length; i++) {
    if (buttonBtn[i].textContent == "Paid") {
      // buttonBtn[i].style.background = "#7ED321";
      buttonBtn[i].className = "";
      buttonBtn[i].classList.add('btn', 'dropdown-toggle', 'tableBtn', 'btn-success');
      tbodyTr[i].setAttribute("style", "text-decoration:none;");
    } else if (buttonBtn[i].textContent == "Unpaid") {
      // buttonBtn[i].style.background = "#9b9b9b";
      buttonBtn[i].className = "";
      buttonBtn[i].classList.add('btn', 'dropdown-toggle', 'tableBtn', 'btn-gray');
      tbodyTr[i].setAttribute("style", "text-decoration:none;");
      tbodyTr[i].style.color = "#9B9B9B";
    } else if (buttonBtn[i].textContent == "Shipping") {
      // buttonBtn[i].style.background = "#F5A623";
      buttonBtn[i].className = "";
      buttonBtn[i].classList.add('btn', 'dropdown-toggle', 'tableBtn', 'btn-shipping');
      tbodyTr[i].setAttribute("style", "text-decoration:none;");
    } else if (buttonBtn[i].textContent == "Done") {
      // buttonBtn[i].style.background = "#4A90E2";
      buttonBtn[i].className = "";
      buttonBtn[i].classList.add('btn', 'dropdown-toggle', 'tableBtn', 'btn-primary');
      tbodyTr[i].setAttribute("style", "text-decoration: line-through;");
      tbodyTr[i].style.color = "#9B9B9B";
    }
  }
}
changeColor();
// table list change content and color by enent listner
let dropDownItem = document.querySelectorAll('td .dropdown-item');
for (let i = 0; i < dropDownItem.length; i++) {
  dropDownItem[i].addEventListener('click', function (e) {
    let dropDownItemTextContent = e.target.textContent;
    this.parentNode.previousElementSibling.textContent = dropDownItemTextContent;
    changeColor();
  })
}

// top left checkbox effect
// customCheck1為header 上的input checkbox
let customCheck1 = document.getElementById('customCheck1');
let trTdSecond = document.querySelectorAll('tr td:nth-child(2) input');
const checkBoxSelectAll = function () {
  if (customCheck1.checked == true) {
    for (let i = 0; i < trTdSecond.length; i++) {
      trTdSecond[i].checked = true;
    }
  } else if (customCheck1.checked == false) {
    for (let i = 0; i < trTdSecond.length; i++) {
      trTdSecond[i].checked = false;
    }
  }
}
customCheck1.addEventListener('click', function () {
  checkBoxSelectAll();
})

// top left dropdown item effect
// select all, unselect all, and other effect
let aChooseBox = document.querySelectorAll('a.chooseBox');
let trTdTenthButton = document.querySelectorAll('tr td:nth-child(10) .tableBtn');
const aChooseBoxEffect = function (i) {
  if (i == 0) {   //Drop Down Item Select all
    customCheck1.checked = true;
    checkBoxSelectAll();
  } else if (i == 1) {   //Drop Down Item Unselect all
    customCheck1.checked = false;
    checkBoxSelectAll();
  } else if (i == 2) {
    for (let j = 0; j < trTdTenthButton.length; j++) {
      if (trTdTenthButton[j].textContent == "Paid") {
        trTdSecond[j].checked = true;
      }
    }
  } else if (i == 3) {
    for (let j = 0; j < trTdTenthButton.length; j++) {
      if (trTdTenthButton[j].textContent == "Unpaid") {
        trTdSecond[j].checked = true;
      }
    }
  } else if (i == 4) {
    for (let j = 0; j < trTdTenthButton.length; j++) {
      if (trTdTenthButton[j].textContent == "Shipping") {
        trTdSecond[j].checked = true;
      }
    }
  } else if (i == 5) {
    for (let j = 0; j < trTdTenthButton.length; j++) {
      if (trTdTenthButton[j].textContent == "Done") {
        trTdSecond[j].checked = true;
      }
    }
  }
}

for (let i = 0; i < aChooseBox.length; i++) {
  aChooseBox[i].addEventListener('click', function (e) {
    aChooseBoxEffect(i);
  })
}

// header top left choobox than change status effect
let changeStatusButton = document.querySelectorAll('.changeStatusButton');
for (let i = 0; i < changeStatusButton.length; i++) {
  changeStatusButton[i].addEventListener('click', function () {
    for (j = 0; j < trTdSecond.length; j++) {
      if (i == 0 && trTdSecond[j].checked == true) {
        trTdTenthButton[j].textContent = "Paid";
      } else if (i == 1 && trTdSecond[j].checked == true) {
        trTdTenthButton[j].textContent = "Unpaid";
      } else if (i == 2 && trTdSecond[j].checked == true) {
        trTdTenthButton[j].textContent = "Shipping";
      } else if (i == 3 && trTdSecond[j].checked == true) {
        trTdTenthButton[j].textContent = "Done";
      }
    }
    changeColor();
    hoverFunction();
  })
}