console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola 1'
obj1['nome'] = 'Bola 2' // Não recomendável!
console.log(obj1.nome)

function Obj(nome) {
// O this é visível no escopo global!
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
   
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
//console.log(obj3.exec())
obj3.exec()