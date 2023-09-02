import "bootstrap";
// import "./style.css";
// window.onload = function() {
//   let img = document.getElementById("btn");
//   let pics = [
//     "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fphoto&psig=AOvVaw0hUNwT2QYt1NFhkej2Sizb&ust=1693446484883000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMC3i_Ohg4EDFQAAAAAdAAAAABAQ",
//     "https://www.google.com/url?sa=i&url=https%3A%2F%2Faviationweek.com%2Fdefense-space%2Fphoto-contest%2F2021-aviation-week-photo-contest-winning-photos&psig=AOvVaw0hUNwT2QYt1NFhkej2Sizb&ust=1693446484883000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMC3i_Ohg4EDFQAAAAAdAAAAABAV",
//     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.loveexploring.com%2Fgalleries%2F94538%2Fthese-fantastic-travel-photos-will-make-you-feel-better-about-the-world&psig=AOvVaw0hUNwT2QYt1NFhkej2Sizb&ust=1693446484883000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMC3i_Ohg4EDFQAAAAAdAAAAABAe",
//     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.filemail.com%2Fcontent%2Fblog%2Fhow-to-send-high-quality-photos-6-free-methods%2F&psig=AOvVaw0hUNwT2QYt1NFhkej2Sizb&ust=1693446484883000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMC3i_Ohg4EDFQAAAAAdAAAAABAm",
//     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphoto%2Fsheeps-and-lambs-gm680707202-124759809&psig=AOvVaw1RGs6vR6oxVM065HjgIJ4-&ust=1693447001611000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNjVtOmjg4EDFQAAAAAdAAAAABAE"
//   ];
//   let who = ["The dog", "My grandma", "His turtle", "My bird"];
//   let action = ["ate", "peed", "crushed", "broke"];
//   let what = ["my homework", "the keys", "the car"];
//   let when = [
//     "before the class",
//     "right on time",
//     "when I finished",
//     "during my lunch",
//     "while I was playing"
//   ];
//   let randomIdx = Math.floor(Math.random() * who.length);
//   let whoR = who[randomIdx];
//   let picsR = pics[randomIdx];
//   let actionR = action[Math.floor(Math.random() * action.length)];
//   let whatR = what[Math.floor(Math.random() * what.length)];
//   let whenR = when[Math.floor(Math.random() * when.length)];

//   const resulMessage = `${whoR} ${actionR} ${whatR} ${whenR}`;

//   document.getElementById("excuse").innerHTML = resulMessage;
// };
window.onload = function() {
  let btn = document.getElementById("btn");
  let img = document.getElementById("img");
  document.getElementById("excuse").innerHTML = resultMessage;
  console.log(resultMessage);
  let pics = [
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fphoto&psig=AOvVaw0hUNwT2QYt1NFhkej2Sizb&ust=1693446484883000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMC3i_Ohg4EDFQAAAAAdAAAAABAQ",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Faviationweek.com%2Fdefense-space%2Fphoto-contest%2F2021-aviation-week-photo-contest-winning-photos&psig=AOvVaw0hUNwT2QYt1NFhkej2Sizb&ust=1693446484883000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMC3i_Ohg4EDFQAAAAAdAAAAABAV",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.loveexploring.com%2Fgalleries%2F94538%2Fthese-fantastic-travel-photos-will-make-you-feel-better-about-the-world&psig=AOvVaw0hUNwT2QYt1NFhkej2Sizb&ust=1693446484883000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMC3i_Ohg4EDFQAAAAAdAAAAABAe",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.filemail.com%2Fcontent%2Fblog%2Fhow-to-send-high-quality-photos-6-free-methods%2F&psig=AOvVaw0hUNwT2QYt1NFhkej2Sizb&ust=1693446484883000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMC3i_Ohg4EDFQAAAAAdAAAAABAm",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphoto%2Fsheeps-and-lambs-gm680707202-124759809&psig=AOvVaw1RGs6vR6oxVM065HjgIJ4-&ust=1693447001611000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNjVtOmjg4EDFQAAAAAdAAAAABAE"
  ];
  const refreshPage = () => {
    location.reload();
  };
  btn.addEventListener("click", refreshPage, function() {
    let randomIdx = Math.floor(Math.random() * pics.length);
    img.src = pics[randomIdx];

    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was playing"
    ];

    let whoR = who[Math.floor(Math.random() * who.length)];
    let actionR = action[Math.floor(Math.random() * action.length)];
    let whatR = what[Math.floor(Math.random() * what.length)];
    let whenR = when[Math.floor(Math.random() * when.length)];

    const resultMessage = `${whoR} ${actionR} ${whatR} ${whenR}`;
    return (
      who[whoR] + " " + action[actionR] + " " + what[whatR] + " " + when[whenR]
    );
  });
};
