export function greet(name) {
  return `Hello, ${name}!`;
}

export function reverseString(str) {
  return str.split("").reverse().join("");
}

export function capitalizeFirstLetter(str) {
  if (!str) return "";
  return str[0].toUpperCase() + str.slice(1);
}
