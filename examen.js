$(document).ready(function(){
    $("#guardar1").click(function(e){
        e.preventDefault();
        let nombre = $("#nombre1").val();
        let apellido = $("#apellido1").val();

        $.ajax({
            url: "archivo.php",
            type: "POST",
            data: {
                "nom":nombre,
                "ape":apellido
            }
        })
        .done(function(res){
            $("#respuesta").html(res)
        });
    });
});