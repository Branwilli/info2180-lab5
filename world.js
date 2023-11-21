/*function starter () {
    var SearchButton = document.getElementById("lookup");
    var CitiesButton = document.getElementById("cities");
    var query = document.getElementById('country').value;
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
}*/

$(document).ready(function() {

    $("form").submit(function(e) {
        e.preventDefault();
        var country = document.getElementById("lookup");
        $(country).click(function(){
            rawInput = document.getElementById("country").value;
            vari = rawInput.replace(/[^a-z0-9\s]/gi, '')
            res=document.querySelector("#result");
                
            
            fetch('http://localhost/info2180-lab5/world.php'+'?country='+vari)
                .then(function(responseText){
                    if(responseText.ok){
                        return(responseText.text());
                    }else{
                        alert("Error.");
                        Promise.reject();
                        console.log("Failed.")
                    } 
                })
                .then(function(d){
                    console.log(d);
                        res.innerHTML=d;
                    })
                });
            

        var cities = document.getElementById("cities");
        $(cities).click(function(){
            rawInput = document.getElementById("country").value;
            vari = rawInput.replace(/[^a-z0-9\s]/gi, '');            
            res=document.querySelector("#result");
            fetch('http://localhost/info2180-lab5/world.php'+'?country='+vari+'&context=cities')
                .then(function(responseText){
                    if(responseText.ok){
                        return(responseText.text());
                    }else{
                        alert("Error.");
                        Promise.reject();
                        console.log("Failed.")
                    } 
                })
                .then(function(d){
                    console.log(d);
                        res.innerHTML=d;
                    })
                });
            })
    
});