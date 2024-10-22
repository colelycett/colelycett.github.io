const today = new Date();
const targetDate = new Date('2023-09-03');
//counts from sept. 2, which is Halala. Date must be 3 because it subtracts 8 hours fot PST
const timeDiff = Math.abs(today.getTime() - targetDate.getTime());
let daysDiff = Math.ceil((timeDiff-((today.getTimezoneOffset()/60)*3600000)) / (1000 * 3600 * 24));
daysDiff += 1;
let nMonthsDiff = 0
if (daysDiff % 64 != 0){
  nMonthsDiff = Math.floor(daysDiff / 64);
}
else{
  nMonthsDiff = daysDiff/64 - 1
}
let addYears = 0;
let year = 40936;
while (daysDiff > 64) {
  daysDiff -= 64;
}
let nMonths = ['MC', 'BD', 'ZB', 'WL', 'TB'];
while (nMonthsDiff>4) {
  nMonthsDiff -= 5;
  addYears+=1;
}
year += addYears;
document.write(year+": "+nMonths[nMonthsDiff]+" "+daysDiff);
