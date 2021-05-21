 // all this code was coopied directly from the Emailjs website. https://www.emailjs.com/docs/tutorial/creating-contact-form/
 
 window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // generate a five digit number for the contact_number variable
                this.contact_number.value = Math.random() * 100000 | 0;
                // these IDs from the previous steps
                emailjs.sendForm('service_w5ucbmd', 'template_oeaclel', this)
                    .then(function() {
                        console.log('SUCCESS!');
                        $('#email-outcome').text('sent!')
                    }, function(error) {
                        console.log('FAILED...', error);
                        $('#email-outcome').text('FAILED...', error);
                    });
            });
        }