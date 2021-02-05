$(document).ready(function(){
    var personaje = {
        format: 'json'
    }


    $.ajax({
        url: "https://rickandmortyapi.com/api/character/2",
        type: "GET",
        data: personaje,
        dataType: 'json',
        success: function(data){
            var episodes = data.episode;
            $('#charImage').attr('src', data.image);
            $('#charName').text('Nombre: ');
            $('#charName').append(data.name);
            $('#charGender').text('Género: ');
            $('#charGender').append(data.gender);

            for (var i = 0; i<5; i++) {
                var anchor = $(document.createElement('a')).attr('href', episodes[i]);
                anchor.text('Episodio ' + (i+1));
                $('#episodios').append(anchor);
            } 
        }
    });

    
    $('.titulo').click(function(){
        if($(this).next().hasClass('plegable')){
            $(this).next().removeClass('plegable');
            $(this).next().addClass('desplegado');
            $('.negativo').css('display','block');
            $('.positivo').css('display','none');
        } else {
            $(this).next().removeClass('desplegado');
            $(this).next().addClass('plegable');
            $('.negativo').css('display','none');
            $('.positivo').css('display','block');
        }
    });
});
