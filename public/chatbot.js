<html>
    <head>
        <script>
            know = {
                "hello" : "hi",
                "how are you?" : "good",
                "ok" : ":)"
            };
            function talk() {
                var user = document.getElementById("userBox").value;
                document.getElementById("userBox").value = "";
                document.getElementById("chatLog").innerHTML += user+"<br>";
                if (user in know) {
                    document.getElementById("chatLog").innerHTML += know[user]+"<br>";
                } else {
                    document.getElementById("chatLog").innerHTML += "I don't understand...<br>";
                }
            } 
        </script>
    </head>
    <body>
        <p id="chatLog">- - C H A T - -<br></p>
        <input id="userBox" type="text" onkeydown="if (event.keyCode == 13) {talk()}">
    </body>
</html>