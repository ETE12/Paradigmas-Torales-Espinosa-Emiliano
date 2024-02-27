function getMyIpHttp() {
 var request = new XMLHttpRequest()

 request.open('GET', 'https://digimon-api.vercel.app/api/digimon', true)
 request.onload = function (data) {
  console.log(data);
  console.log(data.target.response);
 }

request.send()
}

function getMyIpFetch(){
  var request = new Request('https://digimon-api.vercel.app/api/digimon/name/agumon',
   {
     method: 'GET',
  headers: new Headers({ 'Content-Type': 'application/json'})
    });


   fetch(request)
   .then(function(response) {
      console.log(response);
      response.json().then(function(respjson){	      
        console.log (respjson[0]);
  });
 })
 .catch(err => {
        console.log(err);
  });
}

function getMyIpCDN() {
 $.getJSON("https://digimon-api.vercel.app/api/digimon",
   function(json) {
     console.log(json);
	   $('#resultado').text(JSON.stringify(json));
       }
      );
}

function getMyIpDataCDN(){
  $.getJSON("https://digimon-api.vercel.app/api/digimon/name/agumon",
    function(json) {
     console.log(json[0]);
    }
  );
}


function getMyIpLocal() {
 $.getJSON("https://digimon-api.vercel.app/api/digimon",
   function(json) {
     console.log(json);
	     $('#resultado').text(JSON.stringify(json));

       }
      );
}

function getMyDataLocal(){
  $.getJSON("https://digimon-api.vercel.app/api/digimon/name/agumon",
    function(json) {
     console.log(json[0]);
    }
  );
}


