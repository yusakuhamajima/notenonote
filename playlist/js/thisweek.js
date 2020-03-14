let catchcopy = "<h2>" + weekno + "weeks" + "</h2>";
document.write(catchcopy);

document.write('<ul>');

var plylsweeks = playlists[weekno - 1];
console.log(plylsweeks);
for (let i = 0; i < plylsweeks['tracks'].length; i++) {
  var num = i + 1;
  document.write('<li>' + num + '. ' + plylsweeks['tracks'][i]['title'] + ' | ' + plylsweeks['tracks'][i]['artist'] + '</li>');
}

document.write('</ul>');
