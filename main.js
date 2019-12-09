AOS.init();

var lastClick = 0;
const content = [`
<div data-aos="fade-right" data-aos-duration="700" data-aos-delay="200" class="col-3">
    <div class="list-group list-group-flush">
        <a href="#_announcements" class="list-group-item list-group-item-action active">Announcements «</a>
        <a href="#_footer" class="list-group-item list-group-item-action">Other «</a>
    </div>
</div>
<div data-aos="fade-left" data-aos-duration="700" data-aos-delay="200" class="col-9">
    <h2 id="_announcements">Announcements</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum augue in nisi elementum, quis congue mauris suscipit. Ut ut dui faucibus, mollis nisi in, volutpat diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus non nisi hendrerit, molestie sem ac, dapibus nibh. Vestibulum condimentum ac justo ac vehicula. Sed rhoncus ante sit amet elit volutpat convallis. Fusce in orci a odio pellentesque faucibus ut sit amet ligula. Donec eu tellus elit. Nullam scelerisque iaculis facilisis. Suspendisse potenti. Ut vel sodales risus, varius efficitur risus.</p>
</div>
`,`
<div data-aos="fade-right" data-aos-duration="700" data-aos-delay="200" class="col-3">
    <div class="list-group list-group-flush">
        <a href="#_announcements" class="list-group-item list-group-item-action active">Announcements «</a>
        <a href="#_footer" class="list-group-item list-group-item-action">Other «</a>
    </div>
</div>
<div data-aos="fade-left" data-aos-duration="700" data-aos-delay="200" class="col-9">
    <h2 id="_announcements">Announcements</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum augue in nisi elementum, quis congue mauris suscipit. Ut ut dui faucibus, mollis nisi in, volutpat diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus non nisi hendrerit, molestie sem ac, dapibus nibh. Vestibulum condimentum ac justo ac vehicula. Sed rhoncus ante sit amet elit volutpat convallis. Fusce in orci a odio pellentesque faucibus ut sit amet ligula. Donec eu tellus elit. Nullam scelerisque iaculis facilisis. Suspendisse potenti. Ut vel sodales risus, varius efficitur risus.</p>
</div>
`,`
<div data-aos="fade-right" data-aos-duration="700" data-aos-delay="200" class="col-3">
    <div class="list-group list-group-flush">
        <a href="#_announcements" class="list-group-item list-group-item-action active">Announcements «</a>
        <a href="#_footer" class="list-group-item list-group-item-action">Other «</a>
    </div>
</div>
<div data-aos="fade-left" data-aos-duration="700" data-aos-delay="200" class="col-9">
    <h2 id="_announcements">Announcements</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum augue in nisi elementum, quis congue mauris suscipit. Ut ut dui faucibus, mollis nisi in, volutpat diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus non nisi hendrerit, molestie sem ac, dapibus nibh. Vestibulum condimentum ac justo ac vehicula. Sed rhoncus ante sit amet elit volutpat convallis. Fusce in orci a odio pellentesque faucibus ut sit amet ligula. Donec eu tellus elit. Nullam scelerisque iaculis facilisis. Suspendisse potenti. Ut vel sodales risus, varius efficitur risus.</p>
</div>
`,`
<div data-aos="fade-right" data-aos-duration="700" data-aos-delay="200" class="col-3">
    <div class="list-group list-group-flush">
        <a href="#_announcements" class="list-group-item list-group-item-action active">Announcements «</a>
        <a href="#_footer" class="list-group-item list-group-item-action">Other «</a>
    </div>
</div>
<div data-aos="fade-left" data-aos-duration="700" data-aos-delay="200" class="col-9">
    <h2 id="_announcements">Announcements</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum augue in nisi elementum, quis congue mauris suscipit. Ut ut dui faucibus, mollis nisi in, volutpat diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus non nisi hendrerit, molestie sem ac, dapibus nibh. Vestibulum condimentum ac justo ac vehicula. Sed rhoncus ante sit amet elit volutpat convallis. Fusce in orci a odio pellentesque faucibus ut sit amet ligula. Donec eu tellus elit. Nullam scelerisque iaculis facilisis. Suspendisse potenti. Ut vel sodales risus, varius efficitur risus.</p>
</div>
`];

function go(num) {
    if(lastClick != num) {
        $(".row:nth-child(3)").html(content[num]);
        lastClick = num;
    }
}
