// Library Prototype
const Library = function(name, creator) {
    // A Library has a name and a creator(both strings)
    // These are the only things required in order to create a music library (constructors)
    this.name = name
    this.creator = creator
    // A Library has many playlists(starts as an empty array)
    this.playlists = []
}

// Playlist objects can be added to an instance of a library
Library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist)
}

// Playlist Prototype
const Playlist = function(name) {
  // Each Playlist has a name which is required upon creation
  this.name = name
  // A Playlist also has many tracks
  this.tracks = []
}

// Add tracks to playlist
Playlist.prototype.addTracks = function (track) {
  this.tracks.push(track)
}

// Each Playlist also has an overallRating function which will calculate the rating by averaging the rating of its tracks
Playlist.prototype.overallRating = function () {
  let totalScore = 0
  for (track of this.tracks) {
    totalScore += track.rating
  }
  return Math.round(totalScore / this.tracks.length)
}

// Each Playlist also has a totalDuration function which will sum the duration of all of its tracks
Playlist.prototype.totalDuration = function () {
  let totalDuration = 0
  for (track of this.tracks) {
    totalDuration += track.duration
  }
  return totalDuration
}

// Track Prototype
const Track = function (title, rating, duration) {
    // A Track has a title, a rating(an integer from 1 to 5) and a length(integer in seconds) all of which are required when creating a new track
    this.title = title
    this.rating = rating
    this.duration = duration
}

// Create a library
let nicoleMusic = new Library('Nicole\'s library', 'Nicole')

// Create some playlists
let p01 = new Playlist("Nineties Alternative Rock")
let p02 = new Playlist("RnB Slow Jams")
let p03 = new Playlist("My Favs")

// Create some  tracks
let t01 = new Track("Smells Like Team Spirit", 4, 180)
let t02 = new Track("1979", 3, 234)
let t03 = new Track("Jeremy", 3, 203)
let t04 = new Track("You Oughta Know", 5, 252)
let t05 = new Track("Wicked Games", 5, 130)
let t06 = new Track("Take Care of You", 3, 254)
let t07 = new Track("Kiss Land", 2, 263)

// Add playlists to library
nicoleMusic.addPlaylist(p01)
nicoleMusic.addPlaylist(p02)
nicoleMusic.addPlaylist(p03)

// Add tracks to playlist
p01.addTracks(t01)
p01.addTracks(t02)
p01.addTracks(t03)
p01.addTracks(t04)
p02.addTracks(t05)
p02.addTracks(t06)
p02.addTracks(t07)
p03.addTracks(t01)
p03.addTracks(t04)
p03.addTracks(t05)

// Tests
console.log(`This is ${nicoleMusic.name}:\n`,nicoleMusic)
console.log(`\nHere are the tracks in the ${p01.name} playlist:\n`, p01.tracks)
console.log(`\nHere is the overall raiting of the ${p03.name} playlist: ${p03.overallRating()}`)
console.log(`\nHere is the total length of the ${p02.name} playlist: ${p02.totalDuration()} seconds`)