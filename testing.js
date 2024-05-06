<!DOCTYPE html>
<html>

<head>
	<title>
		Add JavaScript Code inside Head Section
	</title>

	<script>
		function myFun() {
			document.getElementById("demo")
				.innerHTML = "Content changed!";
		}
	</script>
</head>

<body>
	<h2>
		Add JavaScript Code
		inside Head Section
	</h2>

	<h3 id="demo" style="color:green;">
		GeeksforGeeks
	</h3>

	<button type="button" onclick="myFun()">
		Click Here
	</button>
</body>

</html>
