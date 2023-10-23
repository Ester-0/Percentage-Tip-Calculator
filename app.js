// ¿En tu páis de origen es normal dejar propina?

const calcButton = document.querySelector("#calculate");

calcButton.addEventListener('click', function () {
    const billAmount = +document.querySelector("#bill-amount").value;
    const percentageTip = +document.querySelector("#percentage-tip").value;

    const tipAmount = billAmount * percentageTip / 100;
    const total = billAmount + tipAmount;

    document.querySelector("#tip-amount").value = tipAmount;
    document.querySelector("#total").value = total;

});
