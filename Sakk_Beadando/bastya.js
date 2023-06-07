class Bastya {
    constructor(){
        
    }

    lepes_tomb(index){
        let tomb=[]
        tomb.push(this.#Lepesf(index))
        tomb.push(this.#Lepesj(index))
        tomb.push(this.#Lepesb(index))
        tomb.push(this.#Lepesl(index))
        return tomb
    }

    #Lepesf(index){
        let szamok=[]
        let szamlalo=index
        while (szamlalo<65) {
            szamok.push(szamlalo)
            szamlalo=szamlalo+8
        }
        return szamok
    }
    #Lepesl(index){
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
            szamlalo=szamlalo-1
        }
        return szamok
    }
    #Lepesj(index){
        let szamok=[]
        let szamlalo=index
        while(this.#Lepes_Lehetoseg(index,szamlalo)){
            szamok.push(szamlalo)
            szamlalo=szamlalo+1
        }
        return szamok
    }
    
    #Lepes_Lehetoseg(index,szamlalo){
        let elso=this.#hatar(index/8)
        let masodik=this.#hatar(szamlalo/8)
        return masodik==elso
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
export default Bastya