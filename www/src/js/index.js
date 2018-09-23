    (function(){
        class Index{
            constructor(){
                this.myName = "下水道的包工头",
                this.func1 = {
                    name : "blog插件",
                    hrefTo : "#"
                }
                this.func2 = {
                    name : "下水道聊天室",
                    hrefTo : "#"
                }  
            }
            // 调整屏幕
            adjust_screen(){
                var contentWidth = $(window).width()*0.79;
                var pageHeight = $(window).height() - $("header").height();
                $(".container").height($(window).height());
                $("main").height($(window).height());
                $("aside").height($(window).height()-10);
                $("footer div").width($("main").width()); 
                if($(window).width()<640){
                    $(".content").width($(window).width());
                    $(".mixFunc").remove();
                }else{
                    $(".page").height(pageHeight);
                    $(".content").width(contentWidth);
                }
            }
            //随机页
            randomPage(){
                var pages = $(".page").length;
                for(let i=0;i<pages;i++){
                    function range(min,max){
                        return Math.round(Math.random(max-min)+min);
                    }
                    $(`.page:eq(${i})`).addClass(`type${range(1,2)}`)
                }
            }
            //添加侧边内容
            aside_inisde(){    
                $(".control_margin").append("<span class='span_gray'><</span><span class='span_violet'>!DOCTYPE html</span><span class='span_gray'>></span><br>")
                    .append("<span class='span_gray'><</span><span class='span_violet'>html</span><span class='span_gray'>></span><br>")
                    .append(`<span class='icon'></span><span class='span_gray'><</span><span class='span_violet'>head</span><span class='span_gray'>></span><span class='span_green'>${this.myName}</span>`)
                    .append(`<span class='span_gray'><</span><span class='span_violet'>/head</span><span class='span_gray'>></span><br>`)
                    .append(`<span class='icon'></span><span class='span_gray'><</span><span class='span_violet'>body</span><span class='span_gray'>></span><br>`)
                    .append(`<span class='icon'></span><span class='span_gray'><</span><span class='span_violet'>div</span><span class='span_gray'>></span><a href= '${this.hrefTo}' class='span_green'>${this.func1.name}<a>`)
                    .append(`<span class='span_gray'><</span><span class='span_violet'>/div</span><span class='span_gray'>></span><br>`)
                    .append(`<span class='icon'></span><span class='span_gray'><</span><span class='span_violet'>script</span><span class='span_gray'>></span><a href='${this.hrefTo}' class='span_green'>${this.func2.name}</a>`)
                    .append(`<span class='span_gray'><</span><span class='span_violet'>/script</span><span class='span_gray'>></span><br>`)
                    .append(`<span class='span_gray'><</span><span class='span_violet'>/body</span><span class='span_gray'>></span><br>`)
                    .append(`<span class='span_gray'><</span><span class='span_violet'>/html</span><span class='span_gray'>></span>`)
            }
            //搜索动画
            search_animation(){
                $("#search_btn").click(function(){
                    if($(document).width()>640){    
                        $("#input_search").animate({
                            "width" : "150px"
                        },300);
                    }else{
                        $("#input_search").animate({
                            "width" : "120px"
                        },300);
                    }
                    $("#input_search").css("background-color","#8a8a8a");
                    $("#search_btn").css("z-index","0");
                })    
            }       
            mixFunc(){
                $(".the_tags").click(function(){
                    $(".mixFunc").toggle();
                    if($(".mixFunc").is(":visible")){
                        $(".mixFunc").append("")
                    }
                })
                $(".the_share").click(function(){
                    $(".mixFunc").toggle();
                })
                $(".the_cate").click(function(){
                    $(".mixFunc").toggle();
                })
                $(".user").click(function(){
                    $(".mixFunc").toggle();
                })
            }
            //移动菜单
            menu(){
                $(".menu").click(function(){
                    $(".cover").hasClass("out") ? $(".cover").removeClass("out") : $(".cover").addClass("out");
                    if($(this).hasClass("menu_out")){
                        $(this).removeClass("menu_out");
                        $(this).animate({
                            left : 0
                        },500);
                    }else{
                        $(this).addClass("menu_out");
                        $(this).animate({
                            left : "45%"
                        },700);
                    }
                    $(".mobile_login").click(function(){
                        $(".cover").removeClass("out");
                        $(".menu").removeClass("menu_out");
                        $(".menu").animate({
                            left : 0
                        },500);
                        new Promise((resolve,reject)=>{
                            setTimeout(function (){
                                $("header").animate({
                                    height: "300px",
                                },400);
                                resolve();
                            },600);
                        }).catch((err)=>{
                            console.log(err);
                        }).then(()=>{
                            $("header").append("<div class='login_mbox'></div>");
                        }).then(()=>{
                            $(".login_mbox").load("http://localhost:3000/src/build/login_box.html");
                        })
                    })
                })
            }   
            //删除剩余 
            rmSurplus(){
                var lastPage = $(".page").length-1;
                for(let i=0;i<7;i++){
                    var divText = $(`.page:eq(${lastPage}) .div${i+1} .textView`).text().trim();  
                    if(divText==""){
                        $(`.page:eq(${lastPage}) .div${i+1}`).css("display","none");
                    }
                }
            }
            //geetest检查用户
            checkUser(){
                function handler(captchaObj) {
                        captchaObj.appendTo("#captcha");
                        captchaObj.onReady(function () {
                            $("#wait").hide();
                        });
                        var handleRes = (message)=>{
                            $(".returnStatus span").text("");
                            $(".returnStatus span").text(message);
                            setTimeout(()=>{
                                $(".returnStatus span").text("");
                            },3000);
                        }
                        $('#btn').click(function () {
                            var result = captchaObj.getValidate();
                            var btnType = $(this).attr("class").replace(/btn\s/g,"");
                            var inputText = $(".inp").val();
                            if (inputText == "" || inputText.length<6){
                                $(".returnStatus span").text("用户名和密码至少6个字符");
                                return false;
                            }
                            if (!result) {
                                handleRes("请完成验证");
                                return false;
                            }
                            console.log(result);

                            $.ajax({
                                url: `/u ser/gt/validate-slide/${btnType}`,
                                type: 'POST',
                                dataType: 'json',
                                data: {
                                    username: $('#username').val(),
                                    password: $('#password').val(),
                                    geetest_challenge: result.geetest_challenge,
                                    geetest_validate: result.geetest_validate,
                                    geetest_seccode: result.geetest_seccode
                                },
                                success: function (data) {
                                    if (data.status === 'success') {
                                        handleRes(data.info);
                                        setTimeout(()=>{
                                            location.reload();
                                        },200);
                                    } else if (data.status === 'fail') {
                                        handleRes(data.info);
                                    }
                                }
                            });
                        })
                };
                $.ajax({
                    url: "/user/gt/register-slide?t=" + (new Date()).getTime(), 
                    type: "get",
                    dataType: "json",
                    success: function (data) {
                        initGeetest({
                            gt: data.gt,
                            challenge: data.challenge,
                            offline: !data.success,
                            new_captcha: data.new_captcha,
                            product: "float", 
                            width: "300px"
                        }, handler);
                    }
                });
            }

            //请求登录页面 
            askForLoginDiv(cb1){
                $(".user").click(function(){
                    if($(".mixFunc").html()){
                        $(".mixFunc").empty();
                    }else{
                        new Promise((resolve,reject)=>{
                            $.get("/user/login_box.html",(data)=>{
                                $(".mixFunc").append(data);
                                resolve();
                            })
                        }).then(()=>{
                            setTimeout(cb1,800);
                        }).then(()=>{
                            $(".wrapper_top ul li").click(function(){
                                let btn_content = $(this).text();
                                $(".btn").text(btn_content);
                                if(btn_content == "注册"){
                                    $(".btn").addClass("register");
                                    $(".btn").removeClass("login");
                                    
                                }else{
                                    $(".btn").removeClass("register");
                                    $(".btn").addClass("login");
                                }
                            })
                        })
                    }
                })
            }
           

            init(){
                this.aside_inisde();
                this.search_animation();
                this.menu();
                this.adjust_screen();
                this.rmSurplus();
                this.randomPage();
                this.mixFunc();
                this.askForLoginDiv(this.checkUser);
            }
        }    
        let index = new Index();
        index.init();
    })()    
        

