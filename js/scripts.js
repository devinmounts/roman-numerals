
function toRoman(number) {
  var roman = [];
  var remainder;

  if(number > 10) {
    remainder = number % 10;
  } else {
    remainder = number;
  }

  console.log(remainder)
  console.log(number)

  if(number <=30 && number >10) {
    // if(number % 10 === 0) {
      for(var i = number / 10; i >= 1; i--) {
        roman.push("X")
      }
    // }
  }
  if(remainder <= 5) {
    if(remainder != 5) {
      if(remainder != 4) {
        for(var i = remainder; i > 0; i--) {
          roman.push('I');
        }
      } else roman.push('IV');
    } else roman.push('V');
  }
  if(remainder<=10 && remainder > 5) {
    if(remainder != 10) {
      if(remainder !=9) {
        roman.push("V")
        for (var i= remainder; i > 5; i--) {
          roman.push("I");
        }
      }else roman.push("IX")
    }else roman.push("X")
  }



  return roman.join("");
}






$(function(){




})
