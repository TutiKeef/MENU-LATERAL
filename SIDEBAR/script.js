var menuitem = document.querySelectorAll('.item-menu')

function selectlink(){
    menuitem.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuitem.forEach((item)=>
item.addEventListener('click',selectlink)
)

//expandir menu

var btn,exp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btn-exp.addEventListener('click', function(){
menuSide.classList.toggle('expandir')
})