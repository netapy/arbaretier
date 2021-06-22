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
            "statut": "Rejeté",
            "traitpar": "b.paire7",
            "traitle": "25/07/2020",
            "action": "Document falsifié",
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
    }];

    //fonction load
    localStorage.setItem('dataDemandes', JSON.stringify(dataTableau));
}