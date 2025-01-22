function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane Doe", "John Smith"];

// Solution 1: Iterate over the array
for (const name of user) {
  console.log(greeter(name));
}

// Solution 2: Modify the function to accept an array
function greeterArray(persons: string[]): string[] {
  return persons.map(person => "Hello, " + person);
}

console.log(greeterArray(user));