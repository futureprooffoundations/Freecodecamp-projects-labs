const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

function flattenPlaylists(arr) {
  // Same guard as the original — unchanged.
  if (!Array.isArray(arr)) {
    return [];
  }

  let t = []; // accumulator for the flat result

  // CHANGED: indexed for-loop instead of `for...of` + `indexOf()`.
  // The index `i` is already known here, so there's nothing to look up.
  for (let i = 0; i < arr.length; i++) {

    // CHANGED: same idea — `j` is already the track's position,
    // no need to search for it with `indexOf`.
    for (let j = 0; j < arr[i].length; j++) {

      // CHANGED (core fix): build a NEW object with spread instead of
      // mutating the original track object with `x["source"] = [a, b]`.
      // The original arr[i][j] is left untouched; only the copy is pushed.
      t.push({ ...arr[i][j], source: [i, j] });
    }
  }

  return t;
}

function scoreTracks(arr) {
  // CHANGED: `.map()` instead of a manual for-loop + push into a new array.
  // Each iteration returns a new object, which `.map()` collects for us.
  return arr.map(obj => ({
    // CHANGED: spread copies obj's existing properties into a new object
    // instead of writing `obj["score"] = ...` directly onto the original.
    ...obj,
    score: obj["votes"] * 10 - Math.abs(obj["bpm"] - 120)
  }));
}

function dedupeTracks(arr) {
  // Unchanged — already builds a new array without mutating input objects.
  let id = [];
  let dedup = [];
  for (let tid of arr) {
    if (!id.includes(tid["trackId"])) {
      id.push(tid["trackId"]);
      dedup.push(tid);
    }
  }
  return dedup;
}

function enforceArtistQuota(arr, no) {
  // Unchanged — already builds a new array without mutating input objects.
  let eaq = [];
  let artist = {};
  for (let obj of arr) {
    if (artist[obj["artist"]] === undefined) {
      artist[obj["artist"]] = 1;
      eaq.push(obj);
    } else if (artist[obj["artist"]] < no) {
      artist[obj["artist"]] += 1;
      eaq.push(obj);
    }
  }
  return eaq;
}

function buildSchedule(arr) {
  // Unchanged — already builds a new array without mutating input objects.
  let slot = 1;
  let ne = [];
  for (let obj of arr) {
    let trackId = obj["trackId"];
    ne.push({ slot, trackId });
    slot++;
  }
  return ne;
}

function remixPlaylist(arr, no) {
  return buildSchedule(
    enforceArtistQuota(
      dedupeTracks(
        scoreTracks(
          flattenPlaylists(arr)
        )
      ),
      no
    )
  );
}

console.log(remixPlaylist(playlists, 1));

// Sanity check: confirm the fix actually worked — `playlists` should
// still have NO `source` or `score` properties on its track objects,
// even after the pipeline above ran on it.
console.log(playlists[0][0]);