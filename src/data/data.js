export const data = [
    {
        id: 1,
        data: "01-01",
        importo: 10.00+1,
        note: "",
        categoria: "spesa",
        tipologia: "ordinaria"
    },
    {
        id: 2,
        data: "01-02",
        importo: 14.79,
        note: "test",
        categoria: "utenze",
        tipologia: "ordinaria"
    },
    {
        id: 3,
        data: "01-03",
        importo: 9.99,
        note: "",
        categoria: "viaggi",
        tipologia: "straordinaria"
    },
    {
        id: 4,
        data: "01-04",
        importo: 0.99,
        note: "",
        categoria: "spesa",
        tipologia: "ordinaria"
    }
]

export const entrate = [
    {
        id: 1,
        data: "07-01",
        importo: 8,
        note: "test",
        categoria: "buoni pasto - sede",
        tipologia: "regolare"
    },
    {
        id: 2,
        data: "07-02",
        importo: 115,
        note: "",
        categoria: "lezioni private",
        tipologia: "non regolare"
    },
    {
        id: 3,
        data: "07-03",
        importo: 8,
        note: "",
        categoria: "buoni pasto - sede",
        tipologia: "regolare"
    }
];

export const speseMensili = [
    {
        id: 1,
        anno: 2023,
        mese: "precedenti",
        affitto: 371,
        utenze: 83.99,
        spesa: 140,
        mobilita: 40,
        piacere: 44,
        regali: 20,
        altro: 5,
        totale: 703.99
    },
    {
        id: 2,
        anno: 2024,
        mese: "mar",
        affitto: 371,
        utenze: 80.99,
        spesa: 160,
        mobilita: 16,
        piacere: 74.44,
        regali: 40,
        altro: 3.50,
        totale: 745.93
    },
    {
        id: 3,
        anno: 2024,
        mese: "apr",
        affitto: 371,
        utenze: 69.99,
        spesa: 118.77,
        mobilita: 16,
        piacere: 82.86,
        regali: 34.90,
        altro: 27.99,
        totale: 721.51,
    }
]

export const incassiMensili = [
    {
        id: 1,
        anno: 2024,
        mese: "apr",
        stipendio: 0,
        buoni_pasto: 140,
        lezioni_private: 0,
        regali: 400,
        totale: 1587.00
    }
]

export const categorieOrd = ["", "affitto", "utenze", "spesa", "piacere", "regali", "mobilità", "altro"];
export const categorieStr = ["", "istruzione", "viaggi", "generali", "emergenze", "sanità", "regali", "utenze"];
export const categorieReg = ["", "buoni pasto - sede", "buoni pasto - remote"];
export const categorieNonReg = ["", "lezioni private"];