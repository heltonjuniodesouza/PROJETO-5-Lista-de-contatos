
let input = document.querySelector('input')
let p = document.querySelector('p')

const contacts = [

    { name: 'Ailton', number: '(81) 99900-0099', city: 'Carpina-PE' },
    { name: 'Adriele', number: '(81) 98855-9950', city: 'Carpina-PE' },
    { name: 'Ragner', number: '(81) 99492-8756', city: 'Engenho do Meio-PE' },
    { name: 'Cecillya', number: '(81) 99234-7843', city: 'Carpina-PE' },
    { name: 'Matheus', number: '(81) 97934-4343', city: 'Carpina-PE' },
    { name: 'Izabel', number: '(81) 98935-5422', city: 'Carpina-PE' },
    { name: 'Arthur', number: '(81) 98935-5422', city: 'Concordia-SC' },
    { name: 'Vera Lucia', number: '(81) 99900-0099', city: 'Carpina-PE' },
    { name: 'Karina', number: '(81) 98855-9950', city: 'Carpina-PE' },
    { name: 'Raquel', number: '(81) 99492-8756', city: 'Engenho do Meio-PE' },
    { name: 'Cecilia', number: '(81) 99234-7843', city: 'Carpina-PE' },
    { name: 'Maria', number: '(81) 97934-4343', city: 'Carpina-PE' },
    { name: 'Izabela', number: '(81) 98935-5422', city: 'Carpina-PE' },
    { name: 'Ariana', number: '(81) 98935-5422', city: 'Concordia-SP' },
]

function search() {

    for (let i = 0; i < contacts.length; i++) {

        if (input.value.toLowerCase() === contacts[i].name.toLowerCase()) {

            p.innerHTML = `Contato Encontrado -> Nome : ${contacts[i].name},
            Tel : ${contacts[i].number}, Cidade : ${contacts[i].city}`

            break
        } else {
            p.innerHTML = 'Contato não Encontrado, tente novamente!'
        }
    }

}