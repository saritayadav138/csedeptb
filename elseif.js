function age()
        {
            if(document.getElementById("t1").value>=18)
        {
            document.getElementById("res").innerHTML="eligible for vote";
        }
        else{
            document.getElementById("res").innerHTML="not elegible for vote";

        }
    }