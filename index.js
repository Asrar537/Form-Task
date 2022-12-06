let users = []
var nametxt = document.getElementById('name');
var dob = document.getElementById('date');
var startdate = document.getElementById('startdate');
var enddate = document.getElementById('enddate');
var form = document.getElementById('btn');
var letters = /^[A-Za-z\s]*$/;
document.getElementById('date').max = new Date()
  .toISOString()
  .split('T')[0];

let addUser = (ev) => {
  ev.preventDefault() //to stop the form submitting

  let user = {
    id: Date.now(),
    name: document.getElementById('name').value,
    dob: document.getElementById('date').value,
    startdate: document.getElementById('startdate').value,
    enddate: document.getElementById('enddate').value,
    imageUrl: document.getElementById('file-input').
    value,
  }
  if (startdate.value < enddate.value || nametxt.value.match(letters)) {
    users.push(user)
  document.forms[0].reset()
    // document.forms[0].reset()
  }
  
 else{ 
    alert('End date should be greater then start date '+'\n'+ 'Name should contain only letters');

 }

  let pre = document.querySelector('#msg pre')
  pre.textContent = '\n' + JSON.stringify(users, '\t', 2)

  localStorage.setItem('List', JSON.stringify(users))
}

form.addEventListener('click', addUser);



