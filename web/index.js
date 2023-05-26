debugger;

var incs = [];
incs.push({ id: 'bootstrap', src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js' });
incs.push({ id: 'bootstrapcss', src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css' });
incs.push({ id: 'jquery', src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js' });
incs.push({ id: 'indexcss', src: gitCdn({ owner: 'pagano', repo: 'lazapada', path: 'web/index.css', url: true, fresh: true }) });

include(incs).then((res) => {
  var $b = $(document.body);
  $b.attr('cz-shortcut-listen', 'true');
  $b.css('background', '#EEEAE7');
  $b.append(`
  `);  
});

/*
</link>
var lastPlaying;

$(document).ready(getStats);
setInterval(getStats, 10000);

function getStats() {
    $.ajax({
        url: "http://lazapada.net:8000/statistics?json=1",
        dataType: 'JSONP',
        type: "GET",
        success: function (data) {
            $('#listeners_1').html(data.streams[0].currentlisteners);
            $('#playing_1').html(data.streams[0].songtitle);
            
            /
            // Esta parte actualizaba el player de la radio, que ya no esta
            $('#listeners_2').html(data.streams[1].currentlisteners);

            var playing = data.streams[1].songtitle;
            var next = data.streams[1].nexttitle;
            if (!lastPlaying) {
                // 1er seteo
                chPlaying2(playing, next);
                lastPlaying = playing;
            } else {
                if (playing != lastPlaying) {
                    var a2 = $('#audio_2')[0];
                    if (a2.buffered.length > 0) {
                        // Esta en play, cambia cdo termine lo que tengo en buffer
                        var buff = a2.buffered.end(0) - a2.buffered.start(0);
                        console.log('buff: ' + buff);
                        setTimeout(chPlaying2, buff * 1000, playing, next);
                    } else {
                        // No esta en play, cambia ya
                        chPlaying2(playing, next);
                    }
                    lastPlaying = playing;
                }
            }
            /
        }
    });
}

function chPlaying2(curr, next) {
    $('#playing_2').html(curr);
    $('#next_2').html(next);
}
*/