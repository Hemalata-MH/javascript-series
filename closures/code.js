// use this place to practice same topic code

function browserName() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = browserName();
myFunc();
