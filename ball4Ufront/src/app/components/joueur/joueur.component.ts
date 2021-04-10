import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css']
})
export class JoueurComponent implements OnInit {

  constructor() { 
      var reqURL = "https://kdbsports-nbaplayers.p.rapidapi.com/players/team?name=lakers";
      const request = new XMLHttpRequest();
      
      request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            const main = document.querySelectorAll('div.span');
            const image = document.querySelectorAll('img.joueurs');
            const h2 = document.querySelectorAll('h2.joueurs');
            var response = JSON.parse(this.responseText);
            putSliderImage(response,image,h2,main);
            
        }
      };
    
  
      request.open("GET", reqURL);
      request.setRequestHeader("X-RapidAPI-Key", "a863ab8093mshc096f61f89dd46ap18df74jsne41a36463df8");
      request.setRequestHeader("X-Rapidapi-Host", "kdbsports-nbaplayers.p.rapidapi.com");
      request.send();
  
    
  }
  ngOnInit(): void {
  }

  render(){}

}

function putSliderImage(response: any,image:any,h2:any,main:any) {



 for (let i = 0; i <response.length ; i++) {
  
  var span = document.createElement("span");
  span.setAttribute("class","sportsmagazine-color");
  span.setAttribute("style","text-color:white;");
  image[i].setAttribute("src", response[i].headShotUrl);
  h2[i].appendChild(document.createTextNode(response[i].jerseyNumber+" "+response[i].firstName+" "+response[i].lastName));

  main[i].appendChild(span.appendChild(document.createTextNode("Position :"+response[i].position+" /  Taille (en ft) : "+response[i].height+"  /   Moyenne Points :"+response[i].careerPoints+"  / Moyenne contres: "+response[i].careerBlocks+"/  Moyenne PasseD: "+response[i].carrerAssists+" /  Moyenne Rebonds :"+response[i].careerRebounds)));

  }


}


