class Lo{
    constructor(){
    }

    lepes(hely){
    let egy=[]
    if (typeof(this.#lepes1(hely))!=="undefined"){
    egy.push(this.#lepes1(hely))
    }
    if (typeof(this.#lepes2(hely))!=="undefined"){
        egy.push(this.#lepes2(hely))
    }
    if (typeof(this.#lepes3(hely))!=="undefined"){
        egy.push(this.#lepes3(hely))
    }
    if (typeof(this.#lepes4(hely))!=="undefined"){
        egy.push(this.#lepes4(hely))
    }
    if (typeof(this.#lepes5(hely))!=="undefined"){
        egy.push(this.#lepes5(hely))
    }
    if (typeof(this.#lepes6(hely))!=="undefined"){
        egy.push(this.#lepes6(hely))
    }
    if (typeof(this.#lepes7(hely))!=="undefined"){
        egy.push(this.#lepes7(hely))
        }
    if (typeof(this.#lepes8(hely))!=="undefined"){
        egy.push(this.#lepes8(hely))
        }
    return egy
    
    }
    
    #lepes1(index){
        let szam=index+2*8+1
        if (this.#lehet(szam,index)){
            return szam
        }
    }
    #lepes2(index){
        let szam=index+2*8-1
        if (this.#lehet(szam,index)){
            return szam
        }
    }
    #lepes3(index){
        let szam=index+2*1+8
        if (this.#lehet3(szam,index)){
            return szam
        }
    }
    #lepes4(index){
        let szam=index+2*1-8
        if (this.#lehet2(szam,index)){
            return szam
        } 
    }
    #lepes5(index){
        let szam=index-2*8+1
        if (this.#lehet1(szam,index)){
            return szam
        }
    }
    #lepes6(index){
        let szam=index-2*8-1
        if (this.#lehet1(szam,index)){
            return szam
        }
    }
    #lepes7(index){
        let szam=index-2*1+8
        if (this.#lehet3(szam,index)){
            return szam
        }
    }
    #lepes8(index){
        let szam=index-2*1-8
        if (this.#lehet2(szam,index)){
            return szam
        }
    }
    
    #lehet(szam,index){
        let hatar1=szam>0
        let hatar2=szam<65
        if (hatar1&&hatar2){
            let sor=this.#sorok(index+8*2)
            let hat=this.#sorok(szam)
            return sor==hat
        }
    }
    #lehet1(szam,index){
        let hatar1=szam>0
        let hatar2=szam<65
        if (hatar1&&hatar2){
            let sor=this.#sorok(index-8*2)
            let hat=this.#sorok(szam)
            return sor==hat
        }
    }
    #lehet2(szam,index){
        let hatar1=szam>0
        let hatar2=szam<65
        if (hatar1 &&hatar2){
            let sor=this.#sorok(index-8)
            let hat=this.#sorok(szam)
            return sor==hat
        }
    }
    #lehet3(szam,index){
        let hatar1=szam>0
        let hatar2=szam<65
        if (hatar1&&hatar2){
            let sor=this.#sorok(index+8)
            let hat=this.#sorok(szam)
            return sor==hat
        }
    }
    #sorok(index){
        index=index/8
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
export default Lo