// Write your code here
const username = Symbol("username");
const password = Symbol("password");
const user = {
  [username] : "kashish",
  [password] : "kashish"
}; 
console.log(user.username);
console.log(user.password);