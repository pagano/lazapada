include('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js');
include('bootstrapcss', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css');
include('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js');
debugger;
var $b = $(body);
$b.attr('cz-shortcut-listen', 'true');
$b.css('background', '#EEEAE7');
$b.append(`
  <div class="hero-image rotate"></div>
  <div>
    <div class="container header-container">
      <div class="row text-center">
        <div class="col-md-12">
          <h1 class="title">Welcome to La Zapada!</h1>
          <h2 class="subtitle">A jam band from Argentina &#x1f1e6;&#x1f1f7;</h2>
        </div>
      </div>
    </div>
    <div class="container playing-container">
      <div style="justify-content: center;" class="row">
        <div style="max-width: 700px;" class="text-start">
          <div class="section-jam">
            <h3>Ninjam room</h3>
            <p>Join to <b>lazapada.net:2049</b> with 
              <a href="https://github.com/elieserdejesus/JamTaba/wiki/Jamtaba%27s-user-guide" target="_blank">Jamtaba</a>
              or <a href="https://drive.google.com/file/d/1EEuCw-Uboeoq_tkRgOkXBPoDfz6t9L1w/view?usp=sharing" target="_blank">Reaper</a>
            </p>
            <div class="playing-now">
              <label>Playing now: </label><br />
              <span id="playing_1"></span>
            </div>
            <audio id="audio_1" controls="" preload="none">
              <source src="http://lazapada.net:8000/live?type=http&amp;nocache=183" type="audio/mpeg">
            </audio>
            <div class="listeners">
              <label><span id="listeners_1">0</span> listeners</label>
            </div>
            <hr>
            <p>
              Si hay alguien tocando ahora podes escuchar el vivo dandole al play. 
              Tambien podes unirteles con los programas linkeados arriba.
            </p>
            <hr>
            <h3>Video room</h3>
            <p>
              <li><a href="https://vdo.ninja/?scene&room=LaZapada&showdirector=true" target="_blank">View Live Jam Video
              <li><a href="https://vdo.ninja/?room=LaZapada" target="_blank">Join to Live jam Video
            </p>
          </div>
        </div>
      </div>
    <div class="row">
    <div class="footer fixed-bottom">
      &#x1F377;&#x1F350
    </div>
  </div>
`);

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