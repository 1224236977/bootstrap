/**
 * Created by Administrator on 2017/6/18.
 */
$(function () {
    //    定时器
    $('.carousel').carousel({
        interval: 3000
    })
//返回顶部点击事件
    $(".backtoTop").click(function () {
        $("body").stop().animate({
            scrollTop: 0
        },1500);
        console.log(1)
    })
    // Recent_nav li点击切换ac 更换下面图片
    $('.Recent_nav li').click(function () {
        var index=$(this).index()
        $(this).addClass('active').siblings().removeClass('active')
        // console.log(index)
        $('.thumbnail img').each(function (i) {
            $(this).attr('src','images/'+(110+i+index)+'.png')
        })
    })
    //thumbnail图片鼠标悬浮增加ac
    $(".thumbnail").mouseenter(function () {
        $(this).addClass('active').parent().siblings().children().removeClass('active')
    })
    //Our Service 点击哪个heading增加ac strong 改成+ 其他 去除ac strong变成-
    $(".panel-heading").click(function() {
        var index=$(this).index();
        //增加ac 兄弟去除ac
        $(this).addClass('active').parent().siblings().children().removeClass('active');

        // $('.panel-group').find('strong').removeClass().addClass('glyphicon glyphicon-minus');

        $(this).find('strong').toggleClass('glyphicon-minus glyphicon-plus').parent();
        //点击的strong变成+号
        //其他的strong变成-号
        // console.log($('.panel-group').find('strong'))
    })

})
