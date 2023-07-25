const spotifyApi =require('../config/spotify.config')

module.exports.search= (req, res) => {
    spotifyApi.searchArtists('name')
      .then((search) => {
        
        res.render("artist/search", { search });
      })
      .catch(err => console.log('The error while searching artists occurred: ', err));
  };

  module.exports.results = (req,res) => {
    res.render("/artist/artist-search-results", {results})
  }