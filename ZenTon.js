function toSafeCompact12(number) {
    let digits = "";
    while (number >= 12) {
        if ((number % 12) == 1) {
            digits = "|" + digits;
        }
        digits = (number % 12) + digits;
        number = Math.floor(number / 12);
    }
    if (number == 1) {
        digits = "|" + digits;
    }
    digits = (number) + digits;
    return digits;
}
const targetDateZ = new Date("2025-02-12");
//Starts from 11, which is Fa-kus anniversary
const timeDiffZ = Math.abs(today.getTime() - targetDateZ.getTime());
let daysDiffZ = Math.ceil((timeDiffZ-((today.getTimezoneOffset()/60)*3600000)) / (1000 * 3600 * 24));

let yearsDiffZ = Math.floor(daysDiffZ / 144);
daysDiffZ %= 144;
let monthDiffZ = Math.floor(daysDiffZ / 12);
daysDiffZ %= 12;

let yearZ = 27653 + yearsDiffZ;
let monthZ = 1 + monthDiffZ;
let dayZ = 1 + daysDiffZ;

document.getElementById("zt_latin").innerHTML = "["+dayZ+"]"+"["+monthZ+"]"+"["+yearZ+"]";
document.getElementById("zt").innerHTML = dayZ+" - "+monthZ+" - "+toSafeCompact12(yearZ);
