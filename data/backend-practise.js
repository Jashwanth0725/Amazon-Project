const request = new XMLHttpRequest();

request.addEventListener('load', () => {
    console.log(request.response);
});


request.open('GET', 'https://supersimplebackend.dev');
request.send();
