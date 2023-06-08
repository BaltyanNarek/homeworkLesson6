$(function(){

	$('.btn').click(function(){
		$($(this).attr('data-target')).modal('show');
	});

	$('[data-dismiss="modal"]').click(function(){
		$('#' + $(this).closest('.modal').attr('id')).modal('hide');
	});


	function repeatNode(node, count, deep) {
	    for (let i = 0, copy; i < count - 1; i++) {
	        copy = node.cloneNode(deep);
	        node.parentNode.insertBefore(copy, node);
	    }
	}

	repeatNode(document.querySelector('.repeat-section'), 71, true);
});


