function starter () {
    var SearchButton = document.getElementById("lookup");
    var CitiesButton = document.getElementById("cities");
    var query = document.getElementById('country').ariaValueMax;
    var output = document.getElementById('result');

    SearchButton.addEventListener('click', handleClick)

    function handleClick(Event) {
        var httpRequest = new XMLHttpRequest();
        Event.preventDefault();
        var URL = "http://localhost/info2180-lab5/world.php"+"?country="+query;
        httpRequest.onreadystatechange = fetchData;
        httpRequest.open("GET",URL,true);
        httpRequest.send();
    }

    function fetchData () {
        if (httpRequest.readyState === XMLHttpRequest.DONE){
            if(httpRequest.status === 200){
                return(output.innerHTML = responseText);
            } 
            else {
                alert("Error.");
                console.log("Failed.")
            }
        }
    }

    CitiesButton.addEventListener('click', handleAction)

    function handleAction(d){
        var httpRequest = new XMLHttpRequest();
        d.preventDefault();
        var URL = "http://localhost/info2180-lab5/world.php"+"?country"+query+"&context=cities";
        httpRequest.onreadystatechange = fetchData;
        httpRequest.open("GET",URL,true);
        httpRequest.send();
    }
}