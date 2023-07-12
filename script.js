const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};
const team= players;
team[3]='dhoni';

const team1=[]
for(let i=0;i<players.length;i++){
	team1.push(players[i])
}
const cap1= person
cap1.name-"Accio Job";


	

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
