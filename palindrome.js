/** @format 

*/

const text = document.querySelector('input');
const btn = document.querySelector('button');
const output = document.querySelector('.output');
let perhapcePalindrome = '';

text.addEventListener('input', onChange);
btn.addEventListener('click', checking);

function checking() {
  output.textContent = palindrome(perhapcePalindrome);
  btn.textContent = 'push to find out'
  if (palindrome(perhapcePalindrome) == true) {
    output.classList.add('true');
  } else {
    output.classList.add('false');
  }
}

function onChange(e) {
  perhapcePalindrome = e.target.value;  
  output.textContent = 'is it?';
  output.classList.remove('true');
  output.classList.remove('false');
}



function palindrome(str) {
  const strNew = str
    .toLowerCase()
    .match(/[a-z0-9]/g)
    .join("");
  const len = strNew.length;
  //console.log(strNew);
  for (let i = 0; i < len; i++) {
    console.log(
      strNew[i],
      strNew[len - i - 1],
      i,
      len - i - 1,
      strNew[i] === strNew[len - i - 1]
    );
    if (strNew[i] === strNew[len - i - 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

//console.log(palindrome("almostomla"));
