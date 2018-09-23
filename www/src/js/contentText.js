$(function(){
    class contentText{
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
        init(){
            this.search_animation();
        }
    }
    let contenttext = new contentText();
    contenttext.init();
})