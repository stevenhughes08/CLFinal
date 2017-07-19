//defines clown name array.



            function(clownNamer){
              for(i = 0; i < clownName.length; i++){
                '<li class=' += name[i] + '>';
              }
            };


//creates a loop that looks for a true value in clownsObj //

clownsObj.forEach(function(splat) {
    if (splat.statusActive == true) { //this line create the splat iteration local variable that the results are ported into.//
        console.log(splat.name); //outputs to the log.
        document.write('<ul class="char">'
                        + clownNamer();
                        + splat.name
                        + '</li>'
                        + '<li class="biopic">'
                        + splat.image
                        + '</li>'
                        + '<li class="tag">'
                        + splat.tagline
                        + '</li>'
                        + '<li class="disc">'
                        + splat.description
                        + '</li>'
                        + '<li class="actor">'
                        + splat.actor
                        + '</li>'
                        + '</ul>');
    }
});
