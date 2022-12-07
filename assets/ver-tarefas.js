$(document).ready(() => {
    montarTarefaSavas()
})


function montarTarefaSavas() {

    const TAREFASALVAS = getTarefas()

    if (TAREFASALVAS.length) {
        for (let i = 0; i < TAREFASALVAS.length; i++) {
            $("#tbody-tarefas").append(
                "<tr>" +
                "<td>" +
                TAREFASALVAS[i].tarefa +
                "</td>" +
                "<td>" +
                TAREFASALVAS[i].data +
                "</td>" +
                "<td>" +
                TAREFASALVAS[i].status +
                "</td>" +
                "<td>Editar - Excluir</td>" +
                "</tr>"
            );
        }
    } else {
        $("#table-hide").hide()
        $(".msg-error").show()

    }

}

function getTarefas() {

    return JSON.parse(localStorage.getItem("tarefas-todo-list")) || [];

}