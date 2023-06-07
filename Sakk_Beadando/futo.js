class Futo{
    constructor(){
    }

    lepes_tomb(index){
        let tomb=[]
        tomb.push(this.#Lepesekbf(index))
        tomb.push(this.#Lepesekjf(index))
        tomb.push(this.#Lepesekjl(index))
        tomb.push(this.#Lepesekbl(index))
        return tomb
    }
    #Lepesekjf(index){
        let szamok=[]
        let szam=index
        while (this.#hatarr((szam+8)/8)==this.#hatarr((szam+9)/8) && szam+9<=64) {
            szam=szam+9
            szamok.push(szam)
        }
        return szamok

    }
    #Lepesekbf(index){
        let szam=index
        let szamok=[]
        while (this.#hatarr((szam+8)/8)==this.#hatarr((szam+7)/8) && szam+7<64) {
            szam=szam+7
            szamok.push(szam)
        }
        return szamok
    }
    #Lepesekjl(index){
        let szam=index
        let szamok=[]
        while (this.#hatarr((szam-8)/8)==this.#hatarr((szam-9)/8) && szam-9>0) {
            szam=szam-9
            szamok.push(szam)
        }
        return szamok
    }   
    #Lepesekbl(index){
        let szam=index
        let szamok=[]
        while (this.#hatarr((szam-8)/8)==this.#hatarr((szam-7)/8) && szam-7>0) {
            szam=szam-7
            szamok.push(szam)
        }
        return szamok
    }
    #hatarr(index){
        if (index>7){
            return 8
        }
        if (index>6){
            return 7
        }
        if (index>5){
            return 6
        }
        if (index>4){
            return 5
        }
        if (index>3){
            return 4
        }
        if (index>2){
            return 3
        }
        if (index>1){
            return 2
        }
        if (index>0){
            return 1
        }
    }
}
export default Futo