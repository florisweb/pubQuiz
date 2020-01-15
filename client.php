<script>

	const Server = new _Server(13973);

	function _Server(_key) {
		let This = this;
		let socket = new WebSocket("ws://localhost:8080/", "pubquiz-protocol");
		this.send = socket.send;

		this.enabled = false;
		this.type = "displayer";


		socket.onopen = function(e) {
		  console.log("[open] Connection established");
		  console.log("Sending to server");
		  if (!_key) 
		  	socket.send(JSON.stringify({type: "controller"}));
		  else 
		  	socket.send(JSON.stringify({type: "displayer", key: parseInt(_key)}));
		};

		socket.onmessage = function(event) {
		  console.log(`[message] Data received from server: ${event.data}`);
		  let data = JSON.parse(event.data);
		  if (data.connectionStatus == "OK")
		  {
		  	if (data.key) 
		  	{
				This.key = data.key;
				This.type = "controller";
		  	}

		  	This.enabled = true;
		  }
		};

		socket.onclose = function(event) {
		  if (event.wasClean) {
		    console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
		  } else {
		    // e.g. server process killed or network down
		    // event.code is usually 1006 in this case
		    console.log('[close] Connection died');
		  }
		};

		socket.onerror = function(error) {
		  console.log(`[error] ${error.message}`);
		};

	}


</script>