$(function(){
    $("#botao").click(inserirTarefa);
});

function inserirTarefa(){
    var tabela = $(".tarefas").find("tbody");
    var campoTitulo = $(".campoTitulo").val();
    var campoObs = $(".campoObs").val();
    var campoPrioridade = $(".campoPrioridade").val();

    if (campoTitulo.trim() === "" || campoObs.trim() === "" || campoPrioridade === "") {
    alert("Preencha todos os campos!");
    return;
    }
   

    var linha = funLinha(campoTitulo, campoObs, campoPrioridade);
    linha.find(".botaoDeletar").click(deletaLinha);
    tabela.append(linha);

}


function funLinha(campoTitulo, campoObs, campoPrioridade){ // função com parametro.
    var linha = $("<tr>");
    var colunaTarefa = $("<td>").text(campoTitulo);
    var colunaObs = $("<td>").text(campoObs);
    var colunaPrioridade = $("<td>").text(campoPrioridade);
    var colunaDelete = $("<td>");

    var bDeletar = $("<a>").addClass("botaoDeletar").attr("href","#"); 
    var icone = $("<i>").addClass("material-icons").text("delete");
    bDeletar.append(icone);
    colunaDelete.append(bDeletar);

    $(".campoTitulo").val("");
    $(".campoObs").val("");
    $(".campoPrioridade").val("Selecione a prioridade");
    $(".campoTitulo").focus();

    linha.append(colunaTarefa);// anexa mais código
    linha.append(colunaObs);
    linha.append(colunaPrioridade);
    linha.append(colunaDelete);

    return linha

}


function deletaLinha(){
    event.preventDefault(); // tira o padrão
    $(this).parent().parent().parent().remove();
}


