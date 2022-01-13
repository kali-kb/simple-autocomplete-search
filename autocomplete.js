let input = document.getElementById('query')
let suggestion = document.getElementById('suggestion')
// let listContainer = document.getElementById('list-container')
let clear = document.getElementById('remover')

clear.addEventListener('click', function(){
      let firstItem = document.querySelector('ul')
      firstItem.parentElement.removeChild(firstItem)
})

input.addEventListener('input', func)

function func(e){
  fetch(`https://api.datamuse.com/sug?s=${input.value}`)
  .then(res => {return res.json()})
  .then(finalRes => {
    if(document.querySelectorAll('#list-container').length > 0){
      let firstItem = document.querySelector('ul')
      firstItem.parentNode.removeChild(firstItem)
    }
    let listContainer = document.createElement('ul')
    listContainer.setAttribute('id', 'list-container')
    document.body.appendChild(listContainer)
    for(i=0; i < finalRes.length; i++){
      let list = document.createElement('li')
      list.textContent = finalRes[i].word
      listContainer.appendChild(list)
    }
  })
}
