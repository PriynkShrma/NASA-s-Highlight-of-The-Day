 function fetch() {

	
	

		const xhr = new XMLHttpRequest();
		
		
		xhr.open('GET', ' https://api.nasa.gov/planetary/apod?api_key=zIdopjIzkc87tSLH4MaknmS4ezevh3MaBYVKws2Y ', true);
		
		   xhr.onload = function () {
			   if(this.status === 200){
				
				   let obj=  JSON.parse(this.responseText);
				   let date =  obj.date;
				   let explaination =  obj.explanation;
				   let mediatype = obj.media_type;
				   let title =  obj.title;
				
				   let url = obj.url;
		

function picture(){

	if (mediatype === "image"){
		let vid = document.getElementById('a3');
		vid.style.display='none';
		document.getElementById('photo').setAttribute('src',url);
	}
	else{
		
		
	}
}
picture();

function video(){
	if(mediatype === "video"){
		let photo = document.getElementById('photo');
		photo.style.display='none';
		document.getElementById('a3').setAttribute('src',url);
	}
	else{
		
	}
}
video();
			function abc(){
				document.getElementById('a1').innerHTML= date ;
				document.getElementById('a2').innerHTML= title;
				

				
				document.getElementById('a4').innerHTML= explaination;
			}
              abc();


				 
				
			   }
			   else{
				   console.log("Some error occured")
			   }
		   }
	   
	   xhr.send();
	
	
	  
	   
	}

fetch();