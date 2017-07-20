

//creates a loop that looks for a true value in clownsObj //


clownsObj.forEach(function(splat) {
    if (splat.statusActive == true) { //this line create the splat iteration local variable that the results are ported into.//
        console.log(splat.name); //outputs to the log.
        document.write('<div class="row">'
                        + '<div class="name'
                        + splat.value
                        + '">'
                        + splat.name
                        + '</div>'
                        + '<div class="row"'
                        + '<div class="col-4-lg col-4-md col-1-sm">'
                        + '<div class="biopic">'
                        + splat.image
                        + '</div>'
                        + '<div class="ccol-4-lg col-4-md col-1-sm">'
                        + '<ul class="clownList">'
                        + '<li class="tag">'
                        + splat.tagline
                        + '</li>'
                        + '<li class="disc"><p>'
                        + splat.description
                        + '</p></li>'
                        + '<li class="actor">'
                        + splat.actor
                        + '</li>'
                        + '</ul>'
                        + '</div>'
                        + '</div>'
                        + '</div>'
                        + '</div>'


                      );
    }
});
