let fortune1 = "You will meet someone who changes your life in a good way.";
let fortune2 = "A pleasant surprise is waiting for you very soon.";
let fortune3 = "Today is the perfect day to start something new.";
let fortune4 = "Be careful with your decisions — they might shape your future.";
let fortune5 = "Good fortune will find you when you least expect it.";

let randomNumber = Math.floor(Math.random() * 5) + 1;
let selectedFortune;

switch (randomNumber) {
  case 1:
    selectedFortune = fortune1;
    break;
  case 2:
    selectedFortune = fortune2;
    break;
  case 3:
    selectedFortune = fortune3;
    break;
  case 4:
    selectedFortune = fortune4;
    break;
  case 5:
    selectedFortune = fortune5;
    break;
}

console.log("Your fortune for today:");
console.log(selectedFortune);
