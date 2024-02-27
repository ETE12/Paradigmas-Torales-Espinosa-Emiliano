function getMyIpHttp() {
 var request = new XMLHttpRequest()

 // Open a new connection, using the GET request on the URL endpoint
 
 request.open('GET', 'https://api.ipify.org?format.json', true)
 request.onload = function (data) {
  console.log(data);
  console.log(data.target.response);
 }

 //Send request

request.send()
}

function getMyIpFetch(){
 // Create request object
  //var request = new Request('https://randomuser.me/api/?results=3',
  var request = new Request('https://api.ipify.org?format.json',
   {
     method: 'GET',
     headers: new Headers({ 'Content-Type': 'application/json'})
    });

 //Now Use It!

 fetch(request)
 .then(function(response) {
   console.log(response);
   response.json().then(function(respjson){
    console.log (respjson);
    console.log (respjson.results);
  });
 })
 .catch(err => {
        console.log(err);
  });
}


