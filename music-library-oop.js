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

// // Playlist Prototype

// class Playlist {

//   // Each Playlist has a name which is required upon creation
//   this.name = name
//   // A Playlist also has many tracks
//   this.tracks = []

// }

//   // Function to add tracks

//   // Each Playlist also has an overallRating function which will calculate the rating by averaging the rating of its tracks

//   // Each Playlist also has a totalDuration function which will sum the duration of all of its tracks

// }

// // Track Prototype

// class Track {
//   constructor(title, rating, length) {
//     // A Track has a title, a rating(an integer from 1 to 5) and a length(integer in seconds) all of which are required when creating a new track
//     this.title = title
//     this.rating = rating
//     this.length = length
//   }
// }



// Tests

// Create a library
let nicoleMusic = new Library('Nicole\'s library', 'Nicole')
// Add playlist to library
nicoleMusic.addPlaylist('Slow Jams')

// // new playlists
// let alternative = new Playlist("Nineties Alternative Rock")

// // new tracks
// let nicoleMusic = new Track("", )

// // 2. add new tracks to the playlist

// // 3. add playlists to the library

console.log(nicoleMusic)