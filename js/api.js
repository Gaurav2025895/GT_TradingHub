
console.log('Script is running!');

document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const submitButton = document.querySelector('.btn.btn-sm.btn-dark');

    // Add click event listener to the button
    submitButton.addEventListener('click', function() {
        // Get input values
        const name = document.getElementById('name').value;
        const phone = document.getElementById('Phone').value;
        const whatsappNo = document.getElementById('Whatsapp_no').value;
        const email = document.getElementById('email').value;
        const concernDescription = document.getElementById('disc').value;

        // Create data object
        const data = {
            name: name,
            phoneNumber: phone,
            whatsappNumber: whatsappNo,
            email: email,
            concernDescription: concernDescription
        };

        // Make POST request to API
        fetch('https://gt-sf6c.onrender.com/contacts/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            // Handle response if needed
            console.log('Contact added:', data);
            // Optionally, display a success message to the user
            alert('Contact added successfully!');
        })
        .catch(error => {
            // Handle error if needed
            console.error('Error adding contact:', error);
            // Optionally, display an error message to the user
            alert('An error occurred while adding the contact. Please try again later.');
        });
    });
});
