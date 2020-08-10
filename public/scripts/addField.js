document.querySelector("#add-time")
.addEventListener('click', cloneField)

function cloneField(){
    // Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field) {
        field.value = ""
    })

    // Onde deseja colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}