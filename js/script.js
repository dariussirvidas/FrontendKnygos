"use strict"

let knygos = {
        istorija:[{
            ISBN: 9786099606309,
            leidimoMetai: 2018,
            pavadinimas: "BARBAROSA. Antrasis pasaulinis karas Europoje. Trečia knyga",
            puslapiuSkaicius: 720
        },
        {
            ISBN: 9789955736813,
            leidimoMetai: 2019,
            pavadinimas: "LIETUVOS ISTORIJA VISIEMS. II tomas",
            puslapiuSkaicius: 384
        },
        {
            ISBN: 9786094674044,
            leidimoMetai: 2019,
            pavadinimas: "Lietuvos kultūros istorija",
            puslapiuSkaicius: 356
        },
        {
            ISBN: 9789955267003,
            leidimoMetai: 2019,
            pavadinimas: "1944-ieji. Stalino pergalių kaina",
            puslapiuSkaicius: 536
        }
    ],
    biografijos:[{
        ISBN: 9785430070021,
        leidimoMetai: 2019,
        pavadinimas: "Šekspyro biografija",
        puslapiuSkaicius: 96
    },
        {
            ISBN: 9789986398325,
            leidimoMetai: 2015,
            pavadinimas: "Tai, kas išlieka",
            puslapiuSkaicius: 372
        },
        {
            ISBN: 9786090114797,
            leidimoMetai: 2014,
            pavadinimas: "Popiežius Pranciškus. Savais žodžiais",
            puslapiuSkaicius: 208
        },
        {
            ISBN: 9789955293668,
            leidimoMetai: 2018,
            pavadinimas: "Neįmanomybės drąsa",
            puslapiuSkaicius: 285
        }
    ],
    fantastika:[{
        ISBN: 9786090135839,
        leidimoMetai: 2019,
        pavadinimas: "Iškilimo šulinys. Miglos vaikai. 2 knyga",
        puslapiuSkaicius: 880
    },
        {
            ISBN: 9786090118191,
            leidimoMetai: 2015,
            pavadinimas: "SOSTŲ KARAI: Šokis su drakonais 1. Sapnai ir dulkės. Ledo ir ugnies giesmė. 5 knyga",
            puslapiuSkaicius: 600
        },
        {
            ISBN: 9789986856573,
            leidimoMetai: 2000,
            pavadinimas: "Sfera",
            puslapiuSkaicius: 315
        },
        {
            ISBN: 9789955344926,
            leidimoMetai: 2014,
            pavadinimas: "Sutiktieji",
            puslapiuSkaicius: 416
        }
    ]
};

for(let kategorija in knygos) {
    console.log(kategorija + ":");
    for(knyga of kategorija) {

    }
}

/*
for(let kategorija in knygos) {
    for(let duomenys in knygos[kategorija]) {
        if(duomenys != "rezultatai") {
            console.log(mokinys[duomenys]);
        }
        else {
            console.log("Rezultatai:");
            for(let rezultatai in mokinys[duomenys]) {
                console.log(rezultatai+":"+mokinys[duomenys][rezultatai]);
            }
        }
    }
}
*/
