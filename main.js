// 搜尋 a 元素
// 取得每個 a 元素的資料
$("a").each(function (index, element) {
    // console.log("編號 :" + index);

    var target = $(this).attr("date-st-target");
    var duration = $(this).attr("date-st-duration");
    var offsetTop = $(this).attr("date-st-offset");

    // console.log("目標 : " + target);
    // console.log("時間 : " + duration);
    // console.log("位移 : " + offsetTop);

    var offset = $("#" + target).offset();
    var top = offset.top;

    // 上方   扣除    上方位移
    // top =  top - offsetTop; (原始寫法)  top -= offsetTop; (簡寫) 
    // 如果 offsetTop 存在的話 才執行 減法運算
    if (offsetTop) top -= offsetTop;

    // console.log("上方 : " + top);

    $(this).click(function (e) {
        e.preventDefault();

        // parseInt() 將文字轉為數字
        //  stop() 停止當前所有動畫
        $("html").stop().animate({
            scrollTop: top
        }, parseInt(duration));
    });
});

// 使用者在用滑鼠滾動的時 停止動畫
$("html").on("mousewheel", function () {
    $("html").stop();
});

var arrow = $("#arrow");
arrow.fadeOut();

    // 箭頭顯示與隱藏效果
    $(window).scroll(function () {
        var windowTop = $(this).scrollTop();
        // console.log("視窗的上方 : " + windowTop);

        var arrowTop = arrow.attr("date-st-top");
        var arrowTime = arrow.attr("date-st-time");
        var arrowTimeInt = parseInt(arrowTime);

        // console.log(arrowTop);
        // console.log(arrowTime);

        // 如果 視窗位置 大於等於 箭頭上方 就 淡入
        if (windowTop >= arrowTop) arrow.fadeIn(arrowTimeInt);
        // 否則 就 淡出
        else arrow.fadeOut(arrowTimeInt);
    });
