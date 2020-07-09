$(document).ready(() => {

    // agrego busqueda al span productFound
    $('#search-btn').click(function() {

		searchInput = $('input[name="search"]');
		
        $('#productFound').html(`<p>${searchInput.val()}</p>`);
        
    })
})