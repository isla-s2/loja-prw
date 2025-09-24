const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  if (!name || !email) {
    alert('Please fill in all fields');
  } else {
    // Form is valid, submit the form
    form.submit();
  }
});
