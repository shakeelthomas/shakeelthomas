//Alows image to be skipped or to go back
  	var imageCount = 1;
	 $('.left').click(function(){
		 imageCount++;
		 var image = 'Images/img'+ imageCount+'.jpg';
	 $("#slide_img").attr('src',image);	
	});


