// Vamos começar a brincadeira Em Si

var hóspedes = [
  { nome: 'Ruggeri', suíte: 'Simples', dados: null},
  { nome: 'Otello', suíte: 'Master', dados: null },
],
	db

var request =  window.indexedDB.open("oteloDB", 1);

request.onupgradeneeded = function(event) {
  db = event.target.result
  var objectStore = db.createObjectStore("hospedes", { autoIncrement: true });

  // define what data items the objectStore will contain

  objectStore.createIndex("nome", "nome", { unique: false });
  objectStore.createIndex("suite", "suite", { unique: false });
}

request.onsuccess = function(event){	
	db = event.target.result
	if(! localStorage["tabelaPreenchida"]) {
		var transaction = db.transaction(["hospedes"], "readwrite")
	 	var objectStore = transaction.objectStore("hospedes")
	  	hóspedes.forEach(function(hospede){
	  		var objectStoreRequest = objectStore.add(hospede)		
	  	})
	  	
	  	
	  	localStorage["tabelaPreenchida"] = true
	}
}

function displayData() {
  var transaction = db.transaction(['hospedes'], "readonly");
  var objectStore = transaction.objectStore('hóspedes');

  objectStore.openCursor().onsuccess = function(event) {
    var cursor = event.target.result;
    var list = document.createElement('ul');
     document.getElementsByClassName('right')[0].appendChild(list)
    
    if(cursor) {
      var listItem = document.createElement('li');
      listItem.innerHTML = cursor.value.suite + " " + cursor.value.nome
      document.getElementsByTagName('ul')[0].appendChild(listItem)	  

      cursor.continue();
    } else {
      console.log('Entries all displayed.');
    }
  }  
}

