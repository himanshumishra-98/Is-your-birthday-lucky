const dateOfBirth = document.querySelector("#input-date");
const luckyNumber = document.querySelector("#input-lucky-number");
const chkBtn = document.querySelector("#check-button");
const outputResult = document.querySelector("#output-result");

const calculateSum = (bdate) => {
    let sum = 0;
    let Date = bdate.replaceAll("-","");
    for(let i=0; i<Date.length; i++){
        sum += Number(Date[i]);
    }
    return sum;
};

const checkIsBdayLucky = (bdaySum,noToCheck) => {
    if(bdaySum % noToCheck === 0){
        return showMessage("Congratulations! 🥳 Your Birthdate is lucky.");
    }
    showMessage("Sorry! 😔 Your Birthdate is not that lucky.");
};

const showMessage = (msg) => {
    outputResult.innerText = msg;
};

chkBtn.addEventListener("click",() => {
    const bdate = dateOfBirth.value;
    const noToCheck = luckyNumber.value;
    if(bdate && noToCheck){
        const bdaySum = calculateSum(bdate);
        checkIsBdayLucky(bdaySum,noToCheck);
    }else{
        showMessage("Please enter both the fields.")
    }
});