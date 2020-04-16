





$('#button1').on('click', function(){

    $('#div1').text('')



$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(){
	//Iterate over the response, adding elements to DOM
	posts.forEach(function(){
        let p = $('<p></p>');
		p.text(postText);
		$('#div1').append(p);
    });
        console.log(posts)
    })
})
