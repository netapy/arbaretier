const resetData = () => {

    //les données 

    let dataTableau = [{
        "ligne": {
            "num": "001",
            "prenom": "Louise",
            "nom": "Lelieu",
            "cp": "75016",
            "ddmd": "22/03/2020",
            "dcs": "22/03/2020",
            "type": "Renouvellement",
            "statut": "En attente de traitement",
            "traitpar": "",
            "traitle": "",
            "action": "<span class='modLink' href='' onclick='goPageSuiv(this)'>Accéder à la demande</span>",
        },
        "ecran": {
            "pdf": "assistante_maternelle_agrement_7.pdf",
            "infoSuffis": "Non",
            "motifNC": null,
            "addr": "75016 Paris",
            "capMax": "3",
            "dateAgr": ["19/04/2018", "18/04/2024"]
        }
    }, {
        "ligne": {
            "num": "002",
            "prenom": "Armand",
            "nom": "Dupont",
            "cp": "75015",
            "ddmd": "10/05/2020",
            "dcs": "22/06/2020",
            "type": "Inscription",
            "statut": "En attente de traitement",
            "traitpar": "",
            "traitle": "",
            "action": "<span class='modLink' href='' onclick='goPageSuiv(this)'>Accéder à la demande</span>",
        },
        "ecran": {
            "pdf": "assistante_maternelle_agrement_7.pdf",
            "infoSuffis": "Non",
            "motifNC": null,
            "addr": "02400 Chateau Thierry",
            "capMax": "3",
            "dateAgr": ["19/04/2018", "18/04/2024"]
        }
    }, {
        "ligne": {
            "num": "003",
            "prenom": "Timur",
            "nom": "Tadam",
            "cp": "75015",
            "ddmd": "10/05/2020",
            "dcs": "22/06/2020",
            "type": "Inscription",
            "statut": "En attente de traitement",
            "traitpar": "",
            "traitle": "",
            "action": "<span class='modLink' href='' onclick='goPageSuiv(this)'>Accéder à la demande</span>",
        },
        "ecran": {
            "pdf": "assistante_maternelle_agrement_7.pdf",
            "infoSuffis": "Non",
            "motifNC": null,
            "addr": "02400 Chateau Thierry",
            "capMax": "3",
            "dateAgr": ["19/04/2018", "18/04/2024"]
        }
    }, {
        "ligne": {
            "num": "004",
            "prenom": "Theo",
            "nom": "Vingt Huit",
            "cp": "75015",
            "ddmd": "10/05/2020",
            "dcs": "21/06/2021",
            "type": "Inscription",
            "statut": "Rejeté",
            "traitpar": "b.paire7",
            "traitle": "21/06/2021",
            "action": "<i>Document falsifié</i>",
        },
        "ecran": {
            "pdf": "assistante_maternelle_agrement_7.pdf",
            "infoSuffis": "Non",
            "motifNC": null,
            "addr": "02400 Chateau Thierry",
            "capMax": "3",
            "dateAgr": ["19/04/2018", "18/04/2024"]
        }
    }, {
        "ligne": {
            "num": "005",
            "prenom": "Lea",
            "nom": "Paris",
            "cp": "59000",
            "ddmd": "02/02/2021",
            "dcs": "22/06/2021",
            "type": "Renouvellement",
            "statut": "En attente de traitement",
            "traitpar": "",
            "traitle": "",
            "action": "<span class='modLink' href='' onclick='goPageSuiv(this)'>Accéder à la demande</span>",
        },
        "ecran": {
            "pdf": "assistante_maternelle_agrement_7.pdf",
            "infoSuffis": "Non",
            "motifNC": null,
            "addr": "52 avenue de longchamp 59000",
            "capMax": "2",
            "dateAgr": ["12/04/2020", "02/04/2028"]
        }
    }, {
        "ligne": {
            "num": "006",
            "prenom": "Inès",
            "nom": "Clementine",
            "cp": "69000",
            "ddmd": "20/06/2021",
            "dcs": "20/06/2021",
            "type": "Inscription",
            "statut": "En attente de traitement",
            "traitpar": "",
            "traitle": "",
            "action": "<span class='modLink' href='' onclick='goPageSuiv(this)'>Accéder à la demande</span>",
        },
        "ecran": {
            "pdf": "assistante_maternelle_agrement_7.pdf",
            "infoSuffis": "Non",
            "motifNC": null,
            "addr": "6 boulevard Théatre 69000",
            "capMax": "2",
            "dateAgr": ["20/09/2018", "28/09/2028"]
        }
    }, {
        "ligne": {
            "num": "007",
            "prenom": "Bobby",
            "nom": "Artiste",
            "cp": "13007",
            "ddmd": "22/05/2021",
            "dcs": "22/05/2021",
            "type": "Inscription",
            "statut": "En attente de traitement",
            "traitpar": "",
            "traitle": "",
            "action": "<span class='modLink' href='' onclick='goPageSuiv(this)'>Accéder à la demande</span>",
        },
        "ecran": {
            "pdf": "assistante_maternelle_agrement_7.pdf",
            "infoSuffis": "Non",
            "motifNC": null,
            "addr": "23 avenue Kennedy 13007 Marseille",
            "capMax": "3",
            "dateAgr": ["17/04/2019", "18/04/2022"]
        }
    }, {
        "ligne": {
            "num": "008",
            "prenom": "Anais",
            "nom": "Ville",
            "cp": "58000",
            "ddmd": "20/08/2020",
            "dcs": "18/06/2021",
            "type": "Inscription",
            "statut": "Rejeté",
            "traitpar": "t.avsar2",
            "traitle": "18/06/2021",
            "action": "<i>ASM radié</i>",
        },
        "ecran": {
            "pdf": "assistante_maternelle_agrement_7.pdf",
            "infoSuffis": "Non",
            "motifNC": null,
            "addr": "58000 Chateau Thierry",
            "capMax": "1",
            "dateAgr": ["09/01/2018", "18/04/2026"]
        }
    }, {
        "ligne": {
            "num": "009",
            "prenom": "Louise",
            "nom": "Portes",
            "cp": "75019",
            "ddmd": "02/05/2020",
            "dcs": "22/06/2021",
            "type": "Inscription",
            "statut": "En attente de traitement",
            "traitpar": "",
            "traitle": "",
            "action": "<span class='modLink' href='' onclick='goPageSuiv(this)'>Accéder à la demande</span>",
        },
        "ecran": {
            "pdf": "assistante_maternelle_agrement_7.pdf",
            "infoSuffis": "Non",
            "motifNC": null,
            "addr": "02400 Chateau Thierry",
            "capMax": "3",
            "dateAgr": ["19/04/2018", "18/04/2024"]
        }
    }, {
        "ligne": {
            "num": "010",
            "prenom": "Charlotte",
            "nom": "Montgolfière",
            "cp": "22000",
            "ddmd": "12/05/2021",
            "dcs": "12/05/2021",
            "type": "Inscription",
            "statut": "En attente de traitement",
            "traitpar": "",
            "traitle": "",
            "action": "<span class='modLink' href='' onclick='goPageSuiv(this)'>Accéder à la demande</span>",
        },
        "ecran": {
            "pdf": "assistante_maternelle_agrement_7.pdf",
            "infoSuffis": "Non",
            "motifNC": null,
            "addr": "22000 Ville",
            "capMax": "3",
            "dateAgr": ["19/02/2019", "18/02/2026"]
        }
    }, ];

    //fonction load
    localStorage.setItem('dataDemandes', JSON.stringify(dataTableau));
}