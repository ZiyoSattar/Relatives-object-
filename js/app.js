let elForm  = document.querySelector(".hero__form-js");
let elInpName  = elForm.querySelector(".hero__name-js");
let elInpSurname  = elForm.querySelector(".hero__surname-js");
let elInpTel = document.querySelector(".hero__tel-js");
let elInpRelatives = document.querySelector(".hero__relatives-js");



let elHeroList = document.querySelector(".hero__list-js");
let elResultArr = [];

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  elHeroList.innerHTML = "";

  let InpNameVal = elInpName.value.trim();
  let InpSurNameVal = elInpSurname.value.trim();
  let InpTeleVal = elInpTel.value.trim();
  let InpRelativesVal = elInpRelatives.value.trim();

  const heroObject = {
    name: InpNameVal,
    surname: InpSurNameVal,
    tel: InpTeleVal,
    relative: InpRelativesVal
  }  




  elResultArr.push(heroObject); 


  elResultArr.forEach((element ) => {
    InpNameVal.textContent = "";
    InpSurNameVal.textContent = "";
    InpTeleVal.textContent = "";
    InpRelativesVal.textContent = "";

    let elItem = document.createElement("li");
    elHeroList.appendChild(elItem);

    elItem.setAttribute("class", "list-group-item w-50 mb-5")
    

    let elNameItem = document.createElement("p");
    let elSurnameItem = document.createElement("p");
    let elTelItem = document.createElement("a");
    let elRelativesItem = document.createElement("p");

    elItem.appendChild(elNameItem);
    elItem.appendChild(elSurnameItem);
    elItem.appendChild(elTelItem);[]
    elItem.appendChild(elRelativesItem);

    elTelItem.setAttribute("href", "tel:");


    elNameItem.textContent = `User Name: ${element.name}`;
    elSurnameItem.textContent = `User Surname: ${element.surname}`;
    elTelItem.textContent = `User Tel: ${element.tel}`;
    elRelativesItem.textContent = `User Relatives: ${element.relative}`;



  })
  
})