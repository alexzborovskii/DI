const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

// //1
// const usernames = [];
// gameInfo.forEach(element => {
//     usernames.push(element.username + "!")
// });
// console.log(usernames);
// //2
// const winners = [];
// gameInfo.forEach(element => {
//     (element.score > 5) && winners.push(element.username);
// })
// console.log(winners);
// //3
// const totalScore = gameInfo.reduce((acc, obj) => acc + obj.score, 0);
// console.log(totalScore)