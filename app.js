const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const nextButton = document.querySelector("#next-button");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const changeBlock = document.querySelector("#change-block");
const cashBlock = document.querySelector("#cash-block");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

nextButton.addEventListener("click", function validateBillAmount()  {
    message.style.display = "none";
    if(billAmount.value != "" ) {
        if(billAmount.value > 0 )    {
            cashBlock.style.display = "flex";
        } else  {
            showMessage("Invalid Bill Amount");
        }
    }   else    {
        showMessage("Please Enter the Bill Amount");
    }
});
checkButton.addEventListener("click", function validateCashAmount()   {
    message.style.display = "none";
    if(billAmount.value > 0 )    {
        console.log(billAmount.value,cashGiven.value );
        if (Number(cashGiven.value) >= Number(billAmount.value))    {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            if(amountToBeReturned === 0)    {
                showMessage("Bill Amount is equal to cash amount, No change required.");
            }   else{
                calculateChange(amountToBeReturned);
            }
        } else  {
            showMessage("The cash provided should atleast be equal to the bill amount");
        }
    } else  {
        showMessage("Invalid Bill Amount");
    }
});

function calculateChange(amountToBeReturned)  {
    for(let i=0; i < availableNotes.length; i++ )   {
        const numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
    changeBlock.style.display = "flex";
}
function showMessage(innermessage)  {
    message.style.display = "block";
    message.innerText = innermessage;
}
