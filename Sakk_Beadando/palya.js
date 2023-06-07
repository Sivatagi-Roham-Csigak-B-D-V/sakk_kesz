class Palya {
    #allapot
    constructor(index, szuloElem, id) {
      this.index = index;
      this.id = id;
      this.divElem = $("<div class='cella'></div>");
      this.divElem.attr("id", this.id);
      this.#allapot=true
      szuloElem.append(this.divElem);
      
      this.applyBackground();
      this.divElem.on("click",()=>{
        if(this.#allapot){
          this.esemenyTriggger();
          //this.setPosition();
        }
      })

      
    }
  
    applyBackground() {
      if (this.index <= 8 || (this.index > 16 && this.index <= 24) || (this.index > 32 && this.index <= 40) || (this.index > 48 && this.index <= 56)) {
        if (this.index % 2 === 0) {
          this.divElem.css("background-color", "#A20D0D");
        } else {
          this.divElem.css("background-color", "#696969");
        }
      } else {
        if (this.index % 2 === 0) {
          this.divElem.css("background-color", "#696969");
        } else {
          this.divElem.css("background-color", "#A20D0D");
        }
      }
    }
    esemenyTriggger(){
    const esemeny=new CustomEvent("elemKivalasztas",{detail:this});
    window.dispatchEvent(esemeny)
    }
    /*setPosition(){
      const esemeny=new CustomEvent("Movment",{detail:this})
      window.dispatchEvent(esemeny)
    }*/
  }
  
export default Palya