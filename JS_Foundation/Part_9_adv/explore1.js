console.log("Async");

function sayHello() {
  console.log("Hello HP!!");
}

setTimeout(() => {
  sayHello();
}, 3000);

for (let index = 0; index < 10; index++) {
  console.log(index);
}
