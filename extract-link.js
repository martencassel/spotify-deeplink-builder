// Extract Playlist Link (PLAYLIST_ID, PLAYLIST_SI)
playlist_link = "https://open.spotify.com/playlist/6X2pHYQ2jqVkuu2X75Irou?si=cc6abbef69f14be6"
track_link = "https://open.spotify.com/track/3e8Cb8WuC3VMBKmNL6rj1Y?si=c374a242c5eb4bbe"

function GetTrackPlaylistUrl(playlist_link, track_link) {
    playlist_link = playlist_link.replace("https://open.spotify.com/playlist/", "")
    playlist_link_components = playlist_link.split("?")
    playlist_id = playlist_link_components[0]
    playlist_si = playlist_link_components[1].split('=')[1]
    console.log('PLAYLIST_ID: ' + playlist_id)
    console.log('PLAYLIST_SI: ' + playlist_si)
    track_link = track_link.replace("https://open.spotify.com/track/", "")
    track_link_components = track_link.split("?")
    track_id = track_link_components[0]
    track_si = track_link_components[1].split('=')[1]
    console.log('TRACK_ID: ' + track_id)
    console.log('TRACK_SI: ' + track_si)
    let track_playlist_link = `https://open.spotify.com/track/${track_id}?context=spotify:playlist:${playlist_id}&si=${playlist_si}`
    return track_playlist_link;
}
console.log('Playlist Link: ' + playlist_link)
console.log('Track Link: ' + track_link)
result =  GetTrackPlaylistUrl(playlist_link, track_link)
console.log(result)
