function yr(b, c) {
  return (-c / b);
}

function logic(str) {
  if (str.length >= 5) {
    return str.split('').reverse().join('');
  } else {
    return str;
  }
}

function asyncLogic(onFinish) {
  setTimeout(() => {
    onFinish(123);
  }, 1000)
}

function domCreate() {
  let el = document.createElement('button');
  el.textContent = '1234';
  return el;
}

module.exports = {
  yr, logic, asyncLogic, domCreate
}


