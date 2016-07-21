function switchIntro(id) //设置活动的概念区块
{
    $(".introWrapper").css("display", "none");
    $(".introMenu").find("a").attr("class", "introsub_normal");//所有类变normal
    $(".introMenu").find("a").eq(id).attr("class", "introsub_hl");//所有类变normal
    $(".introWrapper").eq(id).css("display", "block");
}
function switchAbout(id) //设置活动的“关于”区块
{
    $(".captions").find("a").attr("class", "icon_normal");
    for (i = 0; i <= 3; i++) {
        $(".icon_normal").eq(i).find("img").attr("src", "images/intro" + eval(i + 1) + "_gray.jpg");
    }
    $(".icon_normal").eq(id - 1).find("img").attr("src", "images/intro" + eval(id) + ".jpg");
    $(".captions").find("a").eq(id - 1).attr("class", "icon_hl")
    $(".aboutus > section").css("display", "none");
    $(".aboutus > section").eq(id - 1).css("display", "block");
    /*$(".aboutus > section").css("display","none");
     $(".captions").find("a").attr("class","icon_normal");//所有类变normal
     $(".captions").find("a").eq(id).attr("class","icon_hl");//所有类变normal
     $(".aboutus > section").eq(id).css("display","block");*/
}
function productsInit() //初始化产品框
{
    if (detectMQ() == "tableMode") {
        $("#pdetail0").css("display", "block");
        $("#pdetail0").css("height", "200px");
    }
}
function detectMQ() //检测模式，返回值
{
    if (matchMedia('(max-width: 640px)').matches) {
        return "listMode"; //窄屏列表模式
    } else {
        return "tableMode"; //宽屏表格模式
    }
}
//mqstatus=detectMQ(); 侦测样式
function get_p_detail(id) {
    $(".products > nav > li").find("a").attr("class", "dot_normal");//所有类变normal
    $("#pid" + id).attr("class", "dot_highlight");//选定类变highlight

    if (detectMQ() == "tableMode") {
        targetWrapper = "pdetail0";
        scrollTarget = "productArea";
        $(".sectionUniversal").css("height", "auto");
    } else {
        targetWrapper = "pdetail" + id;
        scrollTarget = targetWrapper;
    } //获得目标容器
    $.ajax({
        type: "GET",
        url: "content_" + id + ".html",
        data: "&" + Math.random(),
        success: function (msg) {
            if (intPoint == id) //重复点击时
            {
                if (detectMQ() == "listMode") {
                    $("#" + targetWrapper).slideUp();
                    $(".products > nav > li").find("a").attr("class", "dot_normal");
                    //alert($(".products > nav > li").eq(0).attr("id"));
                    pageSlide("dtDesc");
                    intPoint = 0;
                }
                else {
                } //table模式下，忽略重复点击
            }
            else //兴趣点不重复
            {
                $("#" + targetWrapper).html(msg);
                hideOtherWrappers(targetWrapper);
                pageSlide(scrollTarget);
                intPoint = id;
                //alert(msg);
            }
        }
    });
}
function hideOtherWrappers(targetWrapper) //隐藏其他的产品框
{
    $(".sectionUniversal").css("display", "none");
    $("#" + targetWrapper).slideDown();
}
function scrollTopNav()//顶部菜单
{
    pHeight = $(".dtDesc").height() * 0.78; //预计阀值
    scrollHeight = $(document).scrollTop();
    //$(".contentWrapper").html(pHeight+"/"+$(document).scrollTop());
    if (pHeight <= scrollHeight) { //该显示白色条
        $(".dtDesc").css("background-color", "#fff");
        $("#header").fadeOut();
        $("#rollHeader").fadeIn();
        $("#rollHeader").css("z-index", 300);
        arrowFade();//蓝色箭头反白
    } else {
        $(".dtDesc").css("background-color", "#2954a2");
        $("#header").fadeIn();
        $("#rollHeader").fadeOut();
        arrowShow();
    }
    //if $(document).scrollTop
}
function getQuote(id) //显示咨询电话提交
{
    intPoint = id;
    art.dialog({
        lock: true,
        background: '#fff', // 背景色
        opacity: 0.85,	// 透明度
        fixed: true,
        padding: 0,
        drag: false,
        resize: false,
        content: document.getElementById('quoteDOM'),
        id: 'E1893L',
        /* init: function () {
         $("#quoteDOM").fadeIn();
         }*/
    });

}
function submitTel() {
    tel = $("#numberCollect").val();
    source = intPoint;
    if (isNaN(source) || isNaN(tel) || tel == "") {
        alert("您输入的似乎不是一个电话，请检查！");
    }
    else {
        $.ajax({
            type: "POST",
            url: "/msgboard/msgajax.php",
            data: "msg=" + tel + "&source=" + source + "&" + Math.random(),
            success: function (msg)        //更新成功
            {
                if (msg == "") {
                    alert("感谢您关注大童保险\n联系方式提交成功，我们的客户代表会尽快联系您！");
                    window.location.reload();
                }
            }
        });
    }
}
function pageSlide(target) {
    switch (target) {
        case "dtDesc"://顶部
            scrollPosition = $(".dtDesc").height() * 0.8;
            $("html,body").stop();
            $("html,body").animate({scrollTop: scrollPosition}, 500);
            break;
        case "productArea"://产品菜单
            scrollPosition = $(".dtDesc").height();
            scrollPosition += $("#rollHeader").height();
            scrollPosition *= 1.1;
            $("html,body").stop();
            $("html,body").animate({scrollTop: scrollPosition}, 500);
            break;
        case "about"://关于我们
            scrollPosition = $(".dtDesc").height();
            scrollPosition += $("#rollHeader").height();
            scrollPosition += $(".products").height();
            scrollPosition += $(".aboutheader").height();
            $("html,body").stop();
            $("html,body").animate({scrollTop: scrollPosition}, 500);
            break;
        default:
            //alert(target);
            scrollPosition = $("#" + target).offset().top;
            //alert(scrollPosition);
            scrollPosition = scrollPosition - $("#rollHeader").height() * 2 - 27;
            //alert(scrollPosition);
            //scrollPosition=$(".dtDesc").height();
            //scrollPosition+=$("#rollHeader").height();
            //scrollPosition*=1.05;
            $("html,body").stop();
            $("html,body").animate({scrollTop: scrollPosition}, 500);
            break;
    }
}
function colorFade(obj) {
    $(obj).animate({"filter": "grayscale(0)"}, 30000);
}
function arrowFade() //蓝色顶部变白
{
    $(".slideTrigger").css("color", "#2954a2");
    $("#topArrowImg").attr("src", "images/aboutusheader.png");
    $(".arrow").css("background-image", "none");
}
function arrowShow() //蓝色顶部变回蓝色
{
    $(".slideTrigger").css("color", "#fff");
    $("#topArrowImg").attr("src", "images/droparrow.jpg");
    $(".arrow").css("background-image", "images/triangleBlue.jpg");
}
function iwHeightFix() {
    heightArray = [];
    for (i = 0; i <= 2; i++) {
        heightArray.push($("#iw" + i).height());
    }
    mHeight = Math.max.apply(Math, heightArray);
    for (i = 0; i <= 2; i++) {
        $("#iw" + i).height(mHeight);
    }
    //cp部分也要取齐
    heightArray = [];
    for (i = 1; i <= 4; i++) {
        heightArray.push($("#cp" + i).height());
    }
    mHeight = Math.max.apply(Math, heightArray);
    for (i = 1; i <= 4; i++) {
        $("#cp" + i).height(mHeight);
    }
}
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
window.matchMedia = window.matchMedia || (function (doc, undefined) {

        var docElem = doc.documentElement,
            refNode = docElem.firstElementChild || docElem.firstChild,
        // fakeBody required for <FF4 when executed in <head>
            fakeBody = doc.createElement('body'),
            div = doc.createElement('div');

        div.id = 'mq-test-1';
        div.style.cssText = "position:absolute;top:-100em";
        fakeBody.style.background = "none";
        fakeBody.appendChild(div);

        var mqRun = function (mq) {
                div.innerHTML = '&shy;<style media="' + mq + '"> #mq-test-1 { width: 42px; }<images>';
                docElem.insertBefore(fakeBody, refNode);
                bool = div.offsetWidth === 42;
                docElem.removeChild(fakeBody);

                return {matches: bool, media: mq};
            },

            getEmValue = function () {
                var ret,
                    body = docElem.body,
                    fakeUsed = false;

                div.style.cssText = "position:absolute;font-size:1em;width:1em";

                if (!body) {
                    body = fakeUsed = doc.createElement("body");
                    body.style.background = "none";
                }

                body.appendChild(div);

                docElem.insertBefore(body, docElem.firstChild);

                if (fakeUsed) {
                    docElem.removeChild(body);
                } else {
                    body.removeChild(div);
                }

                //also update eminpx before returning
                ret = eminpx = parseFloat(div.offsetWidth);

                return ret;
            },

        //cached container for 1em value, populated the first time it's needed
            eminpx,

        // verify that we have support for a simple media query
            mqSupport = mqRun('(min-width: 0px)').matches;

        return function (mq) {
            if (mqSupport) {
                return mqRun(mq);
            } else {
                var min = mq.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/) && parseFloat(RegExp.$1) + ( RegExp.$2 || "" ),
                    max = mq.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/) && parseFloat(RegExp.$1) + ( RegExp.$2 || "" ),
                    minnull = min === null,
                    maxnull = max === null,
                    currWidth = doc.body.offsetWidth,
                    em = 'em';

                if (!!min) {
                    min = parseFloat(min) * ( min.indexOf(em) > -1 ? ( eminpx || getEmValue() ) : 1 );
                }
                if (!!max) {
                    max = parseFloat(max) * ( max.indexOf(em) > -1 ? ( eminpx || getEmValue() ) : 1 );
                }

                bool = ( !minnull || !maxnull ) && ( minnull || currWidth >= min ) && ( maxnull || currWidth <= max );

                return {matches: bool, media: mq};
            }
        };

    }(document));