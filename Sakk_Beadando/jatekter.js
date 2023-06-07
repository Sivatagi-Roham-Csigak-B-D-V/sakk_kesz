import Palya from "./palya.js";
import InfoPanel from "./infoPanel.js";
import Bastya from "./bastya.js";
import Lo from "./lo.js";
import Futo from "./futo.js";
import Kiralyno from "./Kiralyno.js";
import Kiraly from "./kiraly.js";
import Paraszt from "./paraszt.js";
import { lista } from "./Babuklista.js";
class Jatekter {
  #lepes;
  constructor() {
    this.#lepes = 0;
    const szuloElem = $("section");
    let szamlalo = 0;
    const asideElem = $("aside");
    const infoPanel = new InfoPanel(asideElem);
    const playerPTag = $(asideElem).find("p").first();
    const jatekfolyamat = $(asideElem).find("p").last();
    const bastya = new Bastya();
    const lo = new Lo();
    const futo = new Futo();
    const kiralyno = new Kiralyno();
    const kiraly = new Kiraly();
    const paraszt = new Paraszt();
    const kivalsztottTarto = [];
    let tomb = [];
    for (let index = 1; index < 65; index++) {
      const id = index; // Generate a unique ID for each instance
      const palya = new Palya(index, szuloElem, id);
      szamlalo++;
      const cella = $(`#${index}`);
      const obj = lista[index - 1];
      if (obj && obj.szimbolumkod) {
        cella.html(obj.szimbolumkod); // Set the HTML content of the cell to the szimbolumkod
      }
      if (szamlalo === 16) {
        szamlalo = 0;
      }
    }
    $(window).on("elemKivalasztas", (event) => {
      const hely = event.detail.id;
      kivalsztottTarto.push(event);
      let eredeti_hely = kivalsztottTarto[0];
      let babu;
      if (kivalsztottTarto.length == 2) {
        eredeti_hely = kivalsztottTarto[0];
        babu = document.getElementById(eredeti_hely.detail.id).innerHTML;
      }
      const valasztott = document.getElementById(event.detail.id).innerHTML;
      if (!(kivalsztottTarto.length == 2 && hely == eredeti_hely.detail.id)) {
        if (valasztott == "♖" || valasztott == "♜") {
          if (kivalsztottTarto.length == 1) {
            let lepes = bastya.lepes_tomb(hely);
            for (let index = 0; index < lepes.length; index++) {
              for (
                let szamlalo = 0;
                szamlalo < lepes[index].length;
                szamlalo++
              ) {
                if (valasztott == "♜") {
                  if (
                    this.lephet_fekete(lepes[index][szamlalo], eredeti_hely)
                  ) {
                    tomb.push(lepes[index][szamlalo]);
                    if (
                      document.getElementById(lepes[index][szamlalo])
                        .innerHTML != "" &&
                      lepes[index][szamlalo] != eredeti_hely.detail.id
                    ) {
                      szamlalo = lepes[index].length;
                    }
                  } else {
                    szamlalo = lepes[index].length;
                  }
                } else {
                  if (this.lephet_feher(lepes[index][szamlalo], eredeti_hely)) {
                    tomb.push(lepes[index][szamlalo]);
                    if (
                      document.getElementById(lepes[index][szamlalo])
                        .innerHTML != "" &&
                      lepes[index][szamlalo] != eredeti_hely.detail.id
                    ) {
                      szamlalo = lepes[index].length;
                    }
                  } else {
                    szamlalo = lepes[index].length;
                  }
                }
              }
            }
            //mozgatas(hely,tomb)
            this.szinezes(tomb);
          } else {
            this.mozgatas(eredeti_hely.detail.id, tomb, babu, hely);
          }
        }
        if (valasztott == "♗" || valasztott == "♝") {
          if (kivalsztottTarto.length == 1) {
            let lepes = futo.lepes_tomb(hely);
            for (let index = 0; index < lepes.length; index++) {
              for (
                let szamlalo = 0;
                szamlalo < lepes[index].length;
                szamlalo++
              ) {
                if (valasztott == "♝") {
                  if (
                    this.lephet_fekete(lepes[index][szamlalo], eredeti_hely)
                  ) {
                    tomb.push(lepes[index][szamlalo]);
                    if (
                      document.getElementById(lepes[index][szamlalo])
                        .innerHTML != ""
                    ) {
                      szamlalo = lepes[index].length;
                    }
                  } else {
                    szamlalo = lepes[index].length;
                  }
                } else {
                  if (this.lephet_feher(lepes[index][szamlalo], eredeti_hely)) {
                    tomb.push(lepes[index][szamlalo]);
                    if (
                      document.getElementById(lepes[index][szamlalo])
                        .innerHTML != ""
                    ) {
                      szamlalo = lepes[index].length;
                    }
                  } else {
                    szamlalo = lepes[index].length;
                  }
                }
              }
            }
            //mozgatas(hely,tomb)
            this.szinezes(tomb);
          } else {
            this.mozgatas(eredeti_hely.detail.id, tomb, babu, hely);
          }
        }
        if (valasztott == "♞" || valasztott == "♘") {
          if (kivalsztottTarto.length == 1) {
            let lepes = lo.lepes(hely);
            for (let index = 0; index < lepes.length; index++) {
              if (valasztott == "♞") {
                if (this.lephet_fekete(lepes[index], eredeti_hely)) {
                  tomb.push(lepes[index]);
                }
              } else {
                if (this.lephet_feher(lepes[index], eredeti_hely)) {
                  tomb.push(lepes[index]);
                }
              }
            }
            this.szinezes(tomb);
          } else {
            this.mozgatas(eredeti_hely.detail.id, tomb, babu, hely);
          }
          //mozgatas(hely,tomb)
        }
        if (valasztott == "♔" || valasztott == "♚") {
          if (kivalsztottTarto.length == 1) {
            let lepes = kiraly.lepesek(hely);
            for (let index = 0; index < lepes.length; index++) {
              if (valasztott == "♚") {
                if (this.lephet_fekete(lepes[index], eredeti_hely)) {
                  tomb.push(lepes[index]);
                }
              } else {
                if (this.lephet_feher(lepes[index], eredeti_hely)) {
                  tomb.push(lepes[index]);
                }
              }
            }
            this.szinezes(tomb);
          } else {
            this.mozgatas(eredeti_hely.detail.id, tomb, babu, hely);
          }
          //mozgatas(hely,tomb)
        }
        if (valasztott == "♕" || valasztott == "♛") {
          if (kivalsztottTarto.length == 1) {
            let lepes = kiralyno.lepes_tomb(hely);
            for (let index = 0; index < lepes.length; index++) {
              for (
                let szamlalo = 0;
                szamlalo < lepes[index].length;
                szamlalo++
              ) {
                if (valasztott == "♛") {
                  if (
                    this.lephet_fekete(lepes[index][szamlalo], eredeti_hely)
                  ) {
                    tomb.push(lepes[index][szamlalo]);
                    if (
                      document.getElementById(lepes[index][szamlalo])
                        .innerHTML != "" &&
                      lepes[index][szamlalo] != eredeti_hely.detail.id
                    ) {
                      szamlalo = lepes[index].length;
                    }
                  }
                  else{
                    szamlalo = lepes[index].length;
                  }
                } else {
                  if (this.lephet_feher(lepes[index][szamlalo], eredeti_hely)) {
                    tomb.push(lepes[index][szamlalo]);
                    if (
                      document.getElementById(lepes[index][szamlalo])
                        .innerHTML != "" &&
                      lepes[index][szamlalo] != eredeti_hely.detail.id
                    ) {
                      szamlalo = lepes[index].length;
                    }
                  } else {
                    szamlalo = lepes[index].length;
                  }
                }
              }
            }
            //mozgatas(hely,tomb)
            this.szinezes(tomb);
          } else {
            this.mozgatas(eredeti_hely.detail.id, tomb, babu, hely);
          }
        }
        if (valasztott == "♙" || valasztott == "♟") {
          if (kivalsztottTarto.length == 1) {
            let lepes = paraszt.lepes(hely, valasztott);
            for (let index = 0; index < lepes.length; index++) {
              babu = document.getElementById(lepes[index]).innerHTML;
              if (
                document.getElementById(eredeti_hely.detail.id).innerHTML == "♟"
              ) {
                if (
                  ("♔" == babu ||
                    "♕" == babu ||
                    "♖" == babu ||
                    "♗" == babu ||
                    "♘" == babu ||
                    "♙" == babu) &&
                  !(
                    eredeti_hely.detail.id + 8 == lepes[index] ||
                    eredeti_hely.detail.id + 16 == lepes[index]
                  )
                ) {
                  tomb.push(lepes[index]);
                } else {
                  if (
                    (document.getElementById(lepes[index]).innerHTML == "" &&
                      eredeti_hely.detail.id + 8 == lepes[index]) ||
                    eredeti_hely.detail.id + 16 == lepes[index]
                  ) {
                    tomb.push(lepes[index]);
                  }
                }
              } else {
                if (
                  ("♚" == babu ||
                    "♛" == babu ||
                    "♜" == babu ||
                    "♝" == babu ||
                    "♞" == babu ||
                    "♟" == babu) &&
                  !(
                    eredeti_hely.detail.id - 8 == lepes[index] ||
                    eredeti_hely.detail.id - 16 == lepes[index]
                  )
                ) {
                  tomb.push(lepes[index]);
                } else {
                  if (
                    (document.getElementById(lepes[index]).innerHTML == "" &&
                      eredeti_hely.detail.id - 8 == lepes[index]) ||
                    eredeti_hely.detail.id - 16 == lepes[index]
                  ) {
                    tomb.push(lepes[index]);
                  }
                }
              }
            }
            this.szinezes(tomb);
          } else {
            this.mozgatas(eredeti_hely.detail.id, tomb, babu, hely);
          }
        }
        if (valasztott == "") {
          if (kivalsztottTarto.length == 1) {
            kivalsztottTarto.pop();
          } else {
            this.mozgatas(eredeti_hely.detail.id, tomb, babu, hely);
          }
        }
      } else {
        kivalsztottTarto.pop();
        kivalsztottTarto.pop();
        this.vissza_szinezes();
        tomb = [];
      }
      if (kivalsztottTarto.length == 2) {
        this.vissza_szinezes();
        kivalsztottTarto.pop();
        kivalsztottTarto.pop();
        if (this.#lepes % 2 === 0) {
          playerPTag.text("jelenlegi Játékos: feher");
        } else {
          playerPTag.text("jelenlegi Játékos: fekete");
        }
        this.#lepes++;
        infoPanel.updateLepes(this.#lepes);
        if (this.#lepes < 1000) {
          jatekfolyamat.text(`A játék folyamatbanss`);
        } else {
          jatekfolyamat.text("A játék vége!");
        }
        tomb = [];
      }
    });
  }

  mozgatas(eredeti_hely, tomb, babu, hely) {
    let szam = hely;
    let valszthato = false;
    for (let index = 0; index < tomb.length; index++) {
      if (szam == tomb[index] && szam != eredeti_hely) {
        index = tomb.length;
        valszthato = true;
      }
    }
    if (valszthato == true) {
      let mozgas = document.getElementById(hely);
      let eredeti = document.getElementById(eredeti_hely);
      mozgas.innerHTML = babu;
      eredeti.innerHTML = "";
    }
  }
  szinezes(tomb) {
    for (let index = 0; index < tomb.length; index++) {
      let msg = document.getElementById(tomb[index]);
      msg.style.backgroundColor = "#006400";
    }
  }
  vissza_szinezes() {
    for (let index = 1; index < 65; index++) {
      let elem = document.getElementById(index);
      if (
        index <= 8 ||
        (index > 16 && index <= 24) ||
        (index > 32 && index <= 40) ||
        (index > 48 && index <= 56)
      ) {
        if (index % 2 === 0) {
          elem.style.backgroundColor = "#A20D0D";
        } else {
          elem.style.backgroundColor = "#696969";
        }
      } else {
        if (index % 2 === 0) {
          elem.style.backgroundColor = "#696969";
        } else {
          elem.style.backgroundColor = "#A20D0D";
        }
      }
    }
  }
  lephet_feher(index, eredeti_hely) {
    let jo = true;
    let babu = document.getElementById(index).innerHTML;
    if ("" != babu && eredeti_hely.detail.id != index) {
      if (
        "♔" == babu ||
        "♕" == babu ||
        "♖" == babu ||
        "♗" == babu ||
        "♘" == babu ||
        "♙" == babu
      ) {
        jo = false;
      }
    }
    return jo;
  }
  lephet_fekete(index, eredeti_hely) {
    let jo = true;
    let babu = document.getElementById(index).innerHTML;
    if ("" != babu && eredeti_hely.detail.id != index) {
      if (
        "♛" == babu ||
        "♟" == babu ||
        "♚" == babu ||
        "♞" == babu ||
        "♝" == babu ||
        "♜" == babu
      ) {
        jo = false;
      }
    }
    return jo;
  }
}

export default Jatekter;
