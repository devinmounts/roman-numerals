
function toRoman(number) {
  var roman = [];
  var remainderX;

  if(number >= 1000 && number <= 3999) {
    for(var i = number / 1000; i >= 1; i--){
      roman.push("M");
      number = number - 1000;
    }
  }

  if(number >= 900 && number < 1000) {
    roman.push("CM")
    number = number - 900;
  }

  if(number >= 500 && number < 900) {
    roman.push("D")
    number -= 500;
  }

  if(number >= 400 && number < 500) {
    roman.push("CD")
    number = number - 400;
  }


  if(number >= 100 && number < 400) {
    var x = Number(number.toString().charAt(0))
    for(var i = number / 100; i >= 1; i--) {
      roman.push("C")
    }
    number = number - (100 * x);

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
    console.log("in here");
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
