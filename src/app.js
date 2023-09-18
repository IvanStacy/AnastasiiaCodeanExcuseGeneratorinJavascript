/* eslint-disable */
import "bootstrap";
import "./style.css";
window.onload = function() {
  let btn = document.getElementById("btn");
  let img = document.getElementById("img");
  let pics = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyNoprpOz8SKuedEiXmT__-Bv7_dh_xfmTzA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPAJ6MA67DIpxe94yMnhb4Iev7RrB6TjRMzmCgle-0bCGzzqtSfDU-oKWOQZLmUE8OnP8&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQtqvNwtlvDm_8FOvUPCdtYDMhEqrQhz4sYw&usqp=CAU",
    "https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/10/30/13/44/88/3fcbad040cd7.jpg",
    "https://kartinkof.club/uploads/posts/2022-03/1648342560_5-kartinkof-club-p-privet-vsem-mem-5.jpg"
  ];
  const refreshPage = () => {
    location.reload();
  };
  btn.addEventListener("click", refreshPage);
  // setrandomPic
  let randomPicIdx = Math.floor(Math.random() * pics.length);
  let randomPix = pics[randomPicIdx];
  img.setAttribute("src", randomPix);

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
  // setrandomIdx
  let whoIdx = [Math.floor(Math.random() * who.length)];
  let actionIdx = [Math.floor(Math.random() * action.length)];
  let whatIdx = [Math.floor(Math.random() * what.length)];
  let whenIdx = [Math.floor(Math.random() * when.length)];
  const resultMessage =
    who[whoIdx] +
    " " +
    action[actionIdx] +
    " " +
    what[whatIdx] +
    " " +
    when[whenIdx];
  //runSentence
  document.getElementById("excuse").innerHTML = resultMessage;
};
