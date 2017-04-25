console.log("Hello there");

brandRequest= new XMLHttpRequest();

brandRequest.addEventListener("load", brandRequestLoad);
brandRequest.addEventListener("error", brandRequestFail);

function brandRequestLoad(event){
	console.log("File has been Loaded");
	var data= JSON.parse(event.target.responseText);
	console.log(data);
	showData(data);
}
function brandRequestFail(event){
	console.log("an error has occured");
}
function showData(x){
	var myDiv= document.getElementById("output");
	var divData="";
for (var i=0; i< x.dog_brands.length; i++){
	for(var y= 0; y<x.dog_brands[i].types.length; y++){
		for(var z=0; z<x.dog_brands[i].types[y].volumes.length; z++){
				divData+= "<div class='dogfood'>";
				divData+= "<h2>"+ x.dog_brands[i].name + "</h2>";
				divData+= "<ul>";
				divData+= "<li>" + x.dog_brands[i].types[y].type+ "</li>";
				divData+= "<li>"+ x.dog_brands[i].types[y].volumes[z].name+ "</li>";
				divData+= "<li>"+ x.dog_brands[i].types[y].volumes[z].price+ "</li>";
				divData+= "</ul>";
				divData+= "</div>";
		}	
	}
}
	myDiv.innerHTML += divData;
}

brandRequest.open("GET", "brand.json");
brandRequest.send();

brandRequest2= new XMLHttpRequest();

brandRequest2.addEventListener("load", brandRequest2Load);
brandRequest2.addEventListener("error", brandRequest2Fail);

function brandRequest2Load(event){
	console.log("File has been Loaded");
	var newData= JSON.parse(event.target.responseText);
	console.log(newData);
	showDataAgain(newData);
}
function brandRequest2Fail(event){
	console.log("an error has occured");
}
function showDataAgain(x){
	var mysecDiv= document.getElementById("output2");
	var divData="";
for (var i=0; i< x.cat_food.length; i++){
	for(var y= 0; y<x.cat_food[i].types.length; y++){
		for(var z=0; z<x.cat_food[i].types[y].volumes.length; z++){
				divData+= "<div class='dogfood'>";
				divData+= "<h2>"+ x.cat_food[i].name + "</h2>";
				divData+= "<ul>";
				divData+= "<li>" + x.cat_food[i].types[y].type+ "</li>";
				divData+= "<li>"+ x.cat_food[i].types[y].volumes[z].name+ "</li>";
				divData+= "<li>"+ x.cat_food[i].types[y].volumes[z].price+ "</li>";
				divData+= "<li>"+ x.cat_food[i].types[y].volumes[z].breed+ "</li>";
				divData+= "</ul>";
				divData+= "</div>";
		}	
	}
}
	mysecDiv.innerHTML += divData;
}

brandRequest2.open("GET", "catfood.json");
brandRequest2.send();