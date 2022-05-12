const $table = $("#pongTable");
const $player = $("#player_paddle");
const $computer = $("#computer_paddle");
const $ball = $("#ball");
const $quote = $("#quote");

console.log($quote.html())

// Player ability to move paddle with mouse 
$table.mousemove(function(event) {
    const top = Math.min(
        $table.height() - $player.height(), 
        event.pageY - $table.offset().top
    )
    $player.css({
        top: `${top}px`
    });
});

// Move computer paddle up/down continously
// How do you get paddle to slide down entire Ping-pong table?

$(document).ready(function() {
    $computer.height($table.height());
    setInterval(function(event) {
        $computer.slideUp(1500, function() {
            $computer.slideDown(1500);
        });
    }, 1000);
});


