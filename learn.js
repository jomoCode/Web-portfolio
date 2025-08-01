const map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 5);
map.set({ 1: "two" }, 3);

console.log("this is my map value", map.get({1:"two"}));
console.log("this is my map size", map.size);
