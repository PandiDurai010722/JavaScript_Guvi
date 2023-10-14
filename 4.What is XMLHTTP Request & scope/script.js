//XMLHttpRequest

var http = new XMLHttpRequest();

http.onreadystatechange = function () {
  this.responseText;
  // console.log(this.responseText);
  // console.log(typeof(this.responseText))
  // console.log(this.readyState,this.status)
  if (this.readyState == 4 && this.status == 200) {
    // console.log("Successfull Request")
    var users = JSON.parse(this.responseText);
    console.log(users);
    console.log(typeof users);
    // console.log(JSON.stringify(users))
    // console.log(typeof(JSON.stringify(users)))
  } else {
    console.error("Cannot Connect to Server");
  }
};

http.open("GET", "https://jsonplaceholder.typicode.com/users");
http.send();

// onreadystatechange=> Defines a function to be called when the readyState property changes

// readyState=> Holds the status of the XMLHttpRequest.

// 0: Request not initialized
// 1: Server connection established
// 2: Request Received
// 3: Processing request
// 4: Request finished and response is ready

//Status 200 "OK"
// 400: "Forbidden"
// 404: "Page Not Found"
