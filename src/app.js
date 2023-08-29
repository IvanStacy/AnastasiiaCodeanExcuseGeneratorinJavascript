window.onload = function() {
  const sentence = (who, action, what, when);
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let randomIdx = Math.floor(Math.random() * who.length);
  let whoR = who[randomIdx];
  let actionR = action[Math.floor(Math.random() * action.length)];
  let whatR = what[Math.floor(Math.random() * what.length)];
  let whenR = when[Math.floor(Math.random() * when.length)];
  const resulMessage = whoR + " " + actionR + " " + whatR + " " + whenR;
  document.getElementById("excuse").innerHTML = resulMessage;
};
