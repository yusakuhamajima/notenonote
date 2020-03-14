for (let w = 0; w < playlists.length; w++) {
    document.write('<h3>' + playlists[w]['weeks'] + 'weeks' + '</h3>');
    var plylsweeks = playlists[w];
    for (let i = 0; i < plylsweeks['tracks'].length; i++) {
        var num = i + 1;
        document.write(num + '. ' + plylsweeks['tracks'][i]['title'] + ' | ' + plylsweeks['tracks'][i]['artist'] + '<br>');
    }
}