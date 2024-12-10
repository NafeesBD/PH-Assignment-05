// Share Input Function Start

function getElementInputValueById(id) {

  const firstDonateInput = parseFloat(document.getElementById(id).value).toFixed(2);

  const finalDonateInput = Number(firstDonateInput);

  return finalDonateInput;

}

// Share Input Function End



// Share InnerText Function Start

function getElementInnerTextValueById(id) {

  const firstInnerTextValue = parseFloat(document.getElementById(id).innerText).toFixed(2);

  const finalInnerTextValue = Number(firstInnerTextValue);

  return finalInnerTextValue;

}

// Share InnerText Function End



// Share Donation & History Button Start

function hideShowButton(id) {

  document.getElementById("history-section").classList.add("hidden");
  document.getElementById("hero-section").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");

}

// Share Donation & History Button End



// Click Button Color Change Start


// Color Add Button Start

function clickButtonColorAddFun(id) {
  const colorAddButton = document.getElementById(id);
  colorAddButton.classList.add("bg-[#B4F461]", "hover:bg-[#B4F461]");
}

// Color Add Button End


// Color Remove Button Start

function clickButtonColorRemoveFun(id) {
  const colorRemoveButton = document.getElementById(id);
  colorRemoveButton.classList.remove("bg-[#B4F461]", "hover:bg-[#B4F461]");
  colorRemoveButton.classList.add("border-gray-200", "btn");
}

// Color Remove Button End


// Click Button Color Change End