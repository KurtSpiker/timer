// Coudlnt get a sound from process.stdout.write('\x07');

var args = process.argv.slice(2);
if(args.length <= 0) {
  console.log("Enter alarm times");
}

let elementArray = [];
for (let element of args) {
  if ( typeof Number(element) === "number" && Number(element) > 0) {
    elementArray.push(element);
  }
}

let numArray = elementArray.sort(function(a, b) {
  return a - b;
});

const alarm = (someArray) => {
  for (let num of elementArray) {
    setTimeout(() => {
      process.stdout.write('.');
    }, num * 1000);
  }
}

alarm(numArray);
