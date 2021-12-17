$(document).ready(function(){
    
    var $box=$;

    var isDropped=false;
    $("#toggle").on("click",()=>{
        if(!isDropped){
        $(".item").css("display","flex");
        $(".item").addClass("item2");
        $(".nav").addClass("dropdown");
        $("#toggle").addClass("cancel");
        console.log("dropDown open");
        isDropped=true;
    }
    else{
        $(".item").css("display","none");
        $(".nav").removeClass("dropdown");
        $("#toggle").removeClass("cancel");

            console.log("dropDown closed")
            isDropped=false;
        }

    })
})