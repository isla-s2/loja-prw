const form = document.getElementById('login_form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('user').value;
  const email = document.getElementById('passw').value;
  if (!name || !email) {
    alert('É necessário digitar usuário e senha para prosseguir');
  } else {
    // Form is valid, submit the form
    form.submit();
  }
});
