function scrollHandler() {
    var windowBottom = $(window).scrollTop() + $(window).height();
    // var playlists = $('.playlist');
    // for (var i = 0; i < playlists.length; i++) {
    //     var playlist = $(playlists[i]);

    //     var playlistHalf = playlist.position().top + playlist.outerHeight() / 2;
    //     if (playlistHalf < windowBottom){
    //         playlist.animate({'opacity': '1'}, 1500);
    //     }
    // }

    //for문 말고 each문으로 작성하여 실행해보기 
    $('.playlist').each(function() {
        //console.log$((this));
        var playlist = $(this);
        var playlistHalf = playlist.position().top + playlist.outerHeight() / 2;
        
        if (playlistHalf < windowBottom) {
            playlist.animate({'opacity': '1'}, 1500);
        }
    });   
    console.log($(document).height()); //이내용을 작성해주면 소스검사 후 페이지 높이를 알 수 있음!!
    console.log(windowBottom);

    if (windowBottom == $(document).height()) {
        $('.to-top-btn').fadeIn(); //지금여기까지만 작성하면 스크롤을 내리면 화살표올라가는 표시 버튼이 생김
        //그 다음으로 다시 아래에서 스크롤을 위로 올리면 화살표 버튼이 사라지도록 효과를 주는 코드를 작성해야함!!
    
    } else {
        $('.to-top-btn').fadeOut(); //올라가면 버튼 사라지는 코드
    }
}
$(window).on('scroll', scrollHandler);

//처음 로딩될 때 호출
scrollHandler();

//맨 위로 올라가기 
$('.to-top-btn').on('click', function() {
    $('html, body').animate({scrollTop: 0}, 1000);
});