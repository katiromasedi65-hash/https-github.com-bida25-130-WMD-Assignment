
console.log("JavaScript is connected!");
function startSearch() {
    
    let menu = document.getElementById("serviceSelect");
    
    
    let choice = menu.value;
 
    
    if (choice === "") {
        alert("Please let Ellah know which service you need");
    } 
    

    else
        
        window.location.href = "services.html";
    }

function confirmBooking(event) {
  alert("Booking Successfully Submitted😊");
}

function sendContactMessage(event){
event.preventDefault();
  let name = document.querySelector('input[name="name"]').value;
  let phone = document.querySelector('input[name="phone"]').value;
  let message = document.querySelector('textarea[name="message"]').value;

  alert("Thank you for your feedback/enquiries");
}
    
    



const acc = document.getElementsByClassName("faq-question");
 
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    
    this.parentElement.classList.toggle("active");
  });
}


window.addEventListener("load", () => {
  speechSynthesis.getVoices();
});

