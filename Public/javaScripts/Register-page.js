async function signup() {
    const fullname = document.getElementById('firstname').value + ' ' + document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
      document.getElementById('message').innerText = 'Passwords do not match';
      return;
    }

    const userInfo = {
      fullname,
      email,
      password
    };

    try {
      const response = await fetch('/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        window.location.href = '/login';
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  }

 
  function login() {
    window.location.href = '/login';
  }
 
 