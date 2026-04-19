
console.log("JavaScript is connected!");
function startSearch() {
    // 1. Get the dropdown list
    let menu = document.getElementById("serviceSelect");
    
    // 2. Get the value the user picked (e.g., "Office")
    let choice = menu.value;
 
    // 3. If they haven't picked anything
    if (choice === "") {
        alert("Please let Ellah know which service you need");
    } 
    // 4. If they DID pick something, take them to the services page
    else {
        // This is the line that makes the website move to services.html
        window.location.href = "services.html";
    }
}
function confirmBooking(event) {
  event.preventDefault();
  
  const form = event.target;
  const data = new FormData(form);
  
  fetch("https://formsubmit.co/katiromasedi65@gmail.com", {
    method: "POST",
    body: data
  }).then(() => {
    alert("Booking Successfully Submitted!");
    window.location.href = "index.html";
  });
}

const acc = document.getElementsByClassName("faq-question");
 
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class */
    this.parentElement.classList.toggle("active");
  });
}

// Pre-load voices when page opens (fixes the delay)
window.addEventListener("load", () => {
  speechSynthesis.getVoices();
});

