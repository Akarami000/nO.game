///////////////////////////////////to generate random number////////////////////////////

var GuessRandom=document.querySelector("input")

function RandomNumber(max,min){
   return Math.random()*(max-min)+min
}
var MYRandomNumber=Math.floor(RandomNumber(100,1))
console.log(MYRandomNumber)

/////////////////////////for button///////////////////////////

var btn=document.getElementById('myBTN')
var count=0
var per=" "
btn.onclick=function(e){
 //  console.log(GuessRandom.value)
 ////////////////////////for previous guess//////////////////////////// 
 
per=per +" "+ GuessRandom.value

    var Previous=document.getElementById("previous")
Previous.innerText="Your Guesses:"
 Previous.innerText += per

//////////////////////////////tocheck condtion//////

   
if(GuessRandom.value>MYRandomNumber){
   var winv=document.querySelector("h3")
   winv.innerText="your number is bigger"
}
else if(GuessRandom.value<MYRandomNumber){
   var winv=document.querySelector("h3")
   winv.innerText="Your number is smaller"

}
else if(GuessRandom.value==MYRandomNumber){
   var winv=document.querySelector("h3")
   winv.innerText="Great you win the game"
}
count++
 
   if(count==10){
      var winv=document.querySelector("h3")
      winv.innerText="sorry! you lost the game"
    btn.disabled=true
      function reset(){
   var RESETbutton=document.createElement('button')
  RESETbutton.innerText="RESET"


document.body.appendChild(RESETbutton)
RESETbutton.onclick=function(){
   location.reload()
}
      
   }
   reset()
}
   

}


