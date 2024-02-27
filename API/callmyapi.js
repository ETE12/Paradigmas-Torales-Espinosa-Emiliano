function getMyIpHttp() {
  var request = new XMLHttpRequest();

  request.open('GET', 'https://digimon-api.vercel.app/api/digimon', true);
  request.onload = function(data) {
    var responseData = JSON.parse(data.target.response);
    if (Array.isArray(responseData)) {
      responseData.forEach(function(digimon) {
        if (digimon.img) {
          var imgElement = document.createElement('img');
          imgElement.src = digimon.img;
          document.body.appendChild(imgElement);
        }
      });
    } else {
      console.log(responseData);
    }
  };

  request.send();
}

function getMyIpFetch(){
  var request = new Request('https://digimon-api.vercel.app/api/digimon/name/agumon', {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json'})
  });

  fetch(request)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      if (data[0].img) {
        var imgElement = document.createElement('img');
        imgElement.src = data[0].img;
        document.body.appendChild(imgElement);
      } else {
        console.log(data[0]);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
}

function getMyIpCDN() {
  $.getJSON("https://digimon-api.vercel.app/api/digimon", function(json) {
    if (Array.isArray(json)) {
      json.forEach(function(digimon) {
        if (digimon.img) {
          var imgElement = document.createElement('img');
          imgElement.src = digimon.img;
          document.body.appendChild(imgElement);
        }
      });
    } else {
      $('#resultado').text(JSON.stringify(json));
    }
  });
}

function getMyIpDataCDN(){
  $.getJSON("https://digimon-api.vercel.app/api/digimon/name/agumon", function(json) {
    if (json[0].img) {
      var imgElement = document.createElement('img');
      imgElement.src = json[0].img;
      document.body.appendChild(imgElement);
    } else {
      console.log(json[0]);
    }
  });
}

function getMyIpLocal() {
  $.getJSON("https://digimon-api.vercel.app/api/digimon", function(json) {
    if (Array.isArray(json)) {
      json.forEach(function(digimon) {
        if (digimon.img) {
          var imgElement = document.createElement('img');
          imgElement.src = digimon.img;
          document.body.appendChild(imgElement);
        }
      });
    } else {
      $('#resultado').text(JSON.stringify(json));
    }
  });
}

function getMyDataLocal(){
  $.getJSON("https://digimon-api.vercel.app/api/digimon/name/agumon", function(json) {
    if (json[0].img) {
      var imgElement = document.createElement('img');
      imgElement.src = json[0].img;
      document.body.appendChild(imgElement);
    } else {
      console.log(json[0]);
    }
  });
}


