span = document.getElementsByClassName("span1");

ok = span.length

console.log(ok);

tracker = [];


// testing to push 

for(let i = 0; i < ok; i++) {

    spanOnly = document.getElementsByClassName("span1")[i];

    spanOnly.addEventListener('mouseover', function() {

        document.getElementsByClassName("span1")[i].style.background = "none";
        document.getElementsByClassName("span1")[i].innerHTML  = "pop!";
        document.getElementsByClassName("span1")[i].style.fontSize = "40px"
        document.getElementsByClassName("span1")[i].style.color = "green";

        if(document.getElementsByClassName("span1")[i].style.background == "none") {
            
            tracker.push("pop");

        }

        

        console.log(spanOnly);

        console.log(tracker.length);

        if(tracker.length == 9) {

            document.getElementById("span").style.display = "none";
        
            document.getElementById("show").innerText = "You Have POP all the circle";     
        }
    })

}







