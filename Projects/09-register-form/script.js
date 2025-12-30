function checkData() {
  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let pwd = document.getElementById('pwd').value;
  let confirmPwd = document.getElementById('pwd-confirm').value;

  let usernamePattern = /^[A-Za-z_]+$/;
  let pwdPattern = /^[A-Za-z0-9@]+$/;
  let emailPattern = /^[A-Za-z0-9]+@lpu\.in$/;

  if (!usernamePattern.test(username)) {
    alert('Invalid Username')
    return false;
  }

  if (!emailPattern.test(email)) {
    alert('Invalid Email')
    return false;
  }

  if (!pwdPattern.test(pwd)) {
    alert('Invalid Password')
    return false;
  }

  if (pwd.length<8){
    alert('Password must be atleast 8 characters')
    return false;
  }

  if (pwd!==confirmPwd){
    alert('Password didn\'t match')
    return false;
  }

  alert("Registered Successfully!");
      return true;
}