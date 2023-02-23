console.log("async");
async function getGitUsers() {
  const url = await fetch("https://api.github.com/users");
  const json = await url.json();
  return json;
}

const users = getGitUsers();
users.then(function (user) {
  console.log(user);
});

// async await is another way to handle async operations just like promises
// async will always return promise
// await basically waits for the async operations to complete.
// If the operation is not complete it says that you continue with other tasks & as soon as
// the promise is fulfilled you can access this by attaching.then keyword
