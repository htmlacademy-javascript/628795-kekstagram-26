

function randomNumber(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}


function checkMaxLength(strLength, maxStrLength) {
  if(strLength.length < maxStrLength) {
    return true;
  }
  return false;
}
