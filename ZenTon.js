const targetDateH = new Date("2025-02-11");
const timeDiffH = Math.abs(today.getTime() - targetDateH.getTime());
let daysDiffZ = Math.ceil((timeDiffH-((today.getTimezoneOffset()/60)*3600000)) / (1000 * 3600 * 24));

let yearsDiffZ = Math.floor(daysDiffZ / 144);
daysDiffZ %= 144;
let monthDiffZ = Math.floor(daysDiffZ / 12);
daysDiffZ %= 12;

let yearZ = 21653 + yearsDiffZ;
let monthZ = 1 + monthDiffZ;
let dayZ = 1 + daysDiffZ;

document.write("["+dayZ+"]"+"["+monthZ+"]"+"["+yearZ+"]");