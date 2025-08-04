
// Initialize EmailJS (replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key)
document.addEventListener('DOMContentLoaded', function() {
  if (typeof emailjs !== 'undefined') {
    emailjs.init('YOUR_PUBLIC_KEY'); // <-- Replace with your actual EmailJS public key
  }

  var form = document.getElementById('contactForm');
  var successMsg = document.getElementById('formSuccess');
  if(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var name = document.getElementById('name').value;
      var phone = document.getElementById('phone').value;
      var message = document.getElementById('message').value;

      // Send email via EmailJS using correct service and template IDs
      if (typeof emailjs !== 'undefined') {
        emailjs.send('service_nlp7wgn', 'template_nreugl9', {
          from_name: name,
          gmail: document.getElementById('gmail').value, // Added line for Gmail
          phone: phone,
          message: message
        })
        .then(function(response) {
          form.reset();
          successMsg.classList.remove('hidden');
          setTimeout(function() {
            successMsg.classList.add('hidden');
          }, 4000);
        }, function(error) {
          alert('Failed to send message. Please try again later.');
        });
      } else {
        alert('EmailJS SDK not loaded.');
      }
    });
  }
});