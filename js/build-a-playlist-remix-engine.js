const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122,
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108,
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128,
    },
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115,
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124,
    },
  ],
];

function flattenPlaylists(arr) {
  let r = arr;
  if (!Array.isArray(arr)) {
    return [];
  } else {
    let t = [];
    for (let i of r) {
      for (let x of i) {
        let n = [];
        let a = r.indexOf(i);
        let b = i.indexOf(x);
        n.push(a);
        n.push(b);
        x["source"] = [a, b];
        t.push(x);
      }
    }
    return t;
  }
}

function scoreTracks(arr) {
  let scorearr = [];
  for (let obj of arr) {
    obj["score"] = obj["votes"] * 10 - Math.abs(obj["bpm"] - 120);
    scorearr.push(obj);
  }
  return scorearr;
}

function dedupeTracks(arr) {
  let id = [];
  let dedup = [];
  for (let tid of arr) {
    if (id.length == 0) {
      id.push(tid["trackId"]);
      dedup.push(tid);
    } else if (!id.includes(tid["trackId"])) {
      id.push(tid["trackId"]);
      dedup.push(tid);
    }
  }
  return dedup;
}

function enforceArtistQuota(arr, no) {
  let eaq = [];
  let artist = {};
  for (let obj of arr) {
    if (artist[obj["artist"]] == undefined) {
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
  let slot = 1;
  let ne = [];
  for (let obj of arr) {
    let trackId = obj["trackId"];
    ne.push({ slot, trackId });
    slot++;
  }
  return ne;
}

console.log(
  buildSchedule(
    enforceArtistQuota(
      dedupeTracks(scoreTracks(flattenPlaylists(playlists))),
      1,
    ),
  ),
);

function remixPlaylist(arr, no) {
  return buildSchedule(
    enforceArtistQuota(dedupeTracks(scoreTracks(flattenPlaylists(arr))), no),
  );
}

remixPlaylist(playlists, 1);
