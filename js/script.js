"use strict"

let knygos = {
    Istorija:[{
        ISBN: 9786099606309,
        Leidimo_metai: 2018,
        Pavadinimas: "BARBAROSA. Antrasis pasaulinis karas Europoje. Trečia knyga",
        Puslapių_skaičius: 720
    },
    {
        ISBN: 9789955736813,
        Leidimo_metai: 2019,
        Pavadinimas: "LIETUVOS ISTORIJA VISIEMS. II tomas",
        Puslapių_skaičius: 384
    },
    {
        ISBN: 9786094674044,
        Leidimo_metai: 2019,
        Pavadinimas: "Lietuvos kultūros istorija",
        Puslapių_skaičius: 356
    },
    {
        ISBN: 9789955267003,
        Leidimo_metai: 2019,
        Pavadinimas: "1944-ieji. Stalino pergalių kaina",
        Puslapių_skaičius: 536
    }
    ],
    Biografijos:[{
        ISBN: 9785430070021,
        Leidimo_metai: 2019,
        Pavadinimas: "Šekspyro biografija",
        Puslapių_skaičius: 96
    },
    {
        ISBN: 9789986398325,
        Leidimo_metai: 2015,
        Pavadinimas: "Tai, kas išlieka",
        Puslapių_skaičius: 372
    },
    {
        ISBN: 9786090114797,
        Leidimo_metai: 2014,
        Pavadinimas: "Popiežius Pranciškus. Savais žodžiais",
        Puslapių_skaičius: 208
    },
    {
        ISBN: 9789955293668,
        Leidimo_metai: 2018,
        Pavadinimas: "Neįmanomybės drąsa",
        Puslapių_skaičius: 285
    }
    ],
    Fantastika:[{
        ISBN: 9786090135839,
        Leidimo_metai: 2019,
        Pavadinimas: "Iškilimo šulinys. Miglos vaikai. 2 knyga",
        Puslapių_skaičius: 880
    },
    {
        ISBN: 9786090118191,
        Leidimo_metai: 2015,
        Pavadinimas: "SOSTŲ KARAI: Šokis su drakonais 1. Sapnai ir dulkės. Ledo ir ugnies giesmė. 5 knyga",
        Puslapių_skaičius: 600
    },
    {
        ISBN: 9789986856573,
        Leidimo_metai: 2000,
        Pavadinimas: "Sfera",
        Puslapių_skaičius: 315
    },
    {
        ISBN: 9789955344926,
        Leidimo_metai: 2014,
        Pavadinimas: "Sutiktieji",
        Puslapių_skaičius: 416
    }
    ]
};

for(let kategorija in knygos) {
    console.log("///// " + kategorija.replace("_", " ") + " (" + knygos[kategorija].length + " "
                + daugiskaitosForma(knygos[kategorija].length) + "):");
    console.log("----------------------------------------------");
    for(let knyga of knygos[kategorija]) {
        for (let savybe in knyga) {
            let notes = savybe == "Pavadinimas" ? isNew(knyga) : "";
            console.log(savybe.replace("_", " ") + ": " + knyga[savybe] + notes);
        }
        console.log("----------------------------------------------");
    }
}

function isNew(knyga) {
    let tittleAddition = knyga.Leidimo_metai == (new Date()).getFullYear() ? " (nauja knyga)" : "";
    return tittleAddition;
}

function daugiskaitosForma(number) {
    if (number % 100 > 20 || (number > 100 && number % 100 <= 9)) number %= 10;
    switch (number) {
        case 1:
            return "knyga";
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            return "knygos";
        default:
            return "knygų";
    }
}