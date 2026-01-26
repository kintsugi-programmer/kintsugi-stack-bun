console.log(Bun.version); // Bun version
// 1.3.6

console.log(Bun.env); // fast all .env return as obj
// {
//   SHELL: "/bin/bash",
//   NUGET_XMLDOC_MODE: "skip",
//   COLORTERM: "truecolor",
//   CLOUDENV_ENVIRONMENT_ID: "76db0ef8-61ab-4e37-9aef-28af2d99ebbb",
//   NVM_INC: "/usr/local/share/nvm/versions/node/v24.11.1/include/node",
//   TERM_PROGRAM_VERSION: "1.108.2"
// }

await Bun.sleep(5000); // 5sec pause execution // No need to construct wrapper with Promises like trad. js // for Rate limiting

console.log(crypto.randomUUID());// Generate a cryptographically secure random UUID // RFC 4122 Version 4 UUID (v4) // xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
// b1f9b4dd-08f0-4f86-ad05-0d2ee998e430
 // Cryptographically secure (not just Math.random())
 
console.log(Bun.nanoseconds());
// 5682172144

const obj1 = {name:"bali-king", age: 18};
const obj2 = {name:"bali-king", age: 18};
const obj3 = {name:"bali-king"};
console.log(Bun.deepEquals(obj1,obj2)); // Compare two values for deep equality
// true
// Compares values, not references
// Built-in, faster than custom deep comparison

console.log(Bun.deepEquals(obj1,obj3));
// false