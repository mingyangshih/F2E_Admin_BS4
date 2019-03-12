// BS4 tooltip
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
})
// tag dropdown menu show and close effect
let faTags = document.querySelector('.fa-tags');
let tagDropDownMenu = document.querySelector('#tagDropDownMenu');
const activeFunction = function () {
  let displayValue = window.getComputedStyle(tagDropDownMenu, null).getPropertyValue('display');
  if (displayValue == "none") {
    tagDropDownMenu.setAttribute('style', 'display:block;');
  } else {
    tagDropDownMenu.setAttribute('style', 'display:none;');
  }

}
faTags.addEventListener('click', function () {
  activeFunction();
})

// head input select all function
let selectAll = document.getElementById('selectAll');

const inputCheckBoxTrue = function () {
  let productCheckBox = document.querySelectorAll("input[id^='product']");
  if (selectAll.checked == true) {
    productCheckBox.forEach(function (item) {
      item.checked = true;
    })
  }
}
const inputCheckBoxFalse = function () {
  let productCheckBox = document.querySelectorAll("input[id^='product']");
  if (selectAll.checked == false) {
    productCheckBox.forEach(function (item) {
      item.checked = false;
    })
  }
}
const selectAllFunction = function () {
  if (selectAll.checked == true) {
    inputCheckBoxTrue();
  } else {
    inputCheckBoxFalse();
  }
}
selectAll.addEventListener('click', function () {
  selectAllFunction();
})

// dropdown arrow effect
const arrowDropDownItemRenew = function () {
  let arrowDropDownItem = document.querySelectorAll("a[class~='chooseBox']");
  arrowDropDownItem.forEach(function (item, idx) {
    let tdButton = document.querySelectorAll("td button[class~=dropdown-toggle]");
    item.addEventListener('click', function (e) {
      e.preventDefault();
      if (idx == 0) {
        selectAll.checked = true;
        selectAllFunction();
      } else if (idx == 1) {
        selectAll.checked = false;
        selectAllFunction();
      } else if (idx == 2) {
        tdButton.forEach(function (item, index) {
          if (tdButton[index].textContent == "PUBLISHED") {
            let productCheckBox = document.querySelectorAll("input[id^='product']");
            productCheckBox[index].checked = true;
          }
        })
      } else if (idx == 3) {
        tdButton.forEach(function (item, index) {
          if (tdButton[index].textContent == "UNPUBLISHED") {
            let productCheckBox = document.querySelectorAll("input[id^='product']");
            productCheckBox[index].checked = true;
          }
        })
      }
    })
  })
};
arrowDropDownItemRenew();

// td button change color
const tdButtonChangeColor = function () {
  let tdButton = document.querySelectorAll("td button[class~=dropdown-toggle]");
  tdButton.forEach(function (item, idx) {
    if (item.textContent == "PUBLISHED") {
      // item.setAttribute('style', 'background-color:#7ED321;');
      item.className = "";
      item.classList.add('btn', 'btn-success', 'dropdown-toggle', 'py-2', 'px-3'
      )
      let classname = tdButton[idx].parentNode.parentNode.parentNode.className;
      let classnameTr = document.querySelectorAll('.' + classname);
      classnameTr.forEach(function (item, idx) {
        item.setAttribute('style', 'color:#000000');
      })
    } else {
      // item.setAttribute('style', 'background:#9b9b9b;');
      item.className = "";
      item.classList.add('btn', 'btn-gray', 'dropdown-toggle', 'py-2', 'px-3'
      )
      let classname = tdButton[idx].parentNode.parentNode.parentNode.className;
      let classnameTr = document.querySelectorAll('.' + classname);
      classnameTr.forEach(function (item, idx) {
        item.setAttribute('style', 'color:#9b9b9b');
      })
    }
  })
}
tdButtonChangeColor();



// dropdown tag effect

const dropdownTagEffect = function () {
  let changeStatusButton = document.querySelectorAll('a[class~="changeStatusButton"');
  changeStatusButton.forEach(function (item, idx) {
    item.addEventListener('click', function () {
      let tdButton = document.querySelectorAll("td button[class~=dropdown-toggle]");
      let productCheckBox = document.querySelectorAll("input[id^='product']");
      if (changeStatusButton[idx].textContent == 'PUBLISHED') {
        productCheckBox.forEach(function (item2, idx2) {
          if (item2.checked == true) {
            tdButton[idx2].textContent = "PUBLISHED";
            tdButtonChangeColor();
          }
        })
      } else {
        productCheckBox.forEach(function (item2, idx2) {
          if (item2.checked == true) {
            tdButton[idx2].textContent = "UNPUBLISHED";
            tdButtonChangeColor();
          }
        })
      }
    })
  })
}
dropdownTagEffect();

// chabgeTdButtonStatus
const changeTdButtonStatus = function () {
  let tdDorpDownItem = document.querySelectorAll('td button[class="dropdown-item"]');
  tdDorpDownItem.forEach(function (item, idx) {
    item.addEventListener('click', function () {
      if (item.textContent == "PUBLISHED") {
        tdDorpDownItem[idx].parentNode.previousElementSibling.textContent = "PUBLISHED";
        tdButtonChangeColor();
      } else {
        tdDorpDownItem[idx].parentNode.previousElementSibling.textContent = "UNPUBLISHED";
        tdButtonChangeColor();
      }
    })
  })
}
changeTdButtonStatus();

// add new specification
let addNewSpec = document.querySelector('.addNewSpec');
let specContent = document.querySelector('.specContent');
let str = specContent.innerHTML;
addNewSpec.addEventListener('click', function (e) {
  e.preventDefault();
  let createSpecElement = document.createElement('div');
  let specContentOuter = document.querySelector('.specContentOuter');
  createSpecElement.setAttribute('class', 'col-12  mb-2 pl-0 specContent');
  createSpecElement.innerHTML = str;
  specContentOuter.appendChild(createSpecElement);
})
// reset
let specContentOuter = document.querySelector('.specContentOuter');
let specOuterInner = specContentOuter.innerHTML;
const resetSpec = function () {
  specContentOuter.innerHTML = specOuterInner;
}

// add to table
const rowNewData = function (name, original, discount, size, color, inventory) {
  this.name = name;
  this.original = original;
  this.size = size;
  this.discount = discount;
  this.color = color;
  this.inventory = inventory;
}

let saveDraft = document.querySelector('.saveDraft');
saveDraft.addEventListener('click', function () {
  let specContentDivCol = document.querySelectorAll('.specContent');
  let tbody = document.querySelector('tbody');
  let deckObject = tdColOne(); // 把所新增資料存成Object
  //row1 col1 data
  let tdFirst = `<div class="custom-control custom-checkbox d-flex align-items-center pl-2">
  <input
    type="checkbox"
    id="product${deckObject[0].name}"
  >
  <img
    src="images/100.jpg"    
    alt="50*50"
    class="mx-2"
  >
  <label
    class="mb-0"
    for="product${deckObject[0].name}"
  >${deckObject[0].name}</label>
  </div>`;
  // td 內塞東西
  let imgLength = document.querySelectorAll('img[alt="50*50"]').length + 1;
  for (let i = 0; i < deckObject[0].size.length; i++) {
    let tr = document.createElement('tr');
    tr.setAttribute('style', 'color:#9b9b9b');
    tr.classList.add('product' + imgLength);
    tbody.appendChild(tr);
    for (let j = 0; j < 7; j++) {
      let td = document.createElement('td');
      if (i != 0) {
        td.setAttribute('class', 'border-top-0');
      }
      tr.appendChild(td);
      if (i == 0 && j == 0) {
        td.innerHTML = tdFirst;
      } else if (i == 0 && j == 1) {
        let td01Div = document.createElement('div');
        td01Div.setAttribute('class', 'd-flex align-items-center justify-content-end');
        td01Div.innerHTML = `<p class="mb-0">$${deckObject[0].original}</p>`;
        td.appendChild(td01Div);
      } else if (i == 0 && j == 2) {
        let td02Div = document.createElement('div');
        td02Div.setAttribute('class', 'd-flex align-items-center justify-content-end');
        td02Div.innerHTML = `<p class="mb-0">$${deckObject[0].discount}</p>`;
        td.appendChild(td02Div);
      } else if (i == 0 && j == 3) {
        // td.setAttribute('class', 'border-bottom border-light');
        let td03Div = document.createElement('div');
        td03Div.setAttribute('class', 'd-flex align-items-center justify-content-start');
        td03Div.innerHTML = `<p class="mb-0">${deckObject[0].size[0]}</p>`;
        td.appendChild(td03Div);
      } else if (i == 0 && j == 4) {
        // td.setAttribute('class', 'border-bottom border-light');
        let td04Div = document.createElement('div');
        td04Div.setAttribute('class', 'd-flex flex-column');
        for (let k = 0; k < deckObject[0].color[0].length; k++) {
          let pElement = document.createElement('p');
          pElement.setAttribute('class', 'mb-0');
          pElement.textContent = deckObject[0].color[0][k];
          td04Div.appendChild(pElement);
        }
        td.appendChild(td04Div);
      } else if (i == 0 && j == 5) {
        // td.setAttribute('class', 'border-bottom border-light');
        let td05Div = document.createElement('div');
        td05Div.setAttribute('class', 'd-flex flex-column align-items-end');
        for (let x = 0; x < deckObject[0].inventory[0].length; x++) {
          let pElement = document.createElement('p');
          pElement.setAttribute('class', 'mb-0');
          pElement.textContent = deckObject[0].inventory[0][x];
          td05Div.appendChild(pElement);
        }
        td.appendChild(td05Div);
      } else if (i == 1 && j == 3) {
        let td13Div = document.createElement('div');
        td13Div.setAttribute('class', 'd-flex align-items-center justify-content-start');
        td13Div.innerHTML = `<p class="mb-0">${deckObject[0].size[1]}</p>`;
        td.appendChild(td13Div);
      } else if (i == 1 && j == 4) {
        let td14Div = document.createElement('div');
        td14Div.setAttribute('class', 'd-flex flex-column');
        for (let k = 0; k < deckObject[0].color[1].length; k++) {
          let pElement = document.createElement('p');
          pElement.setAttribute('class', 'mb-0');
          pElement.textContent = deckObject[0].color[1][k];
          td14Div.appendChild(pElement);
        }
        td.appendChild(td14Div);
      } else if (i == 1 && j == 5) {
        let td15Div = document.createElement('div');
        td15Div.setAttribute('class', 'd-flex flex-column align-items-end');
        for (let x = 0; x < deckObject[0].inventory[1].length; x++) {
          let pElement = document.createElement('p');
          pElement.setAttribute('class', 'mb-0');
          pElement.textContent = deckObject[0].inventory[1][x];
          td15Div.appendChild(pElement);
        }
        td.appendChild(td15Div);
      } else if (i == 2 && j == 3) {
        let td23Div = document.createElement('div');
        td23Div.setAttribute('class', 'd-flex align-items-center justify-content-start');
        td23Div.innerHTML = `<p class="mb-0">${deckObject[0].size[2]}</p>`;
        td.appendChild(td23Div);
      } else if (i == 2 && j == 4) {
        let td24Div = document.createElement('div');
        td24Div.setAttribute('class', 'd-flex flex-column');
        for (let k = 0; k < deckObject[0].color[2].length; k++) {
          let pElement = document.createElement('p');
          pElement.setAttribute('class', 'mb-0');
          pElement.textContent = deckObject[0].color[2][k];
          td24Div.appendChild(pElement);
        }
        td.appendChild(td24Div);
      } else if (i == 2 && j == 5) {
        let td25Div = document.createElement('div');
        td25Div.setAttribute('class', 'd-flex flex-column align-items-end');
        for (let x = 0; x < deckObject[0].inventory[1].length; x++) {
          let pElement = document.createElement('p');
          pElement.setAttribute('class', 'mb-0');
          pElement.textContent = deckObject[0].inventory[2][x];
          td25Div.appendChild(pElement);
        }
        td.appendChild(td25Div);
      } else if (i == deckObject[0].size.length - 1 && j == 6) {
        td.setAttribute('class', 'row justify-content-center border-top-0');
        td.innerHTML = `<div class="btn-group">
        <button
          type="button"
          class="btn btn-secondary dropdown-toggle py-2 px-3"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >UNPUBLISHED</button>
        <div class="dropdown-menu dropdown-menu-right">
          <button
            class="dropdown-item"
            type="button"
          >PUBLISHED</button>
          <button
            class="dropdown-item"
            type="button"
          >UNPUBLISHED</button>
        </div>`;
        tdButtonChangeColor();
      }
    }
  }
  changeTdButtonStatus();
  arrowDropDownItemRenew();
  dropdownTagEffect();
  resetSpec();
})

let publish = document.querySelector('.publish');
publish.addEventListener('click', function () {
  let specContentDivCol = document.querySelectorAll('.specContent');
  let tbody = document.querySelector('tbody');
  let deckObject = tdColOne(); // 把所新增資料存成Object
  console.log(deckObject);
  //row1 col1 data
  let tdFirst = `<div class="custom-control custom-checkbox d-flex align-items-center pl-2">
  <input
    type="checkbox"
    id="product${deckObject[0].name}"
  >
  <img
    src="images/100.jpg"    
    alt="50*50"
    class="mx-2"
  >
  <label
    class="mb-0"
    for="product${deckObject[0].name}"
  >${deckObject[0].name}</label>
  </div>`;
  // td 內塞東西
  let imgLength = document.querySelectorAll('img[alt="50*50"]').length + 1; //算img數量，給定tr class name用
  for (let i = 0; i < deckObject[0].size.length; i++) {
    let tr = document.createElement('tr');
    tr.setAttribute('style', 'color:#000000');
    tr.classList.add('product' + imgLength);
    tbody.appendChild(tr);
    for (let j = 0; j < 7; j++) {
      let td = document.createElement('td');
      if (i != 0) {
        td.setAttribute('class', 'border-top-0');
      }
      tr.appendChild(td);
      if (i == 0 && j == 0) {
        td.innerHTML = tdFirst;
      } else if (i == 0 && j == 1) {
        let td01Div = document.createElement('div');
        td01Div.setAttribute('class', 'd-flex align-items-center justify-content-end');
        td01Div.innerHTML = `<p class="mb-0">$${deckObject[0].original}</p>`;
        td.appendChild(td01Div);
      } else if (i == 0 && j == 2) {
        let td02Div = document.createElement('div');
        td02Div.setAttribute('class', 'd-flex align-items-center justify-content-end');
        td02Div.innerHTML = `<p class="mb-0">$${deckObject[0].discount}</p>`;
        td.appendChild(td02Div);
      } else if (i == 0 && j == 3) {
        // td.setAttribute('class', 'border-bottom border-light');
        let td03Div = document.createElement('div');
        td03Div.setAttribute('class', 'd-flex align-items-center justify-content-start');
        td03Div.innerHTML = `<p class="mb-0">${deckObject[0].size[0]}</p>`;
        td.appendChild(td03Div);
      } else if (i == 0 && j == 4) {
        // td.setAttribute('class', 'border-bottom border-light');
        let td04Div = document.createElement('div');
        td04Div.setAttribute('class', 'd-flex flex-column');
        for (let k = 0; k < deckObject[0].color[0].length; k++) {
          let pElement = document.createElement('p');
          pElement.setAttribute('class', 'mb-0');
          pElement.textContent = deckObject[0].color[0][k];
          td04Div.appendChild(pElement);
        }
        td.appendChild(td04Div);
      } else if (i == 0 && j == 5) {
        // td.setAttribute('class', 'border-bottom border-light');
        let td05Div = document.createElement('div');
        td05Div.setAttribute('class', 'd-flex flex-column align-items-end');
        for (let x = 0; x < deckObject[0].inventory[0].length; x++) {
          let pElement = document.createElement('p');
          pElement.setAttribute('class', 'mb-0');
          pElement.textContent = deckObject[0].inventory[0][x];
          td05Div.appendChild(pElement);
        }
        td.appendChild(td05Div);
      } else if (i == 1 && j == 3) {
        let td13Div = document.createElement('div');
        td13Div.setAttribute('class', 'd-flex align-items-center justify-content-start');
        td13Div.innerHTML = `<p class="mb-0">${deckObject[0].size[1]}</p>`;
        td.appendChild(td13Div);
      } else if (i == 1 && j == 4) {
        let td14Div = document.createElement('div');
        td14Div.setAttribute('class', 'd-flex flex-column');
        for (let k = 0; k < deckObject[0].color[1].length; k++) {
          let pElement = document.createElement('p');
          pElement.setAttribute('class', 'mb-0');
          pElement.textContent = deckObject[0].color[1][k];
          td14Div.appendChild(pElement);
        }
        td.appendChild(td14Div);
      } else if (i == 1 && j == 5) {
        let td15Div = document.createElement('div');
        td15Div.setAttribute('class', 'd-flex flex-column align-items-end');
        for (let x = 0; x < deckObject[0].inventory[1].length; x++) {
          let pElement = document.createElement('p');
          pElement.setAttribute('class', 'mb-0');
          pElement.textContent = deckObject[0].inventory[1][x];
          td15Div.appendChild(pElement);
        }
        td.appendChild(td15Div);
      } else if (i == 2 && j == 3) {
        let td23Div = document.createElement('div');
        td23Div.setAttribute('class', 'd-flex align-items-center justify-content-start');
        td23Div.innerHTML = `<p class="mb-0">${deckObject[0].size[2]}</p>`;
        td.appendChild(td23Div);
      } else if (i == 2 && j == 4) {
        let td24Div = document.createElement('div');
        td24Div.setAttribute('class', 'd-flex flex-column');
        for (let k = 0; k < deckObject[0].color[2].length; k++) {
          let pElement = document.createElement('p');
          pElement.setAttribute('class', 'mb-0');
          pElement.textContent = deckObject[0].color[2][k];
          td24Div.appendChild(pElement);
        }
        td.appendChild(td24Div);
      } else if (i == 2 && j == 5) {
        let td25Div = document.createElement('div');
        td25Div.setAttribute('class', 'd-flex flex-column align-items-end');
        for (let x = 0; x < deckObject[0].inventory[1].length; x++) {
          let pElement = document.createElement('p');
          pElement.setAttribute('class', 'mb-0');
          pElement.textContent = deckObject[0].inventory[2][x];
          td25Div.appendChild(pElement);
        }
        td.appendChild(td25Div);
      } else if (i == deckObject[0].size.length - 1 && j == 6) {
        td.setAttribute('class', 'row justify-content-center border-top-0');
        td.innerHTML = `<div class="btn-group">
        <button
          type="button"
          class="btn btn-secondary dropdown-toggle py-2 px-3"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >PUBLISHED</button>
        <div class="dropdown-menu dropdown-menu-right">
          <button
            class="dropdown-item"
            type="button"
          >PUBLISHED</button>
          <button
            class="dropdown-item"
            type="button"
          >UNPUBLISHED</button>
        </div>`;
        tdButtonChangeColor();
      }
    }
  }
  changeTdButtonStatus();
  arrowDropDownItemRenew();
  dropdownTagEffect();
  resetSpec();
})
// 將新增資料存到物件中，以方便之後取用
function tdColOne(i, j, td) {
  let productName = document.querySelector('input[placeholder~="Vestibulum"]').value;
  let oroginalPrice = document.querySelector('.originalPrice').value;
  let discountPrice = document.querySelector('.discountPrice').value;
  let size = document.querySelectorAll('select.size');
  let color = document.querySelectorAll('.color');
  let inventory = document.querySelectorAll('.inventory');
  let sizeData = [];
  let colorDataS = [], inventoryS = [];
  let colorDataM = [], inventoryM = [];
  let colorDataL = [], inventoryL = [];
  let sizetotaluse = [];
  let colortotaluse = [];
  let inventorytotaluse = [];
  size.forEach(function (item, index) {
    sizeData.push(item.value);
    if (item.value == "S") {
      colorDataS.push(color[index].value);
      inventoryS.push(inventory[index].value);
    } else if (item.value == "M") {
      colorDataM.push(color[index].value);
      inventoryM.push(inventory[index].value);
    } else if (item.value == "L") {
      colorDataL.push(color[index].value);
      inventoryL.push(inventory[index].value);
    }
    colortotaluse = [colorDataS, colorDataM, colorDataL];
    inventorytotaluse = [inventoryS, inventoryM, inventoryL];
  })
  sizeData.forEach(function (item, index) {
    if (sizetotaluse.indexOf(item) == -1) {
      sizetotaluse.push(sizeData[index]);
    }
  })
  let deck = [new rowNewData(productName, oroginalPrice, discountPrice, sizetotaluse, colortotaluse, inventorytotaluse)];
  return deck;
}
