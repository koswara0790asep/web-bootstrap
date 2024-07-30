$('#send').click(function() {
    // get content
    var name = $('#name').val();
    var subject = $('#subject').val();
    var message = $('#message').val();

    // set content
    $('#respon').text('Terima kasih telah berkomentar.');
    $('#getname').text('Nama : ' + name);
    $('#getsubject').text('Subjek : ' + subject);
    $('#getmessage').text('Komentar : ' + message);
});