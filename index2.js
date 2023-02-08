let today = new Date();
const dd = today.getDate();
const mm = today.getMonth() + 1; 
const yyyy = today.getFullYear();

today = mm + '-' + dd + '-' + yyyy;
document.getElementById("date").innerHTML = "Todays date" + " : " +  today;