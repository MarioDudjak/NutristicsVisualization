
	var number_of_clicks=0;
    var drag = d3.behavior.drag()
        .on("drag", function(d,i) {
            d.x += d3.event.dx
            d.y += d3.event.dy
            d3.select(this).attr("transform", function(d,i){
                return "translate(" + [ d.x,d.y ] + ")"
            })
        });


	 var drag = d3.behavior.drag()
        .on("drag", function(d,i) {
            d.x += d3.event.dx
            d.y += d3.event.dy
            d3.select(this).attr("transform", function(d,i){
                return "translate(" + [ d.x,d.y ] + ")"
            })
        });
		
    function rect_factory(id, x, y,title,image)
    { 
     
        var rectangle = container.append("rect")
                .attr("id", id)
				.attr("class","drag_meal")
                .attr("fill", "none")
                .attr("fill-opacity", .8)
                .attr("stroke", "black")
                .attr("stroke-width", 4)
				.attr("x",x)
				.attr("y",y)
                .attr("width", 150)
				.attr("height",100);
		var img = container.append("svg:image")
				.attr("xlink:href", image)
				.attr("width", 140)
				.attr("height", 75)
				.attr("x", x+5)
				.attr("y",y+20);
		var text = container.append('text')
				.text(title)
                .attr('x', '50%')
                .attr('y', y+18)
				.attr('text-anchor','middle')
                .attr('fill', 'black')
				.attr('font-size',20)
				.attr('text-align','center')
		
		
		img.on("dblclick",function(d){ 
		if(number_of_clicks==0){
		body = d3.select('body')
		svg = body.select("#machine").select('svg');
		svg.append("rect")
		.attr("x",100)
		.attr("y",300)
		.attr("width","200")
		.attr("height","150")
		.attr("style","stroke:black;stroke-width:4;fill:white;");	
		var img = svg.append("svg:image")
				.attr("xlink:href", image)
				.attr("width", 200)
				.attr('class','izabranaJela')
				.attr("height", 150)
				.attr("x", 100)
				.attr("y",300);
		var text = svg.append('text').text(title)
                .attr('x', 100)
                .attr('y', 300)
				.attr('class','izabranaJela')
                .attr('fill', 'black')
				.attr('font-size',50)
				.attr('text-align','center');
		}
		if(number_of_clicks==1){
			
		}
		if(number_of_clicks==2){
			
		}
		if(number_of_clicks==3){
			
		}
		if(number_of_clicks==4){
			number_of_clicks=0;
		}
		});
    }

    var w = 200;
    var h = 1110;

    //setup svg canvas
    var container=d3.select(".col-sm-2.sidenav")
        .append("svg")
            .attr("width", w)
            .attr("height", h);
			
       container.append("rect")
                .attr("width", "100%")
                .attr("height", "100%")
                .attr("stroke", "#000")
                .attr("stroke-width", 3)
                .attr("fill", "none")

    var titles = ["Juha","Hladno predjelo", "Toplo predjelo","Meso", "Riba", "Prilog", "Umak", "Salata", "Desert", "Voće"];
	var images =["http://www.gastronomija.hr/wp-content/uploads/2013/08/goveda-juha.jpg","http://www.gastronomija.info/fotoalbum/slike/hladno_predjelo_1290179493_2.jpg","https://coolinarika-cdn.azureedge.net/image/toplo-predjelo-os-sparoga-506065074fa78db16e9e9169ddafea38_header.jpg?v=1","http://www.stvarukusa.rs/sites/default/files/styles/w400/public/article/main_images/kako_da_prepoznate_da_li_je_meso_dovoljno_peceno_cl.jpg","https://coolinarika-cdn.azureedge.net/image/damirina-pecena-riba-s-povrcem-e2e5d696f3ad755bbbf5cb81268d39ba_view_l.jpg?v=0","http://cdn-static.rtl-hrvatska.hr/image/pekarski-krumpir-15e5eef03752404b0d94c4fbac25d256_view_article_new.jpg?v=20","https://coolinarika-cdn.azureedge.net/image/tartar-umak-c145976243ec2f25c9274d7f1ffd569d_header.jpg?v=10","https://coolinarika-cdn.azureedge.net/image/salata-za-sva-cula-c465af5b192c8cc43f441510d8eda4af_view_l.jpg?v=1","http://www.kraftcanada.com/-/media/kraft%20canada/recipes/620x423/c/chocolate-caramel-brownies-152180.jpg?h=423&w=620","http://mojkontakt.com/wp-content/uploads/2016/06/VOCE.jpg"];
    for(i = 0; i < 10; i++)
    {	
        x = 25;
        y =(i*100)+(i+1)*10;
		id="meal"+i;
        rect_factory(id, x, y,titles[i],images[i]);
    }
    
   