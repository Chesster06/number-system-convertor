function convertNumber(){

    //Get Input Value
    let number = document.getElementById("inputNumber").value;
    let fromBase = Number(document.getElementById("fromBase"). value);
    let toBase = Number(document.getElementById("toBase"). value);

    //Convert base number to Decimal
    let decimalNumber = parseInt(number, fromBase);

    // Validation
    if (isNaN(decimalNumber)) {
        document.getElementById("result").value = "Invalid number";
        return;
    }

    //Converter
    let result = decimalNumber.toString(toBase);

    //Result
    document.getElementById("result").value = result;
}