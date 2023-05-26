var incs = [];
incs.push({ id: 'bootstrap', src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js' });
incs.push({ id: 'bootstrapcss', src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css' });
incs.push({ id: 'jquery', src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js' });
incs.push({ id: 'indexcss', src: gitCdn(Object.assign(gitParams, { path: 'web/index.css' })) });

var $d, $b;

include(incs).then(async () => {
  var $d = $(document);
  var $b = $(document.body);
  $b.attr('cz-shortcut-listen', 'true');
  $b.css('background', '#EEEAE7');
  var res = await fetch(gitCdn(Object.assign(gitParams, { path: 'web/index.htm' })));
  $b.append(await res.text());

  $d.ready(getStats);
  setInterval(getStats, 10000);
});

async function getStats() {
  var res = await fetch('http://lazapada.net:8000/statistics?json=1');
  var jsn = await res.json();
  debugger;

  $.ajax({
    url: 'http://lazapada.net:8000/statistics?json=1',
    dataType: 'JSONP',
    type: 'GET',
    success: function (data) {
        $('#listeners_1').html(data.streams[0].currentlisteners);
        $('#playing_1').html(data.streams[0].songtitle);
    }
  });
}
