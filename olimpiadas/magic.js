document.getElementById("resultados").value = new Date (new Date((new Date().setDate(new Date().getDate() + (7- new Date().getDay() % 7) ))).setHours(19,0,0)).toISOString().slice(0,-5)
document.getElementById("birthday").value = new Date (new Date((new Date().setDate(new Date().getDate() + (-1 +(7- new Date().getDay()) % 7) ))).setHours(20,0,0)).toISOString().slice(0,-5)
/*---------------------------------------------------------------------*/

