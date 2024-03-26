document.addEventListener('DOMContentLoaded', function() {
  // Function to generate a random password
  function generatePassword() {
    const length = 12; // Length of the generated password
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|;:,.<>?"; // Character set for the password
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }

  // Function to save credentials
  function saveCredentials(password, url) {
    const credentials = {
      password: password,
      url: url
    };

    // Send credentials to backend API
    fetch('http://localhost:3000/api/credentials', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(response => {
      if (response.ok) {
        alert('Credentials saved successfully!');
      } else {
        alert('Error saving credentials. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
  }

  // Generate Password button click event
  document.getElementById('generate').addEventListener('click', function() {
    let passwordInput = document.getElementById('password');
    passwordInput.value = generatePassword(); // Update password input field with generated password
  });

  // Save credentials button click event
  document.getElementById('save').addEventListener('click', function() {
    let password = document.getElementById('password').value;
    let url = document.getElementById('url').value;
    saveCredentials(password, url); // Call saveCredentials function with password and URL
  });
});
