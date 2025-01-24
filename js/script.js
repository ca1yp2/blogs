$(document).ready(function(){
    $('.main>li').hover(function(){
        if($(this).find('i').hasClass('ri-arrow-down-s-line')){
           $(this).find('i').removeClass('ri-arrow-down-s-line').addClass('ri-arrow-up-s-line');
        }else{
           $(this).find('i').removeClass('ri-arrow-up-s-line').addClass('ri-arrow-down-s-line');
        }
         $(this).find('.sub').fadeToggle(400);
      });
    // $('.myvideo').on('mouseenter',function(){
    //     this.play();
    // });
    // $('.myvideo').on('mouseleave',function(){
    //     this.pause();
    // })
    // $(".myvideo").on("click", function(){
    //     const vdo = $(this).data("vdo");

    //     //소스선택
    //     const $vdo = $("#viewvideo");
    //     const $src = $vdo.finds('src');

    //     $src.attr("src", "vod/"+vdo);
    //     $vdo[0].load();
    //     $vdo[0].play();
    //     $("vdo-popup-back").fadeIn(400);
    // });
    // close 버튼눌러서 닫기
    // $('.close').click(function(){
    //     $('.vdo-popup-back').fadeOut(500)
    // });
    // 오버레이된 바탕화면 눌러서 닫기
    // $('.vdo-popup-back').click(function(){
    //     if($(e.target).is('#')){
    //         $(this).fadeOut(500);
    //     }
    // });
});
// 팝업 열기 함수
function openPopup(videoUrl) {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup-video').src = videoUrl;
}
// 팝업 닫기 함수
function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup-video').src = '';
}