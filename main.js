AOS.init();

var lastClick = 0;
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
        <a href="#_announcements" class="list-group-item list-group-item-action active">How to Play «</a>
        <a href="#_footer" class="list-group-item list-group-item-action">How to Win «</a>
    </div>
</div>
<div data-aos="fade-left" data-aos-duration="700" class="col-9">
    <h2 id="_announcements">How to Play</h2>
    <p></br>The game is simple. </br></p>
    <p>Both the player and the dealer get 2 dice each. The only difference is that the dealer gets 2 regular, 6-sided dice with numbers 1-6 on the sides whereas the 
    player gets 2 dodecahedron, or 12-sided, dice with four 1's, four 2's, and four 3's on the sides.</br></p>
    <p>The value that the dealer rolls is determined by the highest number that is face-up on the 2 dice. So, if the dealer rolls a 3 and a 5, then the value of the roll would be 5.</br></p>
    <p>The value that the player rolls is determined by the sum of the 2 values face-up on the dice. So, if the player rolls a 2 and a 3, then the value of the roll would be 5.</br></p>
    <p>See?</br></p>
    <p>It's easy! And purely based on luck... the perfect game for beginners at the casino!</p>
</div>
`,`
<div data-aos="fade-right" data-aos-duration="700" class="col-3">
    <div class="list-group list-group-flush">
        <a href="#_announcements" class="list-group-item list-group-item-action active">Announcements «</a>
        <a href="#_footer" class="list-group-item list-group-item-action">Other «</a>
    </div>
</div>
<div data-aos="fade-left" data-aos-duration="700" class="col-9">
    <h2 id="_announcements">Announcements</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum augue in nisi elementum, quis congue mauris suscipit. Ut ut dui faucibus, mollis nisi in, volutpat diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus non nisi hendrerit, molestie sem ac, dapibus nibh. Vestibulum condimentum ac justo ac vehicula. Sed rhoncus ante sit amet elit volutpat convallis. Fusce in orci a odio pellentesque faucibus ut sit amet ligula. Donec eu tellus elit. Nullam scelerisque iaculis facilisis. Suspendisse potenti. Ut vel sodales risus, varius efficitur risus.</p>
</div>
`,`
<div data-aos="fade-right" data-aos-duration="700" class="col-3">
    <div class="list-group list-group-flush">
        <a href="#_announcements" class="list-group-item list-group-item-action active">Announcements «</a>
        <a href="#_footer" class="list-group-item list-group-item-action">Other «</a>
    </div>
</div>
<div data-aos="fade-left" data-aos-duration="700" class="col-9">
    <h2 id="_announcements">Announcements</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum augue in nisi elementum, quis congue mauris suscipit. Ut ut dui faucibus, mollis nisi in, volutpat diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus non nisi hendrerit, molestie sem ac, dapibus nibh. Vestibulum condimentum ac justo ac vehicula. Sed rhoncus ante sit amet elit volutpat convallis. Fusce in orci a odio pellentesque faucibus ut sit amet ligula. Donec eu tellus elit. Nullam scelerisque iaculis facilisis. Suspendisse potenti. Ut vel sodales risus, varius efficitur risus.</p>
</div>
`];

function go(num) {
    if(lastClick != num) {
        $(".row:nth-child(3)").html(content[num]);
        $(".nav-item.active").removeClass("active");
        $(".nav-item").eq(num).addClass("active");
        lastClick = num;
    }
}

go(0);
