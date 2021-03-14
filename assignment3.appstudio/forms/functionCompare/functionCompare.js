let password1=prompt('First password')
let password2=prompt('Second password')
let comparasion=pass1.localeCompare(password2)

if (comparasion){
  console.log('The passwords are not the same')
}
else {
  console.log('The passwords are the same')
}