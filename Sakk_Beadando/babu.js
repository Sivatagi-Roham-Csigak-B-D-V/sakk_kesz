import { lista } from "./Babuklista.js"
import { kulcslista } from "./Babuklista.js"
import Bastya from "./bastya.js";
import Futo from "./futo.js";
import Paraszt from "./paraszt.js";
import Kiraly from "./kiraly.js";
import Kiralyno from "./Kiralyno.js";
import Lo from "./lo.js";

class Babu{
    constructor(nev){
    this.setNev(nev)
    }
    getNev(){
        return this.nev
    }
    setNev(nev){
        switch(nev){
            case "fekete_Paraszt":
                const parasztb=new Paraszt("")
                this.nev=parasztb.kod()
                break;
            case "fekete_Bastya":
                const bastyab=new Bastya("")
                this.nev=bastyab.kod()
                break;
            case "fekete_Futo":
                const futob=new Futo("");
                this.nev=futob.kod()
                break;
            case "fekete_Ló":
                const lob=new Lo("")
                this.nev=lob.kod()
                break;
            case "fekete_királynő":
                const kiralynob=new Kiralyno("")
                this.nev=kiralynob.kod()
                break;
            case "fekete_király":
                const kiralyb=new Kiraly("")
                this.nev=kiralyb.kod()
                break;
            case "feher_Paraszt":
                const parasztf=new Paraszt("feher")
                this.nev=parasztf.kod()
                break;
            case "feher_Bastya":
                const bastyaf=new Bastya("feher")
                this.nev=bastyaf.kod()
                break;
            case "feher_Futo":
                const futof=new Futo("feher");
                this.nev=futof.kod()
                break;
            case "feher_Ló":
                const lof=new Lo("feher")
                this.nev=lof.kod()
                break;
            case "feher_királynő":
                const kiralynof=new Kiralyno("feher")
                this.nev=kiralynof.kod()
                break;
            case "feher_király":
                const kiralyf=new Kiraly("feher")
                this.nev=kiralyf.kod()
                break;
        }
    }

}
export default Babu
