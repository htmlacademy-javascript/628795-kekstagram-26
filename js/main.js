

function randomNumber(min, max) {
  const rand = min + Math.random() * (max - min);
  return Math.round(rand);
}

randomNumber();

function checkMaxLength(strLength, maxStrLength) {
  if(strLength.length < maxStrLength) {
    return true;
  }
  return false;
}

checkMaxLength(15, 144);
