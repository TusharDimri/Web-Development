const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  //   res.end('Hello World');
  // res.end(`<h1 style="text-align:center;">Hello World</h1>`);
  res.end(
    `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript Tutorials</title>
    <style>
        #btn {
            padding: 4px;
            color: black;
            border: 2px solid black;
            background-color: rgb(165, 165, 165);
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
    <script>
        // You can write you JS here.
    </script>
</head>

<body>
    <h1 style="text-align: center;">Javascript Tutorials</h1>
    <div class="container">
        <div class="row">
            <p>This is a row inside a container</p>
        </div>
        <div id="content">
            <ul id="nav">
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </div>
    <div class="container">
        <p>This is another paragraph</p>
        <p id="para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt exercitationem dolorem est deserunt
            debitis incidunt, tempore quos iste facilis culpa at totam consectetur repudiandae. Officiis, consectetur
            repellat. Autem consectetur quo asperiores quidem ad unde fuga, nulla excepturi placeat aspernatur ipsam
            quaerat ipsum magnam qui nihil quasi et fugit cum possimus!</p>
        <button id="btn" onclick="toggleHide()">Show/Hide</button>
        <!-- hide() function will run on clicking this button -->
        <p>Time Is:- <span id="time"> </span></p>
    </div>

    <!-- Our Javascript -->
    <script>
        // You can write your JS here.
        function toggleHide() {
            let btn = document.getElementById('btn');
            let para = document.getElementById('para');
            if (para.style.display != 'none') {
                para.style.display = 'none';
            }
            else {
                para.style.display = 'block';
            }
        }

        function displayTime() {
            time = new Date();
            document.getElementById('time').innerHTML = time;
        }
        setInterval(displayTime, 1000);
    </script>

</body>

</html>
    `
  );

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// Using above lines of code, we started a server using node js.
// On typing node in the terminal we get REPL which stands fro READ, Evaluate, Print and Loop and we can exit it by typing .exit.
// On typig tab key twice inside REPL we get a list of all global variables in node js.