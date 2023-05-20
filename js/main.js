var lastScrollTop = 0;

window.addEventListener('DOMContentLoaded', function () {

    var scrollTop = $(this).scrollTop();

    setTimeout(() => {
        $('#section01 .title01_01').addClass('on');
        $('#section01 .title02_01').addClass('on');
        $('#section01 .title03_01').addClass('on');
    },200)   
    setTimeout(() => {
        $('#section01 .title04_01').addClass('on');
        $('#section01 .title05_01').addClass('on');
        $('#section01 .title06_01').addClass('on');
        $('#section01 .title07_01').addClass('on');
    },500)  
    setTimeout(() => {
        $('#section01 .title06_01').addClass('on');
        $('#section01 .title07_01').addClass('on');
    },900)  

    $("#container").each(function () {
        var contentIndex = $(this).attr("id");
        if(scrollTop >= $(this).offset().top) {
            $(".scroll_03 a").removeClass("on");
            $(".scroll_03 a[href=#"+contentIndex+"]").addClass("on");
        }
    })


    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)


        if(scrollTop >= 1414){
            $('.process_01').addClass('on');
        }
        if(scrollTop >= 1444){
            $('.summary_01').addClass('on');
        }
        if(scrollTop >= 2590){
            $('.graph01_1_02').addClass('on');
        }
        if(scrollTop >= 2620){
            $('.graph01_2_02').addClass('on');
        }
        if(scrollTop >= 2668){
            $('.graph01_3_02').addClass('on');
        }
        if(scrollTop >= 2738){
            $('.graph01_4_02').addClass('on');
        }
        if(scrollTop >= 2830){
            $('.graph01_5_02').addClass('on');
        }
        if(scrollTop >= 2700){
            $('.graph02_2_02').addClass('on');
        }
        if(scrollTop >= 3448){
            $('.research01_03').addClass('on');
        }
        if(scrollTop >= 3540){
            $('.research02_03').addClass('on');
        }
        if(scrollTop >= 3600){
            $('.research03_03').addClass('on');
        }
        if(scrollTop >= 4480){
            $('.real_problem02_03').addClass('on');
        }
        if(scrollTop >= 4840){
            $('.hmm02_03').addClass('on');
        }
        if(scrollTop >= 5495){
            $('.affinity_04').addClass('on');
        }
        if(scrollTop >= 6250){
            $('.insight01_04').addClass('on');
        }
        if(scrollTop >= 6250){
            $('.insight03_04').addClass('on');
        }
        if(scrollTop >= 7110){
            $('.persona01_2_05').addClass('on');
        }
        if(scrollTop >= 7110){
            $('.persona02_2_05').addClass('on');
        }
        if(scrollTop >= 7540){
            $('.journey_map_05').addClass('on');
        }
        if(scrollTop >= 8768){
            $('.text01_06').addClass('on');
        }
        if(scrollTop >= 9086){
            $('.text02_06').addClass('on');
        }
        if(scrollTop >= 9420){
            $('.text03_06').addClass('on');
        }

        if(scrollTop >= 10160){
            $('.text01_07').addClass('on');
        }
        if(scrollTop >= 10467){
            $('.text02_07').addClass('on');
        }
        if(scrollTop >= 10990){
            $('.text03_07').addClass('on');
        }
        if(scrollTop >= 11503){
            $('.solution01_07').addClass('on');
        }
        if(scrollTop >= 11554){
            $('.solution02_07').addClass('on');
        }
        if(scrollTop >= 11620){
            $('.solution03_07').addClass('on');
        }
        if(scrollTop >= 11690){
            $('.solution04_07').addClass('on');
        }
        if(scrollTop >= 13712){
            $('.text02_08').addClass('on');
        }
        if(scrollTop >= 13980){
            $('.mockup03_08').addClass('on');
        }
        if(scrollTop >= 14897){
            $('.button_08').addClass('on');
        }
        if(scrollTop >= 14754){
            $('.title03_08').addClass('on');
        }
        if(scrollTop >= 15770){
            $('.title_09').addClass('on');
        }
        if(scrollTop >= 16200){
            $('.background01_09').addClass('on');
        }
       
        if(scrollTop >= 16042){
            $('.image01_09').addClass('on');
        }
        if(scrollTop >= 16380){
            $('.mockup03_09').addClass('on');
        }
        if(scrollTop >= 16690){
            $('.mockup04_09').addClass('on');
        }
        if(scrollTop >= 17360){
            $('.text01_09').addClass('on');
        }
        if(scrollTop >= 17360){
            $('.text02_09').addClass('on');
        }
        if(scrollTop >= 17890){
            $('.title_10').addClass('on');
        }
        if(scrollTop >= 18260){
            $('.mockup02_10').addClass('on');
        }
        if(scrollTop >= 18498){
            $('.mockup03_10').addClass('on');
        }
        if(scrollTop >= 18570){
            $('.image_10').addClass('on');
        }
        if(scrollTop >= 19415){
            $('.title02_10').addClass('on');
        }
        if(scrollTop >= 19548){
            $('.mockup05_10').addClass('on');
        }
        if(scrollTop >= 19900){
            $('.mockup05_10').addClass('on');
        }
        if(scrollTop >= 20630){
            $('.title01_11').addClass('on');
        }
        if(scrollTop >= 20811){
            $('.mockup01_11').addClass('on');
        }
        if(scrollTop >= 21180){
            $('.mockup03_11').addClass('on');
        }
        if(scrollTop >= 21260){
            $('.mockup04_11').addClass('on');
        }
        if(scrollTop >= 22589){
            $('.title02_11').addClass('on');
        }
        if(scrollTop >= 22938){
            $('.mockup07_11').addClass('on');
        }
        if(scrollTop >= 23086){
            $('.mockup09_11').addClass('on');
        }





        if(scrollTop >= 100) { // 숫자에 따라 아래로 스크롤 했을 때 사라지는 영역의 크기가 바뀝니다.
            if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) { /* &&: AND, 두 값이 모두 참이어야 값이 출력 */
                /* 화면에 나오지 않을 때: top값을 마이너스로 요소가 보이지 않게 사용해야함 */
                $("#header").css("top","-100px");
            } else {
                $("#header").css("top","0px");
            }
    
            lastScrollTop = scrollTop;
        } 

        
    });



 


    /*  slide,click event section */

    gsap.to(".text01_08", {
        // 사진 가로 크기
        x: -2162, 
        ease: "none",
        duration: 25,
        repeat: -1,
      });

      gsap.from(".text01_2_08", {
        // 사진 가로 크기
        x: -2162, 
        ease: "none",
        duration: 25,
        repeat: -1,
      });


















})


