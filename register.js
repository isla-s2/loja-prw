const form = document.getElementById('reg_form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const mail = document.getElementById('mail').value;
  const user = document.getElementById('user').value;
  const passw = document.getElementById('passw').value;
  const cpf = document.getElementById('cpf').value;
  const bday = document.getElementById('bday').value;
  if (!name) {
    alert('teste');
    document.getElementById('al_name').innerHTML = 'Campo obrigatório';
  } else if (!mail) {
    document.getElementById('al_mail').innerHTML = 'Campo obrigatório';
  } else if (!user) {
    document.getElementById('al_user').innerHTML = 'Campo obrigatório';
  } else if (!passw) {
    document.getElementById('al_passw').innerHTML = 'Campo obrigatório';
  } else if (!cpf) {
    document.getElementById('al_cpf').innerHTML = 'Campo obrigatório';
  } else if (!mail) {
    document.getElementById('al_bday').innerHTML = 'Campo obrigatório';
  } else {
    // Form is valid, submit the form
    document.getElementById('al_name').innerHTML = '';
    document.getElementById('al_mail').innerHTML = '';
    document.getElementById('al_user').innerHTML = '';
    document.getElementById('al_passw').innerHTML = '';
    document.getElementById('al_cpf').innerHTML = '';
    document.getElementById('al_bday').innerHTML = '';
    form.submit();
  }
});
