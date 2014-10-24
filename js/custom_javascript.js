  <script>
   function checkPost(){

post = document.getElementById("txtarea").value;
	if(post == ""){
		alert("Please Enter something to post...");
		}

		else
			document.getElementById("here").innerHTML += "<blockquote style="background-color:green">
					<strong>Each moment of ur life is a picture</strong>
                  post
				<span class="glyphicon glyphicon-pushpin"></span> <input type="button" class="btn btn-success" value="Read More>>>"></input></br>
				 <strong style="color:navy">A.Arnold</strong>
				</blockquote>";
   }
    </script>