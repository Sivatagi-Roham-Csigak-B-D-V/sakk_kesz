class Kiralyno{
    constructor(){
    }

    lepes(index){
        let tomb=[]
        tomb.push(this.#Lepesekbf(index))
        tomb.push(this.#Lepesekjf(index))
        tomb.push(this.#Lepesekjl(index))
        tomb.push(this.#Lepesekbl(index))
        tomb.push(this.#Lepesf(index))
        tomb.push(this.#Lepesj(index))
        tomb.push(this.#Lepesb(index))
        tomb.push(this.#Lepesl(index))
        return tomb
    }
    #Lepesf(index){
        let szamok=[]
        let szamlalo=index
        while (szamlalo<64) {
            szamok.push(szamlalo)
            szamlalo=szamlalo+8
        }
        return szamok
    }
    #Lepesj(index){
        let szamok=[]
        let szamlalo=index
        while (szamlalo>0) {
            szamok.push(szamlalo)
            szamlalo=szamlalo-8
        }
        return szamok
    }
    #Lepesb(index){
        let szamok=[]
        let szamlalo=index
        while(this.#Lepes_Lehetoseg(index,szamlalo)){
            szamok.push(szamlalo)
            szamlalo=szamlalo+1
         }
         return szamok
    }
    #Lepesl(index){
        let szamok=[]
        let szamlalo=index
        while(szamlalo>-4 && this.#Lepes_Lehetoseg(index,szamlalo)){
            szamok.push(szamlalo)
            szamlalo=szamlalo-1
        }
        return szamok
    }
    
    #Lepes_Lehetoseg(index,szamlalo){
        let elso=this.#hatar(index/8)
        let masodik=this.#hatar(szamlalo/8)
        return masodik==elso
    }
    #Lepesekjf(index){
        let szamok=[]
        let szam=index
        while (this.#hatar((szam+8)/8)==this.#hatar((szam+9)/8) && szam+9<=64) {
            szam=szam+9
            szamok.push(szam)
        }
        return szamok

    }
    #Lepesekbf(index){
        let szam=index
        let szamok=[]
        while (this.#hatar((szam+8)/8)==this.#hatar((szam+7)/8) && szam+7<64) {
            szam=szam+7
            szamok.push(szam)
        }
        return szamok
    }
    #Lepesekjl(index){
        let szam=index
        let szamok=[]
        while (this.#hatar((szam-8)/8)==this.#hatar((szam-9)/8) && szam-9>0) {
            szam=szam-9
            szamok.push(szam)
        }
        return szamok
    }   
    #Lepesekbl(index){
        let szam=index
        let szamok=[]
        while (this.#hatar((szam-8)/8)==this.#hatar((szam-7)/8) && szam-7>0) {
            szam=szam-7
            szamok.push(szam)
        }
        return szamok
    }
    #hatar(index){
        if (index>8){
            return 8
        }
        if (index>7){
            return 7
        }
        if (index>6){
            return 6
        }
        if (index>5){
            return 5
        }
        if (index>4){
            return 4
        }
        if (index>3){
            return 3
        }
        if (index>2){
            return 2
        }
        if (index>1){
            return 1
        }
        if (index>0){
            return 0
        }
    }
}
export default Kiralyno