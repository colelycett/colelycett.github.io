const targetDateH = new Date("2023-05-11");
//Continues from 10, which is Oleb'ux
const timeDiffH = Math.abs(today.getTime() - targetDateH.getTime());
let daysDiffH = Math.ceil((timeDiffH-((today.getTimezoneOffset()/60)*3600000)) / (1000 * 3600 * 24));
let yearsDiffH = 0;
yearsDiffH = Math.floor(daysDiffH / 256);
daysDiffH %= 256;
daysDiffH += 1;
let yearH = 12855+yearsDiffH;
let dayH = 0;
let monthH
if (daysDiffH<=42) {
  dayH = daysDiffH;
  monthH = 1;
}
else if (daysDiffH>42 && daysDiffH<=129) { //87 days in second month, 87+42 = 129
  dayH = daysDiffH - 42;
  monthH = 2;
}
else {
  dayH = daysDiffH - 129
  monthH = 3;
}
document.write(monthH+" | "+dayH+" | "+yearH);
