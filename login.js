const form = document.getElementById('login_form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('user').value;
  const passw = document.getElementById('passw').value;
  if (!name || !passw) {
    document.getElementById('al_login').innerHTML = 'É necessário digitar usuário e senha para prosseguir';
  } else {
    // Form is valid, submit the form
    document.getElementById('al_login').innerHTML = '';
    form.submit();
  }
});
