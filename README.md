# @renolab/annuaire

Ce projet propose une API dédiée à la recherche des professionnels de la rénovation énergétique.

## Synthèse

### Objectifs

🎯 Proposer un service numérique d'annuaire des professionnels de la rénovation énergétique  

### Usage

👉 Information à l'usager dans le cadre du service public de la rénovation énergétique  
👉 Application des règles de cohérence dans le cadre des demandes de financement de travaux (doctrine CEE/MPR)  

### Contact

[Adrien Rosi Dit Rozzi](https://www.linkedin.com/in/adrienrosi/)

## Feuille de route

1. Définition du périmètre de l'annuaire
2. Inventaire des données disponibles
3. Design de l'API
4. Développement et déploiement de l'API

### 1. Définition du périmètre de l'annuaire

Quatre métiers ont été identifiés comme intervenant d'un parcours de rénovation énergétique :

- Les conseillers en rénovation énergétique
- Les accompagnateurs de la rénovation énergétique
- Les auditeurs
- Les professionnels de la rénovation énergétique

### 2. Inventaire des données disponibles

**Conseillers en rénovation énergétique**

[Liste Espaces Conseil France Renov'](https://data.ademe.fr/datasets/liste-espaces-conseil-france-renov)

**Accompagnateurs de la rénovation énergétique**

[Mon Accompagnateur Rénov'](https://france-renov.gouv.fr/annuaires-professionnels/mon-accompagnateur-renov)

Une demande d'ouverture des données a été faite sur data.gouv.fr.

**Auditeurs**

- [Historique des entreprises RGE depuis 2014](https://data.ademe.fr/datasets/historique-rge)
- [Liste des entreprises RGE](https://data.ademe.fr/datasets/liste-des-entreprises-rge-2)

**Professionnels de la rénovation énergétique**

- [Historique des entreprises RGE depuis 2014](https://data.ademe.fr/datasets/historique-rge)
- [Liste des entreprises RGE](https://data.ademe.fr/datasets/liste-des-entreprises-rge-2)

### 3. Design de l'API

**Opérations à implémenter**

- Rechercher une liste des établissements agréés Mon Accompagnateur Rénov' par SIREN, date et filtres géographiques
- Rechercher un établissement agréé Mon Accompagnateur Rénov' par son numéro de SIRET et date
- Rechercher une liste d'auditeurs RGE par SIREN, date et filtres géographiques
- Rechercher un auditeur RGE par son numéro de SIRET et date
- Rechercher une liste d'espaces conseils France Rénov' par filtres géographiques et actes couverts
- Rechercher un espace conseil France Rénov' par son identifiant unique
- Rechercher une liste de professionnels RGE par SIREN, date, domaines RGE couverts et filtres géographiques
- Rechercher un professionnel RGE par son numéro de SIRET, date et domaines RGE couverts

### 4. Développement et déploiement de l'API

**🕰️ A venir**
