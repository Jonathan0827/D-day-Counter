var http = require("http");
var url = require("url");
var qs = require("querystring");
const { count } = require("console");
var ddayjs = function ddayjs() {
	const Year = document.getElementById("year").value;
	const Mon = document.getElementById("mon").value;
	const Day = document.getElementById("day").value;
	const Hour = document.getElementById("hour").value;
	const Min = document.getElementById("min").value;
	const Sec = document.getElementById("sec").value;
	const Title = document.getElementById("title").value;
	var dday = new Date(
		`${Mon} ${Day}, ${Year}, ${Hour}:${Min}:${Sec}`
	).getTime();
	console.log(dday);
	setInterval(function () {
		var today = new Date().getTime();
		var gap = dday - today;
		var d = Math.floor(gap / (1000 * 60 * 60 * 24));
		var h = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) - 1);
		var m = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60) - 1);
		var s = Math.ceil((gap % (1000 * 60)) / 1000 - 1);
		if (gap <= 0) {
			document.getElementById("count").innerHTML =
				"<h2>No D-day to view.";
		} else {
			document.getElementById(
				"count"
			).innerHTML = `<h2>${d} days ${h} hours ${m} minutes ${s} seconds left untill ${Title}`;
		}
	}, 1);
};
const css = `/* MVP.css v1.8 - https://github.com/andybrewer/mvp */
.fade-in {
	display: inline-block;
	animation: fadein 1s;
	-moz-animation: fadein 1s; /* Firefox */
	-webkit-animation: fadein 1s; /* Safari and Chrome */
	-o-animation: fadein 1s; /* Opera */
}
html {
	scroll-behavior: smooth;
}
@keyframes fadein {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
@-moz-keyframes fadein {
	/* Firefox */
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
@-webkit-keyframes fadein {
	/* Safari and Chrome */
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
@-o-keyframes fadein {
	/* Opera */
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
progress {
	-webkit-appearance: none;
	appearance: none;
	position: relative;
	width: 70%;
	height: 20px;
	background-color: #eee;
	border-radius: 5px;
	overflow: hidden;
}
:root {
	--active-brightness: 0.85;
	--border-radius: 5px;
	--box-shadow: 2px 2px 10px;
	--color: #118bee;
	--color-accent: #118bee15;
	--color-bg: #fff;
	--color-bg-secondary: #e9e9e9;
	--color-link: #118bee;
	--color-secondary: #920de9;
	--color-secondary-accent: #920de90b;
	--color-shadow: #f4f4f4;
	--color-table: #118bee;
	--color-text: #000;
	--color-text-secondary: #999;
	--font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	--hover-brightness: 1.2;
	--justify-important: center;
	--justify-normal: left;
	--line-height: 1.5;
	--width-card: 285px;
	--width-card-medium: 460px;
	--width-card-wide: 800px;
	--width-content: 1080px;
}

@media (prefers-color-scheme: dark) {
	:root {
		--color: #0097fc;
		--color-accent: #0097fc4f;
		--color-bg: #333;
		--color-bg-secondary: #555;
		--color-link: #0097fc;
		--color-secondary: #e20de9;
		--color-secondary-accent: #e20de94f;
		--color-shadow: #bbbbbb20;
		--color-table: #0097fc;
		--color-text: #f7f7f7;
		--color-text-secondary: #aaa;
	}
}

/* Layout */
article aside {
	background: var(--color-secondary-accent);
	border-left: 4px solid var(--color-secondary);
	padding: 0.01rem 0.8rem;
}

body {
	background: var(--color-bg);
	color: var(--color-text);
	font-family: var(--font-family);
	line-height: var(--line-height);
	margin: 0;
	overflow-x: hidden;
	padding: 0;
}

footer,
header,
main {
	margin: 0 auto;
	max-width: var(--width-content);
	padding: 3rem 1rem;
}

hr {
	background-color: var(--color-bg-secondary);
	border: none;
	height: 1px;
	margin: 4rem 0;
	width: 100%;
}

section {
	display: flex;
	flex-wrap: wrap;
	justify-content: var(--justify-important);
}

section img,
article img {
	max-width: 100%;
}

section pre {
	overflow: auto;
}

section aside {
	border: 1px solid var(--color-bg-secondary);
	border-radius: var(--border-radius);
	box-shadow: var(--box-shadow) var(--color-shadow);
	margin: 1rem;
	padding: 1.25rem;
	width: var(--width-card);
}

section aside:hover {
	box-shadow: var(--box-shadow) var(--color-bg-secondary);
}

[hidden] {
	display: none;
}

/* Headers */
article header,
div header,
main header {
	padding-top: 0;
}

header {
	text-align: var(--justify-important);
}

header a b,
header a em,
header a i,
header a strong {
	margin-left: 0.5rem;
	margin-right: 0.5rem;
}

header nav img {
	margin: 1rem 0;
}

section header {
	padding-top: 0;
	width: 100%;
}

/* Nav */
nav {
	align-items: center;
	display: flex;
	font-weight: bold;
	justify-content: space-between;
	margin-bottom: 7rem;
}

nav ul {
	list-style: none;
	padding: 0;
}

nav ul li {
	display: inline-block;
	margin: 0 0.5rem;
	position: relative;
	text-align: left;
}

/* Nav Dropdown */
nav ul li:hover ul {
	display: block;
}

nav ul li ul {
	background: var(--color-bg);
	border: 1px solid var(--color-bg-secondary);
	border-radius: var(--border-radius);
	box-shadow: var(--box-shadow) var(--color-shadow);
	display: none;
	height: auto;
	left: -2px;
	padding: 0.5rem 1rem;
	position: absolute;
	top: 1.7rem;
	white-space: nowrap;
	width: auto;
	z-index: 1;
}

nav ul li ul::before {
	/* fill gap above to make mousing over them easier */
	content: "";
	position: absolute;
	left: 0;
	right: 0;
	top: -0.5rem;
	height: 0.5rem;
}

nav ul li ul li,
nav ul li ul li a {
	display: block;
}

/* Typography */
code,
samp {
	background-color: var(--color-accent);
	border-radius: var(--border-radius);
	color: var(--color-text);
	display: inline-block;
	margin: 0 0.1rem;
	padding: 0 0.5rem;
}

details {
	margin: 1.3rem 0;
}

details summary {
	font-weight: bold;
	cursor: pointer;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	line-height: var(--line-height);
}

mark {
	padding: 0.1rem;
}

ol li,
ul li {
	padding: 0.2rem 0;
}

p {
	margin: 0.75rem 0;
	padding: 0;
	width: 100%;
}

pre {
	margin: 1rem 0;
	max-width: var(--width-card-wide);
	padding: 1rem 0;
}

pre code,
pre samp {
	display: block;
	max-width: var(--width-card-wide);
	padding: 0.5rem 2rem;
	white-space: pre-wrap;
}

small {
	color: var(--color-text-secondary);
}

sup {
	background-color: var(--color-secondary);
	border-radius: var(--border-radius);
	color: var(--color-bg);
	font-size: xx-small;
	font-weight: bold;
	margin: 0.2rem;
	padding: 0.2rem 0.3rem;
	position: relative;
	top: -2px;
}

/* Links */
a {
	color: var(--color-link);
	display: inline-block;
	font-weight: bold;
	text-decoration: none;
}

a:active {
	filter: brightness(var(--active-brightness));
	text-decoration: underline;
}

a:hover {
	filter: brightness(var(--hover-brightness));
	text-decoration: underline;
}

a b,
a em,
a i,
a strong,
button {
	border-radius: var(--border-radius);
	display: inline-block;
	font-size: medium;
	font-weight: bold;
	line-height: var(--line-height);
	margin: 0.5rem 0;
	padding: 1rem 2rem;
}

button {
	font-family: var(--font-family);
}

button:active {
	filter: brightness(var(--active-brightness));
}

button:hover {
	cursor: pointer;
	filter: brightness(var(--hover-brightness));
}

a b,
a strong,
button {
	background-color: var(--color-link);
	border: 2px solid var(--color-link);
	color: var(--color-bg);
}

a em,
a i {
	border: 2px solid var(--color-link);
	border-radius: var(--border-radius);
	color: var(--color-link);
	display: inline-block;
	padding: 1rem 2rem;
}

article aside a {
	color: var(--color-secondary);
}

/* Images */
figure {
	margin: 0;
	padding: 0;
}

figure img {
	max-width: 100%;
}

figure figcaption {
	color: var(--color-text-secondary);
}

/* Forms */

button:disabled,
input:disabled {
	background: var(--color-bg-secondary);
	border-color: var(--color-bg-secondary);
	color: var(--color-text-secondary);
	cursor: not-allowed;
}

button[disabled]:hover {
	filter: none;
}

form {
	border: 1px solid var(--color-bg-secondary);
	border-radius: var(--border-radius);
	box-shadow: var(--box-shadow) var(--color-shadow);
	display: block;
	max-width: var(--width-card-wide);
	min-width: var(--width-card);
	padding: 1.5rem;
	text-align: var(--justify-normal);
}

form header {
	margin: 1.5rem 0;
	padding: 1.5rem 0;
}

input,
label,
select,
textarea {
	display: block;
	font-size: inherit;
	max-width: var(--width-card-wide);
}

input[type="checkbox"],
input[type="radio"] {
	display: inline-block;
}

input[type="checkbox"] + label,
input[type="radio"] + label {
	display: inline-block;
	font-weight: normal;
	position: relative;
	top: 1px;
}

input,
select,
textarea {
	border: 1px solid var(--color-bg-secondary);
	border-radius: var(--border-radius);
	margin-bottom: 1rem;
	padding: 0.4rem 0.8rem;
}

input[readonly],
textarea[readonly] {
	background-color: var(--color-bg-secondary);
}

label {
	font-weight: bold;
	margin-bottom: 0.2rem;
}

/* Tables */
table {
	border: 1px solid var(--color-bg-secondary);
	border-radius: var(--border-radius);
	border-spacing: 0;
	display: inline-block;
	max-width: 100%;
	overflow-x: auto;
	padding: 0;
	white-space: nowrap;
}

table td,
table th,
table tr {
	padding: 0.4rem 0.8rem;
	text-align: var(--justify-important);
}

table thead {
	background-color: var(--color-table);
	border-collapse: collapse;
	border-radius: var(--border-radius);
	color: var(--color-bg);
	margin: 0;
	padding: 0;
}

table thead th:first-child {
	border-top-left-radius: var(--border-radius);
}

table thead th:last-child {
	border-top-right-radius: var(--border-radius);
}

table thead th:first-child,
table tr td:first-child {
	text-align: var(--justify-normal);
}

table tr:nth-child(even) {
	background-color: var(--color-accent);
}

/* Quotes */
blockquote {
	display: block;
	font-size: x-large;
	line-height: var(--line-height);
	margin: 1rem auto;
	max-width: var(--width-card-medium);
	padding: 1.5rem 1rem;
	text-align: var(--justify-important);
}

blockquote footer {
	color: var(--color-text-secondary);
	display: block;
	font-size: small;
	line-height: var(--line-height);
	padding: 1.5rem 0;
}
`;
var Template = `<!DOCTYPE html>
<html lang="en">
	<head>
		<title>D-day</title>

	</head>
   <style>${css}</style>
	<body>
		<header>
			<h1>D-day</h1>
            <h1>Month must be written as text</h1>
            <h1>Hour must be written as 24 Hours Form</h1>
            <section>
            <input id="title" type="text" placeholder="Title ex: Christmas">
            <input id="year" type="text" placeholder="Year ex: 2022">
            <input id="mon" type="text" placeholder="Month ex: December">
            <input id="day" type="text" placeholder="Date ex: 25">
            <input id="hour" type="text" placeholder="Hour ex: 10">
            <input id="min" type="text" placeholder="Minute ex: 09">
            <input id="sec" type="text" placeholder="Second ex: 30">
            </section>
            <h1><button onclick="ddayjs()">Calculate</button></h1>
            <div id="count"></div>
		</header>
        <script>${ddayjs}</script>
	</body>
</html>
`;
var app = http.createServer(function (request, response) {
	var _url = request.url;
	var queryData = url.parse(_url, true).query;
	var pathname = url.parse(_url, true).pathname;
	console.log(pathname);
	if (pathname === "/") {
		if (queryData.id === undefined) {
			response.writeHead(200);
			response.end(Template);
		} else {
		}
	} else if (pathname === "/create") {
		fs.readdir("./data", function (error, filelist) {
			var title = "create";
			var List = Template.list(filelist);
			var template = Template.HTML(
				title,
				List,
				`
			<form action="/update_process" method="post">
			  <p><input type="text" name="title" placeholder="title"></p>
			  <p>
				<textarea name="description" placeholder="description"></textarea>
			  </p>
			  <p>
				<input type="submit">
			  </p>
			</form>
		  `,
				``,
				Template.navbar(filelist)
			);
			response.writeHead(200);
			response.end(template);
		});
	} else {
		response.writeHead(404);
		response.end(`
		<!doctype html>
		<html>
		<head>
		  <title>404-Not Found</title>
		  <meta charset="utf-8">
		</head>
		<style>
		${css}
		</style>
		<body>
		<header>
		  <h1>404 Not Found!</h1>
		  <a href="/"><h1><button>Go Home</button></h1></a>
		  </header>
		</body>
		</html>
		`);
	}
});
app.listen(3000);
