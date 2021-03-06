/**
 * Created by wangbiaozy on 2017/12/1.
 */
(function(global){
    function remChange(){
        document.documentElement.style.fontSize=100*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);
$(function () {
    var $xin_1 = $('#xin_1'),
        $xin_2 = $('#xin_2'),
        $xin_3 = $('#xin_3'),
        $info = $('#info'),
        $cgWrap = $('.cgWrap'),
        $change = $('#change'),
        $title = $('#title'),
        $time = $('#time'),
        $hdgz = $('#hdgz'),
        $gzPage = $('.hdgz'),
        $gzBtn = $('#gzPageBtn'),
        $lookBtn = $('#lookBtn'),
        $myJp = $('.myJp'),
        $jpBtn = $('#jpBtn'),
        $ljTab = $('#ljTab'),
        $fuli = $('.fuli'),
        $yqBtn = $('#yqBtn'),
        $tc5lqBtn = $('#tc5lqBtn'),
        $barInner = $('.barInner'),
        $starBtn = $('#starBtn'),
        $girl_1 = $('#girl_1'),
        $watch = $('#watch'),
        $box = $('#box'),
        $tv = $('#tv'),
        $tvWrap = $('#tvWrap'),
        $openTv = $('#openTv'),
        $num = $('#num'),
        flag = 0,
        $lev4Bg = $('#lev4Bg'),
        $sxt = $('#sxt'),
        $lev4 = $('#lev4'),
        $lev5Girl = $('#lev5Girl'),
        $lev5Man = $('#lev5Man'),
        $door = $('#door'),
        $jp = $('#jp'),
        $doorLight = $('#doorLight'),
        $tc1NextBtn = $('.tc1NextBtn'),
        $tc2NextBtn = $('.tc2NextBtn'),
        $tc3NextBtn = $('.tc3NextBtn'),
        $tc4Nextbtn = $('.tc4NextBtn');

    //待选择物品发光动画
    function light(ele) {
        timer_0 = window.setInterval(function () {
            ele.removeClass('bg_1').addClass('bg');
            setTimeout(function () {
                ele.removeClass('bg').addClass('bg_1');
            },500);
        },1000);
    }
    //首页动画
    timer_fir = window.setInterval(function () {
        $xin_1.fadeIn(function () {
            $xin_2.fadeIn(function () {
                $xin_3.addClass('act');
                window.setTimeout(function () {
                    $xin_3.find('img').attr('src',"./images/xin_.png");
                    $change.addClass('bg');
                    /*$xin_1.hide();
                       $xin_2.hide();*/
                },500);
            });
        });
        //$xin_1.fadeIn();
        //$xin_2.fadeIn();
        //$xin_3.removeClass('act');
        $xin_3.find('img').attr('src',"./images/xin.png");
        $change.removeClass('bg');
        $xin_3.addClass('act');
    },2000);
    //首页按钮放大缩小
    var $starBtnImg = $starBtn.find('img');
    timer_btn = window.setInterval(function () {
        $starBtnImg.animate({
            width: '90%',
            height: '90%'
        },function () {
            $starBtnImg.animate({
                width: '100%',
                height: '100%'
            });
        });
    },1000);
    //首页活动规则
    $hdgz.on('click',function () {
        $info.hide();
        $gzPage.show();
    });
    //活动规则页返回按钮
    $gzBtn.on('click',function () {
        $gzPage.hide();
        $info.show();
    });
    //首页查看我的奖品按钮
    $lookBtn.on('click',function () {
        $info.hide();
        $myJp.show();
    });
    //我的奖品页返回按钮
    $jpBtn.on('click',function () {
        $myJp.hide();
        $info.show();
    });
    //我的奖品页领取奖励按钮
    $ljTab.on('click','li',function () {
        $(this).addClass('act');
    });
    //弹窗5立即领取按钮点击置灰
    $tc5lqBtn.on('click',function () {
        $(this).addClass('act');

    });
    //弹窗5分享按钮
    $yqBtn.on('click',function () {
        $('.fenxiang').show();
        showMask();
    });
    //分享确认按钮
    $('#fxqr').on('click',function () {
        $('.fenxiang').hide();
        hideMask();
        $fuli.hide();
        window.location.href = 'index.html';
    });
    //福利页回到首页
    $('#goFirPage').on('click',function () {
        window.location.href = 'index.html';
    });
    function titleAnimate() {
        setTimeout(function () {
            $title.css({
                transform: 'rotate(3deg)'
            });
            setTimeout(function () {
                $title.css({
                    transform: 'rotate(0deg)'
                });
                setTimeout(function () {
                    $title.css({
                        transform: 'rotate(-3deg)'
                    });
                    setTimeout(function () {
                        $title.css({
                            transform: 'rotate(0deg)'
                        });
                    },500);
                },500);
            },500);
        },500);

    }
    //首页开始按钮
    $starBtn.on('click',function () {
        $info.hide();
        $cgWrap.show();
        window.clearInterval(timer_fir);
        window.clearInterval(timer_btn);
        light($watch);
        timing();
        titleAnimate();
    });
    //第一关倒计时
    var timing = function () {
        var timeBarInit = 100,
            timeBarStep = 10,
            timeBarWidth,
            i = 0;
        timer2_1 = window.setInterval(function () {
            if(i < 9){
                i+= 1;
                if(i > 4){
                    $barInner.css("background","red");
                }
                timeBarWidth = timeBarInit - timeBarStep*i;
                $barInner.width(timeBarWidth + "%");
                $time.text(10 - i);
            }else if(i = 9){
                $time.text(0);
                $title.addClass('act_2');
                $watch.hide();
                $girl_1.addClass('act');
                $barInner.hide();
                showTc_fail_1();
                window.clearInterval(timer2_1);
                i = 0;
                timeInit();
                flag = 1;
            }
        },1000);
    }
    //第二关倒计时
    var timing1 = function () {
        var timeBarInit = 100,
            timeBarStep = 10,
            timeBarWidth,
            i = 0;
        timer2_2 = window.setInterval(function () {
            if(i < 9){
                i+= 1;
                if(i > 4){
                    $barInner.css("background","red");
                }
                timeBarWidth = timeBarInit - timeBarStep*i;
                $barInner.width(timeBarWidth + "%");
                $time.text(10 - i);
            }else if(i = 9){
                $time.text(0);
                $title.addClass('act_3');
                $barInner.hide();
                showTc_fail_2();
                window.clearInterval(timer2_2);
                i = 0;
                timeInit();
                flag = 2;
                $openTv.show();
                $tv.remove();
                var timer3 = setInterval(function () {
                    $openTv.addClass('act');
                    var timer4 = setTimeout(function () {
                        $openTv.removeClass('act');
                    },500);
                },1000);
            }
        },1000);
    }
    //第三关倒计时
    var timing2 = function () {
        var timeBarInit = 100,
            timeBarStep = 10,
            timeBarWidth,
            i = 0;
        timer2_3 = window.setInterval(function () {
            if(i < 9){
                i+= 1;
                if(i > 4){
                    $barInner.css("background","red");
                }
                timeBarWidth = timeBarInit - timeBarStep*i;
                $barInner.width(timeBarWidth + "%");
                $time.text(10 - i);
            }else if(i = 9){
                $time.text(0);
                $barInner.hide();
                $title.addClass('act_4');
                showTc_fail_3();
                $openTv.hide();
                $tvWrap.addClass('act');
                $box.hide();
                $girl_1.addClass('act_1');
                window.clearInterval(timer2_3);
                i = 0;
                timeInit();
                flag = 3;
            }
        },1000);
    }
    //第四关倒计时
    var timing3 = function () {
        var timeBarInit = 100,
            timeBarStep = 10,
            timeBarWidth,
            i = 0;
        timer2_4 = window.setInterval(function () {
            if(i < 9){
                i+= 1;
                if(i > 4){
                    $barInner.css("background","red");
                }
                timeBarWidth = timeBarInit - timeBarStep*i;
                $barInner.width(timeBarWidth + "%");
                $time.text(10 - i);
            }else if(i = 9){
                $time.text(0);
                $title.addClass('act_5');
                $barInner.hide();
                showTc_fail_4();
                $lev4.addClass('act');
                window.clearInterval(timer2_4);
                i = 0;
                timeInit();
                flag = 4;
            }
        },1000);
    }
    //第五关倒计时
    var timing4 = function () {
        var timeBarInit = 100,
            timeBarStep = 10,
            timeBarWidth,
            i = 0;
        timer2_5 = window.setInterval(function () {
            if(i < 9){
                i+= 1;
                if(i > 4){
                    $barInner.css("background","red");
                }
                timeBarWidth = timeBarInit - timeBarStep*i;
                $barInner.width(timeBarWidth + "%");
                $time.text(10 - i);
            }else if(i = 9){
                $time.text(0);
                $barInner.hide();
                $lev4Bg.hide();
                $lev4.hide();
                $girl_1.hide();
                $lev5Man.show();
                showTc_5();
                window.clearInterval(timer5);
                window.clearInterval(timer6);
                window.clearInterval(timer2_5);
                window.clearInterval(timer_0);
                $doorLight.remove();
                i = 0;
                titleAnimate = null;
                timeInit();
                flag = 5;
            }
        },1000);
    }
    //重置倒计时时间及进度条
    function timeInit() {
        $('#time').text(10);
        $barInner.width(100+"%");
        $barInner.css('background','#fef979');
        $barInner.show();
        if(titleAnimate !== null){
            titleAnimate();
        }
    }
    //第一关 点击手表
    $watch.on('click',function () {
        $(this).hide();
        window.clearInterval(timer2_1);
        $girl_1.addClass('act');
        showTc_success_1();
    });
    
    //第一关弹窗下一步按钮
    $tc1NextBtn.on('click',function () {
        timeInit();
        hideTc_success_1();
        hideTc_fail_1();
        $title.addClass('act_2');
        $num.text(2);
        timing1();
        light($tv);
    });
    //第二关 点击电视
    $tv.on('click',function () {
        if(flag === 1){
            flag = -1;
            $openTv.show();
            window.clearInterval(timer2_2);
            var timer3 = setInterval(function () {
                $openTv.addClass('act');
                var timer4 = setTimeout(function () {
                    $openTv.removeClass('act');
                },500);
            },1000);
            showTc_success_2();
            $tv.remove();
        }
    });
    //第二关弹窗下一步按钮
    $tc2NextBtn.on('click',function () {
        timeInit();
        hideTc_success_2();
        hideTc_fail_2();
        $title.addClass('act_3');
        $num.text(3);
        timing2();
        light($box);
    });
    //第三关点击魔百盒
    $box.on('click',function () {
        if(flag === 2){
            window.clearInterval(timer2_3);
            $openTv.hide();
            $tvWrap.addClass('act');
            $(this).hide();
            $girl_1.addClass('act_1');
            showTc_success_3();
            flag = 3;
        }
    });
    //第三关弹窗下一步按钮
    $tc3NextBtn.on('click',function () {
        timeInit();
        hideTc_success_3();
        hideTc_fail_3();
        $title.addClass('act_4');
        $num.text(4);
        $lev4Bg.show();
        timing3();
        light($sxt);
    });
    //第四关点击摄像头
    $sxt.on('click',function () {
        if (flag === 3){
            flag = 4;
            $lev4.addClass('act');
            window.clearInterval(timer2_4);
            showTc_success_4();
            $sxt.remove();
        }
    });
    //第四关点击弹窗下一步按钮
    $tc4Nextbtn.on('click',function () {
        timeInit();
        $lev4Bg.hide();
        $lev4.hide();
        $girl_1.hide();
        $title.addClass('act_5');
        $lev5Girl.show();
        timer5 = setInterval(function () {
            $lev5Girl.addClass('act');
            timer6 = setTimeout(function () {
                $lev5Girl.removeClass('act');
            },500);
        },1000);
        $lev5Man.show();
        hideTc_success_4();
        hideTc_fail_4();
        $num.text(5);
        timing4();
        light($doorLight);
    });
    //第五关点击门
    $door.on('click',function () {
        if(flag === 4){
            flag = 5;
            $time.text(0);
            $barInner.hide();
            $lev4Bg.hide();
            $lev4.hide();
            $girl_1.hide();
            $lev5Man.show();
            showTc_5();
            window.clearInterval(timer5);
            window.clearInterval(timer2_5);
            titleAnimate = null;
            timeInit();
            window.clearInterval(timer_0);
            $doorLight.remove();
        }
    });


    //显示第一关成功弹窗
    function showTc_success_1() {
        setTimeout(function () {
            $('#tc_success_1').show();
            showMask();
            flag = 1;
        },500);

    }
    //显示第一关失败弹窗
    function showTc_fail_1() {
        $('#tc_fail_1').show();
        showMask();
    }
    //显示第二关成功弹窗
    function showTc_success_2() {
        setTimeout(function () {
            $('#tc_success_2').show();
            showMask();
            flag = 2;
        },500);
    }
    //显示第二关失败弹窗
    function showTc_fail_2() {
        $('#tc_fail_2').show();
        showMask();
    }
    //显示第三关成功弹窗
    function showTc_success_3() {
        setTimeout(function () {
            $('#tc_success_3').show();
            showMask();
            flag = 3;
        },500);
    }
    //显示第三关失败弹窗
    function showTc_fail_3() {
        $('#tc_fail_3').show();
        showMask();
    }
    //显示第四关成功弹窗
    function showTc_success_4() {
        setTimeout(function () {
            $('#tc_success_4').show();
            showMask();
        },500);
    }
    //显示第四关失败弹窗
    function showTc_fail_4() {
        $('#tc_fail_4').show();
        showMask();
    }
    //关闭第一关成功弹窗
    function hideTc_success_1() {
        $('#tc_success_1').hide();
        hideMask();
    }
    //关闭第一关失败弹窗
    function hideTc_fail_1() {
        $('#tc_fail_1').hide();
        hideMask();
    }
    //关闭第二关成功弹窗
    function hideTc_success_2() {
        $('#tc_success_2').hide();
        hideMask();
    }
    //关闭第二关失败弹窗
    function hideTc_fail_2() {
        $('#tc_fail_2').hide();
        hideMask();
    }
    //关闭第三关成功弹窗
    function hideTc_success_3() {
        $('#tc_success_3').hide();
        hideMask();
    }
    //关闭第三关失败弹窗
    function hideTc_fail_3() {
        $('#tc_fail_3').hide();
        hideMask();
    }
    //关闭第四关成功弹窗
    function hideTc_success_4() {
        $('#tc_success_4').hide();
        hideMask();
    }

    //关闭第四关失败弹窗
    function hideTc_fail_4() {
        $('#tc_fail_4').hide();
        hideMask();
    }
    //显示第五关弹窗
    function showTc_5() {
        $('.lev5Tc').show();
        $('#mask').css('opacity','.7');
        showMask();
    }
    //显示遮罩层    
    function showMask(){
        $("#mask").css("height",$(document).height());
        $("#mask").css("width",$(document).width());
        $("#mask").show();
    }
    //隐藏遮罩层  
    function hideMask(){
        $("#mask").hide();
    }

    //->MUSIC
    wx.config({
        debug: false
    });
    wx.ready(function () {
        function audioAutoPlay(id){
            var audio = document.getElementById(id),
                play = function(){
                    audio.play();
                    document.removeEventListener("touchstart",play, false);
                };
            audio.play();
            document.addEventListener("WeixinJSBridgeReady", function () {
                play();
            }, false);
            document.addEventListener('YixinJSBridgeReady', function() {
                play();
            }, false);
            document.addEventListener("touchstart",play, false);
        }
        audioAutoPlay('musicAudio');
    });
    ~function () {
        var musicMenu = document.getElementById('musicMenu'),
            musicAudio = document.getElementById('musicAudio');

        musicMenu.addEventListener('click', function () {
            if (musicAudio.paused) {//->暂停
                musicAudio.play();
                musicMenu.className = 'music move';
                return;
            }
            musicAudio.pause();
            musicMenu.className = 'music';
        }, false);

        function controlMusic() {
            musicAudio.volume = 0.1;
            musicAudio.play();
            musicAudio.addEventListener('canplay', function () {
                musicMenu.style.display = 'block';
                musicMenu.className = 'music move';
            }, false);
        }
        window.setTimeout(controlMusic, 1000);
    }();

    //老虎机抽奖

    var random = Math.round(Math.random()*(5-1)+1),
        $cishu = $('#cishu'),
        $lqBtn = $('#lqBtn');
    var machine1 = $("#machine1").slotMachine({
        active: 0,
        delay: 100,
        randomize:function(){
            return random;
        }
    });

    var machine2 = $("#machine2").slotMachine({
        active: 0,
        delay: 150,
        randomize:function(){
            return random;
        }
    });

    var machine3 = $("#machine3").slotMachine({
        active: 0,
        delay: 200,
        randomize:function(){
            return random;
        }
    });

    $("#ranomizeButton").one('click',function () {
        $cishu.text(0);
        $(this).addClass('act');
        machine1.shuffle(10,function () {
            if(machine1.active === 1){
                $jp.text('100MB');
            }else if(machine1.active ===2 ){
                $jp.text('200MB');
            }else if(machine1.active ===3){
                $jp.text('500MB');
            }else if(machine1.active ===4){
                $jp.text('1GB');
            }else if(machine1.active ===5){
                $jp.text('2.14GB');
            }
        });
        machine2.shuffle(15);
        machine3.shuffle(20);
        $('.randomizeMachine').css('padding-top','0.03rem');

        //显示抽奖结果
        //@param machine1.active 当前选中索引


    });
    window.setInterval(function () {
        if(machine3.stopping){
            setTimeout(function () {
                $lqBtn.addClass('act');
            },800);
        }
    });
    $lqBtn.on('click',function () {
        if($(this).hasClass('act')){
            $('.lev5Tc').hide();
            $info.hide();
            hideMask();
            $cgWrap.hide();
            $fuli.show();
            $lqBtn.text('已领取');
            $(this).removeClass('act');
        }
    });
});
