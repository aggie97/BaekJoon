let hour = prompt("hour");
let min = prompt("min");

if(min < 45){
  min = 60 - (-(min - 45));
  if(hour == 0){
    hour = 23;
  }else{
    hour = hour - 1;
  }
}else{
  min -= 45;
}

console.log(hour, min);