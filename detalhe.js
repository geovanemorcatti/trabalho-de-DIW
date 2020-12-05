const TMDB_ENDPOINT_BASE = 'https://api.themoviedb.org/3';

function AbrirDetalhe() {
    $.ajax({
            // Passar a URL ENDPOINT BASE + /movie/now_playing
            url: TMDB_ENDPOINT_BASE + '/search/movie',
            data: {
                api_key: '139d546cf21a2f4d9be8cb2accb33f74',
                //query: "star wars"
                //var aux:toString($(document).getElementById('search')),

                //query: data.results[i].id,
                //jovem.consolelog()
                query: $("#jovem").val(),
            }



        })
        .done(function(data) {

            let codigo_html = '';

            // Montar os cards
            for (i = 0; i < data.results.length; i++) {

                // Concatenar o código do Card com os dados do JSON
                titulo = data.results[i].title;
                imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
                descricao = data.results[i].overview;

                codigo_html += `<div class="col-sm-7 col-md-5 col-lg-4 "><div class="card" style="width: 18rem;">
                <img src="${imagem}" class="card-img-top"
                    alt="${titulo}">
                <div class="card-body">
                    <h5 class="card-title">${titulo}</h5>
                    <p class="card-text">${descricao}</p>
                    <a href="detalhes.html" class="btn btn-primary">Abrir filme</a>
                </div>
            </div></div>`;
            }


        });

    // Repassar os cards para a página
    $('#catazdes').html(codigo_html)

}

$(document).ready(function() {

    //MostraFilmesEmCartaz();
    //var a = $("#BTcarrega").click(function() {
    //input("#bt1".value)


    //})
    //a.console.log(typeof a)
    //let form = document.getElementById('bt1');
    //console.log(form.type)
    //$('#BTcarrega').click(PesquisaFilmes);
    $('#btn btn-primary').click(AbrirDetalhe)

});