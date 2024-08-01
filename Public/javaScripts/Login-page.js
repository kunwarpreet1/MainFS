async function Login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const messageElement = document.getElementById('message');

  try {
      const response = await fetch('/user/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      if (response.ok) {
          window.location.href = '/profile';
      } else {
          messageElement.innerText = data.message || 'Invalid login credentials';
      }
  } catch (error) {
      console.error('Error:', error);
      messageElement.innerText = 'An error occurred. Please try again later.';
  }
}

function register() {
  window.location.href = '/register';
}

function ForgetPassword() {
  alert('Redirect to forget password page');
}
