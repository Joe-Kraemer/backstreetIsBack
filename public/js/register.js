const registerFormHandler = async (event) => {

    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const email = document.querySelector('#email-register').value.trim(); //input id email-register
    const password = document.querySelector('#password-register').value.trim(); //input id password -register
  
    if (email && password) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document
    .querySelector('.register-form') //class register-form
    .addEventListener('submit', registerFormHandler);

