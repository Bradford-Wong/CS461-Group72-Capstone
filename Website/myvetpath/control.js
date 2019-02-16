/*Fill the Submissions table*/

var users = ["John Doe", "Mary Moe", "Bob Boe", "Jill Foe"];
var titles = ["Cows on Farm", "Sick Sheep", "50 Birds", "Lung Sample"];
var cases = ["1210180145", "1214180215", "1228180604", "17191203"];
var dates = ["12/10/2018", "12/14/2018", "12/28/2018", "1/7/2019"];


function fillTable(){
  var table = document.getElementById('subs-table').getElementsByTagName('tbody')[0];
  for(var i = 0; i < users.length; i++){
    var row = table.insertRow(table.rows.length);
    var userCell = row.insertCell(0);
    var titleCell = row.insertCell(1);
    var caseCell = row.insertCell(2);
    var dateCell = row.insertCell(3);
    
    userCell.innerHTML = users[i];
    titleCell.innerHTML = titles[i];
    caseCell.innerHTML = cases[i];
    dateCell.innerHTML = dates[i];
  }
}


/*Change Account*/

var showemailform = document.getElementById('show-edit-email');
var showpwdform = document.getElementById('show-edit-pwd');
var canceleditemail = document.getElementById('cancel-edit-email');
var canceleditpwd = document.getElementById('cancel-edit-pwd');

showemailform.addEventListener("click", displayForm(email));
showpwdform.addEventListener("click", displayForm(pwd));
canceleditemail.addEventListener("click", hideForm(email));
canceleditpwd.addEventListener("click", hideForm(pwd));

function displayForm(formpass){
  if(formpass === "email"){
    document.getElementById('change-email-form').style.display = "block";
  }
  if(formpass === "pwd"){
    document.getElementById('change-pwd-form').style.display = "block";
  }
}

function hideForm(formhide){
  if(formhide === "email"){
    document.getElementById('change-email-form').style.display = "none";
  }
  if(formhide === "pwd"){
    document.getElementById('change-pwd-form').style.display = "none";
  }
}



