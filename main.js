AOS.init();

var lastClick = -1,
    llastClick = 0;
const content = [`

<div data-aos="fade-right" data-aos-duration="700" class="col-3">
    <div class="list-group list-group-flush">
        <a href="#_announcements" class="list-group-item list-group-item-action active">Announcements «</a>
    </div>
</div>
<div data-aos="fade-left" data-aos-duration="700" class="col-9">
    <h2 id="_announcements">Announcements</h2>
    <h4>Please join us at the Royal Pride Casino Fundraiser for the showcase of our brand new game: DuoDiceM! This game provides
    great fun for everyone legally (and illegally) allowed in a casino.</h4>

</div>

`,`

<div data-aos="fade-right" data-aos-duration="700" class="col-3">
    <div class="list-group list-group-flush">
        <a href="#_how_to_play" class="list-group-item list-group-item-action active">How to Play «</a>
        <a href="#_how_to_win" class="list-group-item list-group-item-action">How to Win «</a>
    </div>
</div>
<div data-aos="fade-left" data-aos-duration="700" class="col-9">
    <h2 id="_how_to_play">How to Play</h2>
    <p>The game is simple. </br></p>
    <p>Both the player and the dealer get 2 dice each. The only difference is that the dealer gets 2 regular, 6-sided dice with numbers 1-6 on the sides whereas the 
    player gets 2 dodecahedron, or 12-sided, dice with four 1's, four 2's, and four 3's on the sides.</br></p>
    <p>The value that the dealer rolls is determined by the highest number that is face-up on the 2 dice. So, if the dealer rolls a 3 and a 5, then the value of the roll would be 5.</br></p>
    <p>The value that the player rolls is determined by the sum of the 2 values face-up on the dice. So, if the player rolls a 2 and a 3, then the value of the roll would be 5.</br></p>
    <p>See?</br></p>
    <p>It's easy! And purely based on luck... the perfect game for beginners at the casino!</br></p>
    <h2 id="_how_to_win">How to Win</h2>
    <p>In order to win, the player must roll a higher value than the dealer.</br></p>
    <p>However, if the dealer and player roll the same value OR the dealer rolls a value higher than the player, then the dealer wins.</p>
</div>
`,`
<div data-aos="fade-right" data-aos-duration="700" class="col-3">
    <div class="list-group list-group-flush">
        <a href="#_announcements" class="list-group-item list-group-item-action active">Why Should You Play? «</a>
        <a href="#_potential_profit" class="list-group-item list-group-item-action">Potential Profit «</a>
    </div>
</div>
<div data-aos="fade-left" data-aos-duration="700" class="col-9">
    <h2 id="_announcements">Why Should You Play?</h2>
    <p>DuoDiceM is an extremely easy game to play!</br></p>
    <p>It is the perfect game for people looking for a relaxed (and profitable) trip to the casino!</br></p>
    <p>Not only is it a fair 2v2 game, but it is also purely based on luck! So, for those that may not frequent the casino, 
    DuoDiceM is the perfect game for you!</br></p>
    <h2 id="_potential_profit">Potential Profit</h2>
    <p>DuoDiceM only costs $3 to play!</br></p>
    <p>Not only is it cheap, but there's a lot of room to profit! If you win, you get $10 back, so you make $7! So, you're making
    $2.33 for every dollar you put in!</br></p>
    <p>In addition to potential profit by winning, you can also make side bets with your money! You are able to bet on what you
    think both the dealer and yourself will roll.</p>
    <p><small>*Payout odds for side bets will vary depending on the casino.</small></p>
</div>

`,`

<div data-aos="fade-right" data-aos-duration="700" class="col-3">
    <div class="list-group list-group-flush">
        <a href="#_questions" class="list-group-item list-group-item-action active">Questions «</a>
    </div>
</div>
<div data-aos="fade-left" data-aos-duration="700" class="col-9">
    <h3 id="_q1">Why is it called DuoDiceM?</h2>
    <p>The Latin word for twelve is <i>duodecim</i>, so the creators of DuoDiceM just changed some letters around and - voila! -
    the name DuoDiceM was created as a clever name for a dice game.</br></p>
    <h3 id="_q2">How can we contact the creators directly?</h3>
    <p>You can't. The creators have decided to remain anonymous in order to avoid any threats if a person would happen to lose
    lots of money playing DuoDiceM.</br></p>
    <h3 id="_q3">Can DuoDiceM be played at home?</h3>
    <p>DuoDiceM is currently only meant to be played in a casino environment, but in the future it may be available in select
    retailers.</br></p>
</div>

`];

function go(num) {
    if(lastClick != num) {
        $(".row:nth-child(3)").html(content[num]);
        $(".nav-item.active").removeClass("active");
        $(".nav-item").eq(num).addClass("active");
        lastClick = num;

        $(document).ready(function() {
            $(".list-group-item").click(function() {
                $(".list-group-item.active").removeClass("active");
                $(this).addClass("active");
            });
        });
    }
}

go(0);