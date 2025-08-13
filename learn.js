const map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 5);
map.set({ 1: "two" }, 3);

console.log("this is my map value", map.get({1:"two"}));
console.log("this is my map size", map.size);
/* Create a compoent that renders three alternate items depending on what is clicked
The component should take in three titles e.g: SKILLS
EXPERIENCE
CODE 
SAMPLES
It shpuld fprm a horizontal header where each of these titles are clickable
The content shown depends on the title clikced
The component should take in compoents for each title:
expectation: a component that takes in some titles by props and some display components for each title

create a contact setion that takes in a link that leads to my mail preformatted with an i need your service message
it should have the following: links to my github, linkedin, official twitter, and medium. sha make it very contacty. you can add a form that takes in client naime, and relevant infomstion about the client and clients project
Pre-requisits for styling and content fill:
    - setup light and dark mode context
    - 

Write a context for light and dark theme management

*/