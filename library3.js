class Library {
  constructor(name, creator, playlist) {
    this.name = name
    this.creator = creator
    this.playlist = playlist
  }

  addToPlaylist(playlist) {
    return this.playlist.push(playlist)
  }
}

class Track {
  constructor(title, rating, length) {
    this.title = title
    this.rating = rating
    this.length = length
  }


}

class Playlist {
  constructor(name, tracks){
    this.name = name
    this.tracks = []
  }

  addToTracks(track){
    return this.tracks.push(track)
  }


}
// var test = new Playlist('playlist1')
// console.log(test.name)
// Get user input
const createTrack = (title, rating, length) => {
  const testTrack = new Track(title, rating, length)
  // playlistname.addToTracks(testTrack)
  return testTrack
}

console.log(createTrack('track1', 2, 180).title)
// var test = new Track('title1', 2, 180)
// console.log(test2t.title)
// console.log(test.rating)
// console.log(test.length)

// var library = {
//   tracks: { t01: { id: "t01",
//                    name: "Code Monkey",
//                    artist: "Jonathan Coulton",
//                    album: "Thing a Week Three" },
//             t02: { id: "t02",
//                    name: "Model View Controller",
//                    artist: "James Dempsey",
//                    album: "WWDC 2003"},
//             t03: { id: "t03",
//                    name: "Four Thirty-Three",
//                    artist: "John Cage",
//                    album: "Woodstock 1952"}
//           },
//   playlists: { p01: { id: "p01",
//                       name: "Coding Music",
//                       tracks: ["t01", "t02"]
//                     },
//                p02: { id: "p02",
//                       name: "Other Playlist",
//                       tracks: ["t03", "t01"]
//                     }
//              },

// class Library {
//   constructor(tracks, playlists){
//     this.tracks = tracks
//     this.playlists = playlists
//   }

//   addTrack(track) {
//     return this.tracks.push(track)
//   }
// }

// class Playlist {
//   constructor(...)
//     this....
// }
// var test2 = new Playlist()

// class Track {
//   constructor(...)
//   this....
// }

// addTrack: function (name, artist, album){
//   var newTrack = {};
//   var newTrackList = {};
//   newTrackList['id'] = this.uid();
//   newTrackList['name'] = name;
//   newTrackList['artist'] = artist;
//   newTrackList['album'] = album;
//   var trackList = Object.keys(this['tracks']);
//   var newTrackName;
//   if (trackList.length < 10){
//     newTrackName = "t0" + (trackList.length + 1);
//   } else {
//     newTrackName = "t" + (trackList.length + 1);
//   }
//   return this['tracks'][newTrackName] = newTrackList;
//   },

// var test = new Library(test2, )
// // test.tracks

//   printAllPlaylists: function(){
//   // var playlist = this['playlists'];
//   var list = [];
//   playlistTitle = Object.keys(this['playlists']);
//     playlistTitle.forEach((title) => {
//       var titleName = this['playlists'][title]['name'];
//       var trackLength = Object.keys(this['playlists'][title]['tracks']);
//       list.push(title + ": " + titleName + " - " + trackLength.length + " tracks");
//     })
//   return list;
//   },

//   printAllTracks: function(){
//   // var tracks = this['tracks']
//   var list = [];
//   var track = Object.keys(this['tracks']);
//     track.forEach((allTracks) => {
//       var trackName = this['tracks'][allTracks]['name'];
//       var trackArtist = this['tracks'][allTracks]['artist'];
//       var trackAlbum = this['tracks'][allTracks]['album'];
//       list.push(allTracks + ": " + trackName + "by " + trackArtist + " (" + trackAlbum + ")");
//     })
//   return list;
//   },

//   printPlaylist: function (playlistId){
//   // var library = this;
//   var playlist = this['playlists'][playlistId];
//   var playlistName = this['playlists'][playlistId]['name'];
//   var playlistTrack = this['playlists'][playlistId]['tracks'];

//   var fullPlaylist = [playlistId + ": " + playlistName + " - " + playlistTrack.length + " tracks"];

//   playlistTrack.forEach( (trackTitle) => {
//     var trackName = this['tracks'][trackTitle]['name'];
//     var trackArtist = this['tracks'][trackTitle]['artist'];
//     var trackAlbum = this['tracks'][trackTitle]['album'];

//     fullPlaylist.push(trackTitle + ": " + trackName + " by " + trackArtist + " (" + trackAlbum + ")");
//   })
//   return fullPlaylist;
//   },

//   addTrackToPlaylist: function (trackId, playlistId){
//   if (!this['playlists'][playlistId]){
//     return playlistId + " does not exist in this library."
//   }
//   console.log("Added " + trackId + " to " + playlistId + ".")
//   return this['playlists'][playlistId]['tracks'].push(trackId);
//   },

//   uid: function(){
//     return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
//   },

//   addTrack: function (name, artist, album){
//   var newTrack = {};
//   var newTrackList = {};
//   newTrackList['id'] = this.uid();
//   newTrackList['name'] = name;
//   newTrackList['artist'] = artist;
//   newTrackList['album'] = album;
//   var trackList = Object.keys(this['tracks']);
//   var newTrackName;
//   if (trackList.length < 10){
//     newTrackName = "t0" + (trackList.length + 1);
//   } else {
//     newTrackName = "t" + (trackList.length + 1);
//   }
//   return this['tracks'][newTrackName] = newTrackList;
//   },

//   addPlaylist: function (name){
//   var newPlaylistContent = {};
//   newPlaylistContent['id'] = this.uid();
//   newPlaylistContent['name'] = ''
//   newPlaylistContent['tracks'] = [];
//   var playlist = Object.keys(library['playlists']);
//   var newPlaylistName;
//   if (playlist.length < 10){
//     newPlaylistName = "p0" + (playlist.length + 1)
//   } else {
//     newPlaylistName = "p" + (playlist.length + 1)
//   }
//   return this['playlists'][name] = newPlaylistContent;
//   }

// }

// // SELF TESTING

// // console.log(library.printAllPlaylists())
// // console.log(library.printAllTracks())
// // console.log(library.printPlaylist('p02'))
// // console.log(library.addTrackToPlaylist("t04", "p01"))
// // library.addTrack("name04", "artist04", "album04")
// // console.log(library)
// // library.addPlaylist("p03")
// // console.log(library)

// // STRETCH:
// // given a query string string, prints a list of tracks
// // where the name, artist or album contains the query string (case insensitive)
// // tip: use "string".search("tri")
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {

// }