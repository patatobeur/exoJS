var boucler = true;
var members = ["Aida67","lapie002","anneserrano","Jennysmille","nunkabuk","RCosson","kaonb-ax","FerEmilie","crazychouwi","KiluaZoldyc","patatobeur","Sam11360","elo062","hermeline","Biciclet"];
var liste=document.getElementById('check');


if (boucler==true){
  for(var i = 0; i<members.length; i++){
    switch (members[i]) {
      case "patatobeur":
        console.log("affiche "+members[i]);
        liste.innerHTML="affiche "+members[i];
        break;
      default:
        console.log(members[i]);
        liste.innerHTML += members[i];
    }
  };
};
