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
  inputText = document.getElementById("text").value;
  let count = 0;
  let result = "";
  for (i = 0; i<inputText.length; i++) {
      if (inputText[i] == ' ') {
          result += " ";
          count = 0;
      }
      else if (inputText[i] == 'y' || inputText[i] == 'Y') {
          if (i == 0 || inputText[i-1] == ' ') {
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
          result += lowAlph[mod((lowAlph.indexOf(""+inputText[i]) + 3),lowAlph.length)];

          result += sp[count % sp.length];
          if (!(i+1 == inputText.length || inputText[i+1] == ' '))
              result += "'";
          if (i+1 < inputText.length && inputText[i] != inputText[i+1])
              count++;

      }
      else if (lowVow.includes(""+inputText[i])) {
          result += lowVow[mod((lowVow.indexOf(inputText[i]) + 3), lowVow.length)];
      }
      else if (highAlph.includes(""+inputText[i])) {
          result += highAlph[mod((highAlph.indexOf(inputText[i]) + 3), highAlph.length)];

          result += sp[count % sp.length];
          if (!(i+1 == inputText.length || inputText[i+1] == ' '))
              result += "'";
          if (i+1<inputText.length && inputText[i] != inputText[i+1])
              count++;
      }
      else if (highVow.includes(""+inputText[i])) {
          result += highVow[mod((highVow.indexOf(inputText[i]) + 3), highVow.length)];
      }
  }
  alert(result);
    document.getElementById("result").innerHTML = result;
}
