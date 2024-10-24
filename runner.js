function mod(a, b) {
    if (a >= 0) {
        return a % b;
    }
    else {
        return b + a;
    }
}
let lowAlph = "bcdfghjklmnpqrstvwxyz";
let lowVow = "aeiou";
let highAlph = "BCDFGHJKLMNPQRSTVWXYZ";
let highVow = "AEIOU";
let sp = "ôëáîò";
function go() {
    let d = 0;
  let b = document.getElementsByName("lang");
    if (b[0].checked) {
        d = 1;
    }
    else if (b[1].checked) {
        d = -1;
    }
  inputText = document.getElementById("text").value;
  let count = 0;
  let result = "";
  for (i = 0; i<inputText.length; i++) {
      if (inputText[i] == ' ') {
          result += " ";
          count = 0;
      }
      else if (inputText[i] == 'y' || inputText[i] == 'Y') {
          if (d == -1) {
              result+="v";
          }
          else if (i == 0 || inputText[i-1] == ' ') {
              result += "c";
              result += sp[count %  sp.length];
              if (!(i+1 == inputText.length || inputText[i+1] == ' '))
                  result += "'";
              if (i+1 < inputText.length && inputText[i] != inputText[i+1])
                  count++;
          }
          else {
              result += "i";
          }
      }
      else if (lowAlph.includes(""+inputText[i])) {
          result += lowAlph[mod((lowAlph.indexOf(""+inputText[i]) + (d*3)),lowAlph.length)];

          if (d==1)
            result += sp[count % sp.length];
          if (d == 1 && !(i+1 == inputText.length || inputText[i+1] == ' '))
              result += "'";
          if (d == 1 && i+1 < inputText.length && inputText[i] != inputText[i+1])
              count++;

      }
      else if (lowVow.includes(""+inputText[i])) {
          result += lowVow[mod((lowVow.indexOf(inputText[i]) + (d*3)), lowVow.length)];
      }
      else if (highAlph.includes(""+inputText[i])) {
          result += highAlph[mod((highAlph.indexOf(inputText[i]) + (d*3)), highAlph.length)];

          if (d==1)
            result += sp[count % sp.length];
          if (d == 1 && !(i+1 == inputText.length || inputText[i+1] == ' '))
              result += "'";
          if (d == 1 && i+1<inputText.length && inputText[i] != inputText[i+1])
              count++;
      }
      else if (highVow.includes(""+inputText[i])) {
          result += highVow[mod((highVow.indexOf(inputText[i]) + (d*3)), highVow.length)];
      }
  }
  alert(result);
    document.getElementById("result").innerHTML = result;
}
    
