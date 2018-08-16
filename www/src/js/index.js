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
            $(".container").height($(window).height());
            $("main").height($(window).height());
            $("aside").height($(window).height()-10);
        }
        deal_events(){
            
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
        // 搜索动画
        search_animation(){
            $("#search_btn").click(function(){
                if($(document).width()>640){
                    $("#input_search").animate({
                        "width" : "150px"
                    },600);
                }else{
                    $("#input_search").animate({
                        "width" : "120px"
                    },600);
                }
            })    
        }    
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
                        left : "50%"
                    },700);
                }
            })
        }    
        init(){
            this.adjust_screen();
            this.aside_inisde();
            this.search_animation();
            this.menu();
        }    
    }    
    let index = new Index();
    index.init();
})()    
    

