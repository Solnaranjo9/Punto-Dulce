window.addEventListener('DOMContentLoaded', () => {
    console.log('la pagina esta cargada')
  ​
    const button = document.querySelector('#click-me')
    button.addEventListener('click', () => {
      console.log('Hiciste click en el boton!')
    })
  })

