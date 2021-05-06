var obj;
var res;
var input;


function myList(){
  var cars = ["Saab", "Volvo", "Audi", "Datsun" ,"Ferrari" ,"Ford" ,"Chevrolet" ,"Cadillac" ,"Bentley","Fiat","BMW","Aston Martin","Hyundai","Jeep","Kia","Land Rover","Lexus","Mazda","Tesla","Volvo"];

  obj = cars[Math.floor(Math.random() * 21)];
  res=obj.toLowerCase();;
  document.getElementById("upper").innerHTML = obj;
  document.getElementById("lower").innerHTML = res;
  document.getElementById("length").innerHTML = obj.length;

}

function checkChar(){
  var num=0;
  for (i = 0; i < obj.length; i++) {
    if (obj.charAt(i).toLowerCase() == input){
      num+=1;
    }
  }

  if (num !=0){
    alert("Yes");
  }
else if (num ==0){
  alert("NO")
}
  input = document.getElementsByClassName("txtbox")[0].value;
  document.getElementById("rightchar").innerHTML = num;
}

function vowelsConsonantsChar(){
  var vowels =0;
  var consonants =0;
  for (i = 0; i < obj.length; i++) {
  
    if (obj.charAt(i) == 'a' || obj.charAt(i) =='o' || obj.charAt(i) =='e' || obj.charAt(i) =='i' || obj.charAt(i) =='u'){
      vowels += 1;}
      else
  consonants += 1;
  }

      document.getElementById("vowels").innerHTML = vowels;
      document.getElementById("consonants").innerHTML = consonants;

}