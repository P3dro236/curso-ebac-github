const form = document.querySelector("#form")
let counter = 0
form.addEventListener("submit", function(e){
  e.preventDefault()

  const nomeForm = document.querySelector("#form-nome")
  const telForm = document.querySelector("#form-tel")
  const table = document.querySelector("#agenda")
  
  let novaLinha = document.createElement("tr")
  let [cell1, cell2] = [document.createElement("td"), document.createElement("td")]

  cell1.innerHTML = nomeForm.value
  cell2.innerHTML = telForm.value

  novaLinha.appendChild(cell1)
  novaLinha.appendChild(cell2)
  
  if(counter < 14){
    table.appendChild(novaLinha)
    counter++
  } else{
    alert("Número máximo de pessoas alcançado")
  }
})