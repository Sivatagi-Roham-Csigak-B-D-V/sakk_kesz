class Kiraly{
    constructor(){
        
    }
    lepesek(hely){
        let egy=[]
        if (typeof(this.#Lepesek1(hely))!=="undefined"){
            egy.push(this.#Lepesek1(hely))
            }
        if (typeof(this.#Lepesek2(hely))!=="undefined"){
            egy.push(this.#Lepesek2(hely))
        }
        if (typeof(this.#Lepesek3(hely))!=="undefined"){
            egy.push(this.#Lepesek3(hely))
        }
        if (typeof(this.#Lepesek4(hely))!=="undefined"){
            egy.push(this.#Lepesek4(hely))
        }
        if (typeof(this.#Lepesek5(hely))!=="undefined"){
            egy.push(this.#Lepesek5(hely))
        }
        if (typeof(this.#Lepesek6(hely))!=="undefined"){
            egy.push(this.#Lepesek6(hely))
        }
        if (typeof(this.#Lepesek7(hely))!=="undefined"){
            egy.push(this.#Lepesek7(hely))
            }
        if (typeof(this.#Lepesek8(hely))!=="undefined"){
            egy.push(this.#Lepesek8(hely))
            }
        return egy
    }
    #Lepesek1(index){
        let szam=index+7
        if (this.#lehet(szam,index+8)){
            return szam
        }
    }
    #Lepesek2(index){
        let szam=index+8
        if (this.#lehet(szam,index+8)){
            return szam
        }
    }
    #Lepesek3(index){
        let szam=index+9
        if (this.#lehet(szam,index+8)){
            return szam
        }
    }
    #Lepesek4(index){
        let szam=index+1
        if (this.#lehet(szam,index)){
            return szam
        }
    }
    #Lepesek5(index){
        let szam=index-1
        if (this.#lehet(szam,index)){
            return szam
        }
    }
    #Lepesek6(index){
        let szam=index-7
        if (this.#lehet(szam,index-8)){
            return szam
        }
    }
    #Lepesek7(index){
        let szam=index-8
        if (this.#lehet(szam,index-8)){
            return szam
        }
    }
    #Lepesek8(index){
        let szam=index-9
        if (this.#lehet(szam,index-8)){
            return szam
        }
    }

    #lehet(szam,index){
        let hatar2=szam<65
        if (hatar2){
            let sor=this.#sorok(index+8)
            let hat=this.#sorok(szam)
            return sor==hat
        }
    }
    #lehet1(szam,index){
        let hatar1=szam>0
        if (hatar1){
            let sor=this.#sorok(index-8)
            let hat=this.#sorok(szam)
            return sor==hat
        }
    }
    #lehet2(szam,index){
            let sor=this.#sorok(index)
            let hat=this.#sorok(szam)
            return sor==hat
    }
    #sorok(index){
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
export default Kiraly