

document.getElementById('get started-button').addEventListener('click', function() {
 
  let donationInput = document.getElementById('input-field').value;


  let donationAmount = parseInt(donationInput);

  
  let totalAmountElement = document.getElementById('total-amount');
  let totalAmount = parseInt(totalAmountElement.innerText.split(' ')[0]);

  let donationAmountElement = document.getElementById('donation-amount');
  let currentDonationAmount = parseInt(donationAmountElement.innerText.split(' ')[0]);

  
  let updatedTotalAmount = totalAmount - donationAmount;
  totalAmountElement.innerText = `${updatedTotalAmount} BDT`;

  
  let updatedDonationAmount = currentDonationAmount + donationAmount;
  donationAmountElement.innerText = `${updatedDonationAmount} BDT`;

 
  document.getElementById('my_modal_1').showModal();
});

document.getElementById('close-btn').addEventListener('click', function() {
  
  document.getElementById('my_modal_1').close();
});

// history tab functionality

  const historyBtn = document.getElementById('history-btn')
   const DonationBtn = document.getElementById('Donation-btn')
   historyBtn.addEventListener('click',function(){
     historyBtn.classList.add("bg-lime-300","font-bold");

    DonationBtn.classList.remove("bg-lime-300","font-bold");
     document.getElementById("donation-card").classList.add("hidden");


  })




  
  

  