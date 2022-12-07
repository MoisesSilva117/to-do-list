$(document).ready( () => {
    $('#form-cadastro').submit( (e) => {
        
        let tarefa = $('#tarefa').val()
        let data = $('#data').val()
        
        if(!tarefa || !data) {
            $("#alert-error-tarefa").show()
            return false
        }

        saveTarefa(tarefa, data)
        
        e.preventDefault();
    })

    $(".close").click( () => {

        $(this).parent().css("display" , "none")

    })

    $('.date').mask('00/00/0000')
})

function saveTarefa (tarefa, data) {

    const objTarefaSave = {
        id: new Date().getTime(), tarefa, 
        data,
        status: "PENDENTE",
    }

    let tarefaCadastradaSave = JSON.parse(localStorage.getItem("tarefas-todo-list") )

    if (tarefaCadastradaSave && tarefaCadastradaSave.length) {
        
        tarefaCadastradaSave.push(objTarefaSave)
        
        localStorage.setItem("tarefas-todo-list", 
        JSON.stringify(tarefaCadastradaSave))
    
    } else {

        localStorage.setItem("tarefas-todo-list", 
        JSON.stringify([objTarefaSave]))
    }

    $("#alert-suss-tarefa").show()

    $('#tarefa').val('')
    $('#data').val('')

}

