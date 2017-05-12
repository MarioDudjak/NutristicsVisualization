
    var drag = d3.behavior.drag()
        .on("drag", function(d,i) {
            d.x += d3.event.dx
            d.y += d3.event.dy
            d3.select(this).attr("transform", function(d,i){
                return "translate(" + [ d.x,d.y ] + ")"
            })
        });


    function face_factory(classname, data, x, y, r)
    { 
        //data format
        //{ "x": 0 - 1 , "y": 0 -1, "z": 0-1 }
        //color could be made a parameter
        //var arc = d3.svg.arc().outerRadius(r)
        //var donut = d3.layout.pie();

        var face = d3.select("#charts")
            .append("svg:g")
                //.data([data.sort(d3.descending)])
                //.data([data])
                .data([ {"x":x, "y":y} ])
                .attr("class", classname)
                .attr("transform", "translate(" + x + "," + y + ")")
                .call(drag);


        

        var head = face.append("svg:rect")
                .attr("class", "head")
                .attr("fill", "none")
                .attr("fill-opacity", .8)
                .attr("stroke", "#000")
                .attr("stroke-width", 4)
                .attr("width", 200)
				.attr("height",200)
				.attr("x",0)
				.attr("y",0);

       
    }

    var w = 400;
    var h = 400;

    //setup svg canvas
    d3.select("body")
        .append("svg:svg")
            .attr("width", w)
            .attr("height", h)
            .attr("id", "charts")
            //.on("click", clickypie)
            .append("svg:rect")
                .attr("width", "100%")
                .attr("height", "100%")
                .attr("stroke", "#000")
                .attr("stroke-width", 3)
                .attr("fill", "none")

    //r = 100;
    for(i = 0; i < 20; i++)
    {
        var r = 20 + Math.random() * 50;
        var data = { "x":Math.random(), "y":Math.random(), "z":Math.random(), "w":Math.random() };
        x = Math.random() * w
        y = Math.random() * h
        face_factory("face"+i, data, x, y, r);
    }
    
   