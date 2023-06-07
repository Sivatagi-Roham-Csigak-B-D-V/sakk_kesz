class Paraszt{
    constructor(){
    }
    lepes(hely,valasztott){
        let egy=[]
        if (valasztott=="♙"){
            if (typeof(this.#lepes1(hely))!=="undefined"){
                egy.push(this.#lepes1(hely))
            }
            if (typeof(this.#lepes2(hely))!=="undefined"){
                egy.push(this.#lepes2(hely))
            }
            if (typeof(this.#lepes3(hely))!=="undefined"){
                egy.push(this.#lepes3(hely))
            }
            if (hely>48 && 57>hely){
                if (typeof(this.#lepes4(hely))!=="undefined"){
                    egy.push(this.#lepes4(hely))
                }
            }
        }
        else{
            if (typeof(this.#lepes5(hely))!=="undefined"){
                egy.push(this.#lepes5(hely))
            }
            if (typeof(this.#lepes6(hely))!=="undefined"){
                egy.push(this.#lepes6(hely))
            }
            if (typeof(this.#lepes7(hely))!=="undefined"){
                egy.push(this.#lepes7(hely))
            }
            if (hely>8 && hely<17){
                if (typeof(this.#lepes8(hely))!=="undefined"){
                    egy.push(this.#lepes8(hely))
                }
            }
        }
        return egy
    }
        #lepes1(index){
            let szam=index-8
            if (szam>0){
                return szam
            }
        }
        #lepes2(index){
            let szam=index-7
            if (szam>0 &&this.#hatar(szam)==this.#hatar(index-8)){
                return szam
            }
        }
        #lepes3(index){
            let szam=index-9
            if (szam>0 &&this.#hatar(szam)==this.#hatar(index-8)){
                return szam
            }
        }
        #lepes4(index){
            let szam=index-2*8
            return szam
        }
        #lepes5(index){
            let szam=index+8
            if (szam<65){
                return szam
            }
        }
        #lepes6(index){
            let szam=index+7
            if (szam<65&&this.#hatar(szam)==this.#hatar(index+8)){
                return szam
            }
        }
        #lepes7(index){
            let szam=index+9
            
            if (szam<65&&this.#hatar(szam)==this.#hatar(index+8)){
                return szam
            }
        }
        #lepes8(index){
            let szam=index+2*8
            return szam
        }
        #hatar(index){
            index=index/8
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
    
  
  export default Paraszt;
  