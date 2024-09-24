// const bdtCoentEl = document.getElementById('bdt-coent')
// const coindAddEl = document.getElementById('coind-add')
// const selectedCoindEl = document.getElementById('selected-coind')
// const inputBtnEl = document.getElementById('input-btn')
// const GetBtnEl = document.getElementById('Get-btn')


// function handleselectedCoind(event) {
    
// }
// const bdtCoentValue = parseFloat(bdtCoentEl.innerText);
// const newBtnCoentValue = bdtCoentValue -100;
// bdtCoentEl.innerText = newBtnCoentValue;




document.addEventListener('DOMContentLoaded', function () {
    
    const totalAmountElement = document.getElementById('total-amount');
    const inputField = document.getElementById('input-field');
    const getStartedButton = document.getElementById('get started-button');
    const donationAmountElement = document.getElementById('donation-amount');
  
    
    let totalAmount = parseFloat(totalAmountElement.textContent);
    let currentDonationAmount = parseFloat(donationAmountElement.textContent);
  
    
    getStartedButton.addEventListener('click', function () {
      const inputValue = parseFloat(inputField.value);
  
      
      if (!isNaN(inputValue) && inputValue > 0 && inputValue <= totalAmount) {
        
        totalAmount -= inputValue;
        totalAmountElement.textContent = `${totalAmount} BDT`;
  
      
        currentDonationAmount += inputValue;
        donationAmountElement.textContent = `${currentDonationAmount} BDT`;
  
        
        inputField.value = '';
  
        
        my_modal_1.showModal();
      } else {
        alert('Please enter a valid amount that is less than or equal to the available total.');
      }
    });
  });



  // history tab functionality

  const historyBtn = document.getElementById('history-btn')
  const DonationBtn = document.getElementById('Donation-btn')
  historyBtn.addEventListener('click',function(){
    historyBtn.classList.add("bg-lime-300","font-bold");

    DonationBtn.classList.remove("bg-lime-300","font-bold");

    document.getElementById("donation-card").classList.add("hidden");


  })
  
  

  