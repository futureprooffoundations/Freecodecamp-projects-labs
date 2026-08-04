const shuffledFragments = [
  {
    id: 15,
    text: "and, after a time, passed the place where the Hare was sleeping.",
  },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  {
    id: 11,
    text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare,",
  },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  {
    id: 1,
    text: "A Hare was making fun of the Tortoise one day for being so slow.",
  },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  {
    id: 6,
    text: "The Hare was much amused at the idea of running a race with the Tortoise,",
  },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

function compactFragments(array) {
  let compact = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== undefined) {
      compact.push(array[i]);
    }
  }
  if (compact.length < array.length) {
    console.log(`[COMPACTED]`);
  }
  return compact;
}

const compactedShuffledFragments = compactFragments(shuffledFragments);

function sortFragments(array) {
  let long = [];
  let idl = 0;
  for (let i of array) {
    if (i["id"] > idl) {
      idl = i["id"];
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (long.length == 0) {
      long.push(array[i], { id: idl });
    } else if (long.length > 0) {
      for (let x of long) {
        if (array[i]["id"] < x["id"]) {
          if (array[i]["id"] == x["id"]) {
            long.splice(long.indexOf(x + 1), 0, array[i]);
          } else {
            long.splice(long.indexOf(x), 0, array[i]);
            break;
          }
        }
      }
    }
  }
  long.pop();
  return long;
}
const sortedFragments = sortFragments(compactedShuffledFragments);

function dedupeFragments(array) {
  let nodup = [];
  let aid = [];
  for (let i of array) {
    if (nodup.length <= 0) {
      nodup.push(i);
      aid.push(i["id"]);
    } else if (!aid.includes(i["id"])) {
      nodup.push(i);
      aid.push(i["id"]);
    } else {
      console.log(`[DEDUPED]`);
    }
  }
  return nodup;
}

const dedupedFragments = dedupeFragments(sortedFragments);

function fillMissingFragments(array) {
  let mid = 1;
  let no = array[array.length - 1]["id"];
  let ne = [];
  let arcop = [...array];
  for (let i = 0; i < no; i++) {
    if (arcop[i]["id"] == mid) {
      ne.push(arcop[i]);
      mid += 1;
    } else {
      ne.push({ id: mid, text: "[...]" });
      console.log(`[FILLED]`);
      arcop.unshift("placeholder");
      mid += 1;
    }
  }
  return ne;
}

const filledFragments = fillMissingFragments(dedupedFragments);

function assembleStory(array) {
  let text = "";
  for (let i of array) {
    text += i["text"] + "\n";
  }
  text.length - 1;
  text = text.slice(0, text.length - 1);
  return text;
}

console.log(assembleStory(filledFragments));
console.log(
  assembleStory([
    { id: 1, text: "Hello" },
    { id: 2, text: "World" },
  ]),
);
