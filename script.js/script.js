var button = document.getElementById('button')
button.addEventListener('click', function(){
    var marks = document.getElementById('marks').value
    var output = document.getElementById('console')
    if(marks==''){
       output.innerHTML="Try Again";
    }
    else if(marks<=39){
        output.innerHTML="Grade E"
    }
    else if(marks<=49){
        output.innerHTML="Grade D"
    }
    else if(marks<=59){
        output.innerHTML="Grade C"
    }
    else if(marks<=69){
        output.innerHTML="Grade B"
    }
    else if(marks<=100){
        output.innerHTML="Grade A"
    }
    else{
        output.innerHTML="TRY AGAIN"
    }

})