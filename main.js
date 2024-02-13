class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque
        switch (this.tipo) {
            case "mago":
                ataque = "Usou Magia"
                break;
            case "guerreiro":
                ataque = "Usou espada"
                break
            case "monge":
                ataque = "Usou artes marciais"
                break
            case "ninja":
                ataque = "Usou shuriken"
                break
            default:
                 ataque = "atacou"
               
        }

        return `O ${this.tipo} atacou usando ${ataque}` 
    }
}

const mago = new Heroi("gandalf", 1000, "mago")
console.log(mago.Heroi, atacar())

const guerreiro = new Heroi("John Wick", 48, "guerreiro")
console.log(guerreiro.Heroi, atacar())

const monge = new Heroi("Tim", 40, "monge")
console.log(monge.Heroi, atacar())

const ninja = new Heroi("kakashi", 49, "ninja")
console.log(ninja.Heroi, atacar())