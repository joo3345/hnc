
$(function(){
	
	var s=1;	// 햄버거버튼
	
	$(window).resize(function(){
		
		var wt=$(window).width();
		
		if(wt>=1200){
			$("nav").css("right","120px");
			
		}else if(wt<1200 && s==0){
			$(".mBg").css("display","block");
			$("nav").css("right","0px");
		}else {
			$("nav").css("right","-300px");
		}
				
	});
	
	

	$(".mAllmenu ul").click(function(){
		
			
		$(this).toggleClass("mX");
		
		
		if(s==1){
			$("nav").stop().animate({right:0},500);
			$(".mBg").css("display","block");
			s=0;
		}else{
			$("nav").stop().animate({right:"-300px"},500);
			$(".mBg").css("display","none");
			s=1;
		}
		
				
	});
	
	
	
});