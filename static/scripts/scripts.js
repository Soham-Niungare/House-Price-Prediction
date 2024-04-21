function form_handler(event) {
    event.preventDefault();
  }
  function send_data(event) {
    document.querySelector("form").addEventListener("submit", form_handler);
    var fd = new FormData(document.querySelector("form"));
    console.log(fd);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/predict", true);
    document.getElementById("prediction").innerHTML =
      "Wait Predicting Price";
    xhr.onreadystatechange = function () {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        var prediction = parseFloat(xhr.responseText).toLocaleString();
        document.getElementById("prediction").innerHTML =
          "Prediction: ₹" + prediction;
      }
    };
    xhr.onload = function () {};
    xhr.send(fd);
  }