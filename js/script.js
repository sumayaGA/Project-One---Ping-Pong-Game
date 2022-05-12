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

// Move ball
function moveBall () {

}

// Get API Data 
const promise = {
	"async": true,
	"crossDomain": true,
	"url": "https://yusufnb-quotes-v1.p.rapidapi.com/widget/~einstein.json",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Host": "yusufnb-quotes-v1.p.rapidapi.com",
		"X-RapidAPI-Key": "dd77245c2dmsh2b81e4a56e3cce7p1b2550jsn876a0af7b91f"
	}
};

$.ajax (promise).then (
    (data) => {
        console.log(data);
        let html = `<p> "${data.quote}"</p> <p> Author: ${data.by}</p>`;
            $('#quote').html(html);
    },
    (error) => {
        console.log ("bad request: ", error);
    });