
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
 
    alert("Booking Successfully Submitted!");
 
    window.location.href = "index.html";
}
function sendContactMessage(event) {
    event.preventDefault();
 
    alert("Message Successfully Submitted.Thank you for your feedback😊!");
 
    window.location.href = "index.html";
}

const acc = document.getElementsByClassName("faq-question");
 
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class */
    this.parentElement.classList.toggle("active");
  });
}

function readPage() {
  const text = document.querySelector("main").innerText;
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  speech.rate=1;
  window.speechSynthesis.speak(speech);
}

function pauseReading() {
  window.speechSynthesis.pause();
}
 
function resumeReading() {
  window.speechSynthesis.resume();
}
 
function stopReading() {
  window.speechSynthesis.cancel();
}

 