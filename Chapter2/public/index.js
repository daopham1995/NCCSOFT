var noteTemp =  '<div class="note">'
    +	'<a href="javascript:;" class="button remove">X</a>'
    + 	'<div class="note_cnt">'
    +		'<textarea class="title" placeholder="Enter note title"></textarea>'
    + 		'<textarea class="cnt" placeholder="Enter note description here"></textarea>'
    +	'</div> '
    +'</div>';

var noteZindex = 1;
function deleteNote(){
    $(this).parent('.note').hide("puff",{ percent: 133}, 250);
};

function newNote() {
    $(noteTemp).hide().appendTo("#board").show("fade", 300).draggable().on('dragstart',
        function(){
            $(this).zIndex(++noteZindex);
        });

    $('.button').click(deleteNote);
    $('textarea').autogrow();

    $('.note')
    return false;
};

$(document).ready(function() {

    $("#board").height($(document).height());

    $("#add_new").click(newNote);
    $('.remove').click(deleteNote);
    newNote();

    return false;
});