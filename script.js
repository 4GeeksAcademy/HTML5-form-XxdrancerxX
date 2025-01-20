window.onload = function () {
    const dialog = document.querySelector('.pops-out'); // Error message box
    const form = document.querySelector('form'); // The form element
    const fields = document.querySelectorAll('input, textarea, select'); // All form inputs
    const sendButton = document.querySelector('#Send-form'); // The send button
  
    // Initially hide the error message
    dialog.classList.add('d-none');
  
    // Add event listener for the send button
    sendButton.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the form from submitting
  
      let hasError = false;
  
      // Check each field for empty values
      fields.forEach(function (field) {
        if (!field.value.trim()) {
          hasError = true;
          field.style.backgroundColor = '#f8d7da'; // Highlight invalid fields in red
        } else {
          field.style.backgroundColor = ''; // Reset background color for valid fields
        }
      });
  
      // Show or hide the error message based on validation
      if (hasError) {
        dialog.classList.remove('d-none'); // Show error message
        dialog.textContent = 'Some Fields are missing'; // Customize the error message
      } else {
        dialog.classList.add('d-none'); // Hide error message if no errors
        alert('Form submitted successfully!'); // Show a success message
        form.reset(); // Optionally reset the form
      }
    });
  };
  