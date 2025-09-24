
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
    document.getElementById('al_name').innerHTML = 'Campo obrigatório';
  }else{
    document.getElementById('al_name').innerHTML = '';
  } 
  if (!mail) {
    document.getElementById('al_mail').innerHTML = 'Campo obrigatório';
  }else{
    document.getElementById('al_mail').innerHTML = '';
  } 
   if (!user) {
    document.getElementById('al_user').innerHTML = 'Campo obrigatório';
  }else{
    document.getElementById('al_user').innerHTML = '';
  } 
   if (!passw) {
    document.getElementById('al_passw').innerHTML = 'Campo obrigatório';
  }else{
    document.getElementById('al_passw').innerHTML = '';
  } 
   if (!cpf) {
    document.getElementById('al_cpf').innerHTML = 'Campo obrigatório';
  }else{
    document.getElementById('al_cpf').innerHTML = '';
  } 
   if (!bday) {
    document.getElementById('al_bday').innerHTML = 'Campo obrigatório';
  }else{
    document.getElementById('al_bday').innerHTML = '';
  } 
   if (name && mail && user && passw && cpf && bday) {
    // Form is valid, submit the form
    form.submit();
  }
});
