function showFormAddData(e) {
	if (e) {
		e.preventDefault();
	}
	$('#formAddData').toggle();
	
}

function saveData(e){
	e.preventDefault();
	var title = $('#formAddData #inputTitle').val();
	var author = $('#formAddData #inputAuthor').val();
	var tag = $('#formAddData #inputTag').val();
	var newItem = "<article class=\"item\">\
			<figure class=\"item_image\">\
				<img src=\"imgs///imgpost.jpg\" />\
			</figure>\
			<h2 class=\"item_tit_pe\"><a href=\"#\">" + title + "</a></h2>\
			<div class=\"item_author\">\
				<p>por <a href=\"#\">" + author + "</a></p>\
			</div>\
			<div class=\"item_details\">\
				<a href=\"#\" class=\"tag\">"
					+ tag +
				"</a>\
				<span class=\"date\">\
					hace 10 min\
				</span>\
			</div>\
			<div class=\"item_votes\">\
				<a href=\"#\" class=\"up\"></a>\
				<span class=\"totalVotes\">55</span>\
				<a href=\"#\" class=\"down\"></a>\
				<a href=\"#\" class=\"comments\">55</a>\
				<a href=\"#\" class=\"favorites\"></a>\
			</div>\
		</article>";

	$("#content").prepend(newItem);
	showFormAddData();
	
	
}

$(function() {	

	$('nav ul #li_publish a').on('click', showFormAddData);
	$('#formAddData input[type=submit]').on('click', saveData);
	
});