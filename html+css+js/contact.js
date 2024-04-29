document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Send the form data to Formspree using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formspree.io/f/myyrlpqv", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Form submission successful
          document.getElementById("contact-form").reset(); // Reset the form
          document.getElementById("success-message").style.display = "block"; // Show success message
        } else {
          // Form submission failed
          alert("Error: Message not sent.");
        }
      }
    };
    
    var formData = new FormData(document.getElementById("contact-form"));
    xhr.send(JSON.stringify(Object.fromEntries(formData)));
  });
  