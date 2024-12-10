// First Input Working Start

document.getElementById("donate-btn-1")
  .addEventListener("click", function () {

    // Function Assign Argument Start

    const parentTotalAmount = getElementInnerTextValueById("total-amount");

    const firstInputValue = getElementInputValueById("donate-input-1");

    const firstInnerTextValue = getElementInnerTextValueById("first-innerText");

    // Function Assign Argument End


    // Input Validation Check Start

    if (isNaN(firstInputValue)) {
      alert("Please Input Your Amount of Money");
      return;
    }

    if (parentTotalAmount < firstInputValue) {
      alert(`${parentTotalAmount}: You Don't Have Enough Money, Try Again`);
      return;
    }

    if (firstInputValue < 0) {
      alert("Are You Wrong, Please Try Again");
      return;
    }

    // Input Validation Check End


    // First Input Calculation By Website Start

    const firstTotal = firstInputValue + firstInnerTextValue;

    const firstDeduction = parentTotalAmount - firstInputValue;

    document.getElementById("first-innerText").innerText = firstTotal;

    document.getElementById("total-amount").innerText = firstDeduction;

    // First Input Calculation By Website End



    // Add Money Transaction History Button Start

    const parentDiv = document.getElementById("add-parent-div");

    const firstInput = document.getElementById("first-input-text").innerText;

    const dateFun = new Date();


    const childDiv = document.createElement("div");
    childDiv.classList.add("container", "mx-auto", "border", "p-6", "rounded-lg", "mb-4");

    childDiv.innerHTML = `    
        <p class="pb-3 font-bold">${firstInputValue} ${firstInput}</p>  
        <p class="p-1 ms-1 bg-gray-100 rounded-lg">${dateFun}</p>    
    `;

    parentDiv.appendChild(childDiv);

    // Add Money Transaction History Button End

  });

// First Input Working End



// Second Input Working Start

document.getElementById("donate-btn-2")
  .addEventListener("click", function () {

    // Function Assign Argument Start

    const parentTotalAmount = getElementInnerTextValueById("total-amount");

    const secondInputValue = getElementInputValueById("donate-input-2");

    const secondInnerTextValue = getElementInnerTextValueById("second-innerText");

    // Function Assign Argument End


    // Input Validation Check Start

    if (isNaN(secondInputValue)) {
      alert("Please Input Your Amount of Money");
      return;
    }

    if (parentTotalAmount < secondInputValue) {
      alert(`${parentTotalAmount}: You Don't Have Enough Money, Try Again`);
      return;
    }

    if (secondInputValue < 0) {
      alert("Are You Wrong, Please Try Again");
      return;
    }

    // Input Validation Check End


    // Second Input Calculation By Website Start

    const secondTotal = secondInputValue + secondInnerTextValue;

    const secondDeduction = parentTotalAmount - secondInputValue;

    document.getElementById("second-innerText").innerText = secondTotal;

    document.getElementById("total-amount").innerText = secondDeduction;

    // Second Input Calculation By Website End



    // Add Money Transaction History Button Start

    const parentDiv = document.getElementById("add-parent-div");

    const secondInput = document.getElementById("second-input-text").innerText;

    const dateFun = new Date();


    const childDiv = document.createElement("div");
    childDiv.classList.add("container", "mx-auto", "border", "p-6", "rounded-lg", "mb-4");

    childDiv.innerHTML = `    
        <p class="pb-3 font-bold">${secondInputValue} ${secondInput}</p>  
        <p class="p-1 ms-1 bg-gray-100 rounded-lg">${dateFun}</p>    
    `;

    parentDiv.appendChild(childDiv);

    // Add Money Transaction History Button End

  });

// Second Input Working End



// Third Input Working Start

document.getElementById("donate-btn-3")
  .addEventListener("click", function () {

    // Function Assign Argument Start

    const parentTotalAmount = getElementInnerTextValueById("total-amount");

    const thirdInputValue = getElementInputValueById("donate-input-3");

    const thirdInnerTextValue = getElementInnerTextValueById("third-innerText");

    // Function Assign Argument End


    // Input Validation Check Start

    if (isNaN(thirdInputValue)) {
      alert("Please Input Your Amount of Money");
      return;
    }

    if (parentTotalAmount < thirdInputValue) {
      alert(`${parentTotalAmount}: You Don't Have Enough Money, Try Again`);
      return;
    }

    if (thirdInputValue < 0) {
      alert("Are You Wrong, Please Try Again");
      return;
    }

    // Input Validation Check End


    // Third Input Calculation By Website Start

    const thirdTotal = thirdInputValue + thirdInnerTextValue;

    const thirdDeduction = parentTotalAmount - thirdInputValue;

    document.getElementById("third-innerText").innerText = thirdTotal;

    document.getElementById("total-amount").innerText = thirdDeduction;

    // Third Input Calculation By Website End




    // Add Money Transaction History Button Start

    const parentDiv = document.getElementById("add-parent-div");

    const thirdInput = document.getElementById("third-input-text").innerText;

    const dateFun = new Date();


    const childDiv = document.createElement("div");
    childDiv.classList.add("container", "mx-auto", "border", "p-6", "rounded-lg", "mb-4");

    childDiv.innerHTML = `    
        <p class="pb-3 font-bold">${thirdInputValue} ${thirdInput}</p>  
        <p class="p-1 ms-1 bg-gray-100 rounded-lg">${dateFun}</p>    
    `;

    parentDiv.appendChild(childDiv);

    // Add Money Transaction History Button End

  });

// Third Input Working End



// Donation & History Button Working Start


// Donation Button Start

document.getElementById("donation-id")
  .addEventListener("click", function () {

    hideShowButton("hero-section")

    // Donation Button Color Change Start

    // Color Add Button Start

    // let donationButtonColor = document.getElementById("donation-id")
    // donationButtonColor.classList.add("bg-[#B4F461]", "hover:bg-[#B4F461]");

    clickButtonColorAddFun("donation-id")

    // Color Add Button End


    // Color Remove Button Start

    // let historyButtonColor = document.getElementById("history-id")
    // historyButtonColor.classList.remove("bg-[#B4F461]", "hover:bg-[#B4F461]");
    // historyButtonColor.classList.add("border-gray-200", "btn");

    clickButtonColorRemoveFun("history-id")

    // Color Remove Button End

    // Donation Button Color Change End

  });

// Donation Button End


// History Button Start

document.getElementById("history-id")
  .addEventListener("click", function () {

    hideShowButton("history-section")

    // History Button Color Change Start

    // Color Add Button Start

    // let historyButtonColor = document.getElementById("history-id")
    // historyButtonColor.classList.add("bg-[#B4F461]", "hover:bg-[#B4F461]");

    clickButtonColorAddFun("history-id")

    // Color Add Button End


    // Color Remove Button Start

    // let donationButtonColor = document.getElementById("donation-id")
    // donationButtonColor.classList.remove("bg-[#B4F461]", "hover:bg-[#B4F461]");
    // donationButtonColor.classList.add("border-gray-200", "btn");

    clickButtonColorRemoveFun("donation-id")

    // Color Remove Button End

    // History Button Color Change Start

  });

// History Button End


// Donation & History Button Working End