//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  
import musicService from'./music-group-service.js';

(async () => {
  const _service = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);
  let data = await _service.readMusicGroupsAsync(pageNr, 10, false, null);
  console.log(data);
  let ul = document.querySelector('#bandList');
  data.forEach(musicGroup => {
    let li = document.createElement('div');
    li.innerText = musicGroup.name;
    li.className = 'col-md-12 themed-grid-col';
    ul.appendChild(li);
  });
})();


let musicBands = ['The Beatles', 'The Rolling Stones', 'The Who', 'The Kinks', 'The Animals', 'The Yardbirds', 'The Zombies', 'The Hollies', 'The Byrds',];
let ul = document.querySelector('#bandList');
musicBands.forEach(band => {
  let li = document.createElement('div');  
  li.innerText = band;
  li.className = 'col-md-12 themed-grid-col';
  ul.appendChild(li);
});

