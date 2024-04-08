# @renolab/annuaire

Ce projet propose une API dédiée à la recherche des professionnels de la rénovation énergétique.

## Synthèse

### Objectifs

🎯 Proposer un service numérique d'annuaire des professionnels de la rénovation énergétique  

### Usage

👉 Information à l'usager dans le cadre du service public de la rénovation énergétique  
👉 Application des règles de cohérence dans le cadre des demandes de financement de travaux (doctrine CEE/MPR)  
👉 Application des règles de cohérence dans le cadre des contrôles des travaux  

### Contact

[Adrien Rosi Dit Rozzi](https://www.linkedin.com/in/adrienrosi/)

## Feuille de route

1. ~~Conceptualisation~~
2. ~~Planification~~
3. **Conception**
4. Déploiement

## Contribuer

N'hésitez pas à échanger en créant de nouvelles [discussions](https://github.com/renolab/annuaire/discussions).

## Concepts

### Périmètre de l'annuaire

Quatre métiers ont été identifiés comme intervenant d'un parcours de rénovation énergétique :

- Les conseillers en rénovation énergétique
- Les accompagnateurs de la rénovation énergétique
- Les auditeurs
- Les professionnels de la rénovation énergétique

### Inventaire des données disponibles

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

## Planification

1. ~~Compilation des sources de données disponibles~~
2. ~~Demande d'ouverture des données manquantes~~
3. Design de l'API
4. Développement et déploiement de l'API

## API

### Actions métiers

- Rechercher une liste des établissements agréés Mon Accompagnateur Rénov' par SIREN, date et filtres géographiques
- Rechercher un établissement agréé Mon Accompagnateur Rénov' par son numéro de SIRET et date
- Rechercher une liste d'auditeurs RGE par SIREN, date et filtres géographiques
- Rechercher un auditeur RGE par son numéro de SIRET et date
- Rechercher une liste d'espaces conseils France Rénov' par filtres géographiques et actes couverts
- Rechercher un espace conseil France Rénov' par son identifiant unique
- Rechercher une liste de professionnels RGE par SIREN, date, domaines RGE couverts et filtres géographiques
- Rechercher un professionnel RGE par son numéro de SIRET, date et domaines RGE couverts

### Design

Une documentation interactive de l'API est accessible en copiant le contenu du fichier [openapi.yaml](https://raw.githubusercontent.com/renolab/annuaire/main/public/openapi.yaml) dans [l'éditeur Swagger](https://editor-next.swagger.io/).

### Stack

- Typescript
- ExpressJS
- Vite
- OpenAPI
