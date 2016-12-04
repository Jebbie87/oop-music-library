const createTrack = (title, rating, length) => {
  const newTrack = new Track(title, rating, length)
  return newTrack
}
const newPlaylist = (playlistName) => {
  return new Playlist(playlistName)
}

const addTrackToPlaylist = (playlist, track) => {
  return playlist.addToTracks(track)
}
const convertSecondsToTime = (totalSeconds) => {
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor(((totalSeconds % 86400) % 3600) / 60);
  const seconds = ((totalSeconds % 86400) % 3600) % 60;
  let totalTime = `${hours}:`;

  if (minutes < 10) {
    totalTime += `0${minutes}:${seconds}`;
  } else if (seconds < 10) {
    totalTime += `${minutes}:0${seconds}`;
  } else {
    totalTime += `${minutes}:${seconds}`;
  }
  return totalTime;
}

class Library {
  constructor(name, creator, playlist) {
    this.name = name
    this.creator = creator
    this.playlist = []
  }

  addToPlaylist(playlist) {
    return this.playlist.push(playlist)
  }
}

class Playlist {
  constructor(name, tracks) {
    this.name = name
    this.tracks = []
  }

  addToTracks(track){
    return this.tracks.push(track)
  }

  overallRating(){
    let averageRating = 0;
    this.tracks.forEach(function(track) {
      averageRating += track.rating
    })
    return averageRating / this.tracks.length
  }

  totalDuration(){
    let totalTime = 0;
    this.tracks.forEach(function(track){
      totalTime += track.length
    })
    return convertSecondsToTime(totalTime)
  }

  printPlaylist(){
    return this.tracks
  }
}

class Track {
  constructor(title, rating, length) {
    this.title = title
    this.rating = rating
    this.length = length
  }
}

const playlist1 = new Playlist('playlist1')
const test = createTrack('track1', 5, 180)
const track = createTrack('track2', 4, 130)
addTrackToPlaylist(playlist1, test)
addTrackToPlaylist(playlist1, track)

// console.log(playlist1.tracks)

const newLibrary = new Library ('library1', 'jeffrey')
newLibrary.addToPlaylist(playlist1)
console.log(newLibrary.playlist)