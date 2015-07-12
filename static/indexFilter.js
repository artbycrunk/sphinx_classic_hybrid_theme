$( document ).ready(function() {

    currPage = $(location).attr('href');
    if (currPage.toLowerCase().indexOf('genindex') >= 0)
    {
    	console.log("VALID_PAGE");

    	linkNodes = $(".body").find("a");
    	headerNodes = $(".body").find("h2");

    	$('input[name=iFilter]').keyup(function() {

    		filterString = $('input[name=iFilter]').val();
		 	console.log(filterString);

		 	linkNodes.each(function() {
    			thisNode = $(this);
    			linkVal = thisNode.attr('href');
    			if (linkVal.indexOf('#') != 0){
    				if (filterString)
    				{
		    			linkName = thisNode.text();
		    			if (linkName.toLowerCase().indexOf(filterString) >= 0)
		    			{
		    				thisNode.show()
		    			}else{
		    				thisNode.hide()
		    			}
	    			}else{
	    				thisNode.show()
	    			}
	    		}
			  
			});


			headerNodes.each(function() {
				thisNode = $(this);
				//console.log(thisNode);
				if (filterString)
				{
					value = thisNode.next().height();
					if (value > 6)
					{
						console.log("SHOW "+thisNode.text());
						thisNode.show()
					}else{
						console.log("HIDE "+thisNode.text());
						thisNode.hide()
					}
				}else{
					thisNode.show()
				}
				console.log(thisNode.text()+" "+value);

			});

		});

    	
    }
    console.log(currPage);
    
});