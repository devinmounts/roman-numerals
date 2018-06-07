
function toRoman(number) {
  var roman = [];
  var remainderX;


  if(number >= 100 && number < 400) {
    for(var i = number / 100; i >= 1; i--) {
      roman.push("C")
    }
    number = number - 100;

  }

  if(number >= 90 && number < 100) {
    roman.push("XC")
    number = number - 90;
  }

  if(number >= 50 && number < 90) {
    roman.push("L")
    number = number - 50;
  }

  if(number >= 40 && number < 50) {
    roman.push("XL")
    number = number - 40;
  }


  if(number < 40) {

    if(number > 10) {
      remainderX = number % 10;
    } else {
      remainderX = number;
    }

    // if(number < 90 && number >=40){
    //   if(number === 40) {
    //     roman.push("XL")
    //   }
    // }

    if(number < 40 && number >10) {
        for(var i = number / 10; i >= 1; i--) {
          roman.push("X")
        }
    }
    if(remainderX <= 5) {
      if(remainderX != 5) {
        if(remainderX != 4) {
          for(var i = remainderX; i > 0; i--) {
            roman.push("I");
          }
        } else roman.push("IV");
      } else roman.push("V");
    }
    if(remainderX<=10 && remainderX > 5) {
      if(remainderX != 10) {
        if(remainderX !=9) {
          roman.push("V")
          for (var i= remainderX; i > 5; i--) {
            roman.push("I");
          }
        }else roman.push("IX")
      }else roman.push("X")
    }
  }

  return roman.join("");
}





//
// $(function(){
//
//
//
//
// })
