// use this place to practice same topic code
async function getAllUsers() {
  const url = await fetch("https://api.github.com/users");
  const json = await url.json();
  return json;
}

const users = getAllUsers();
console.log(users);

users.then(function (user) {
  console.log(user);
});
