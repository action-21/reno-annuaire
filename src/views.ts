import {
  Accompagnateur,
  AccompagnateurProps,
  Acte,
  ActeProps,
  Adresse,
  AdresseProps,
  Auditeur,
  AuditeurProps,
  DomaineRge,
  DomaineRgeProps,
  EspaceConseil,
  EspaceConseilProps,
  Professionnel,
  QualificationRge,
  QualificationRgeProps
} from './entities'

export type AccompagnateurView =
  | AccompagnateurProps
  | {
      adresse: AdresseView
    }

export const renderAccompagnateur = (
  entity: Accompagnateur
): AccompagnateurView => {
  return {
    raison_sociale: entity.raison_sociale,
    siren: entity.siren,
    siret: entity.siret,
    adresse: renderAdresse(entity.adresse),
    email: entity.email,
    telephone: entity.telephone,
    site_internet: entity.site_internet,
    date_debut_agrement: entity.date_debut_agrement,
    date_fin_agrement: entity.date_fin_agrement
  }
}

export type AuditeurView =
  | AuditeurProps
  | {
      adresse: AdresseView
      qualifications: QualificationRgeView[]
    }

export const renderAuditeur = (entity: Auditeur): AuditeurView => {
  return {
    raison_sociale: entity.raison_sociale,
    siren: entity.siren,
    siret: entity.siret,
    adresse: renderAdresse(entity.adresse),
    email: entity.email,
    telephone: entity.telephone,
    site_internet: entity.site_internet,
    qualifications: entity.qualifications.map(
      (item: QualificationRge): QualificationRgeView =>
        renderQualificationRge(item)
    )
  }
}

export type EspaceConseilView =
  | EspaceConseilProps
  | {
      adresse: AdresseView
      actes_couverts: ActeView[]
    }

export const renderEspaceConseil = (
  entity: EspaceConseil
): EspaceConseilView => {
  return {
    raison_sociale: entity.raison_sociale,
    siren: entity.siren,
    siret: entity.siret,
    adresse: renderAdresse(entity.adresse),
    email: entity.email,
    telephone: entity.telephone,
    site_internet: entity.site_internet,
    actes_couverts: entity.actes_couverts.map(
      (item: Acte): ActeView => renderActe(item)
    )
  }
}

export type ProfessionnelView =
  | AuditeurProps
  | {
      adresse: AdresseView
      qualifications: QualificationRgeView[]
    }

export const renderProfessionnel = (
  entity: Professionnel
): ProfessionnelView => {
  return {
    raison_sociale: entity.raison_sociale,
    siren: entity.siren,
    siret: entity.siret,
    adresse: renderAdresse(entity.adresse),
    email: entity.email,
    telephone: entity.telephone,
    site_internet: entity.site_internet,
    qualifications: entity.qualifications.map(
      (item: QualificationRge): QualificationRgeView =>
        renderQualificationRge(item)
    )
  }
}

export type AdresseView = AdresseProps

export const renderAdresse = (entity: Adresse): AdresseView => {
  return {
    cle_interop: entity.cle_interop,
    commune_insee: entity.commune_insee,
    commune_nom: entity.commune_nom,
    voie_nom: entity.voie_nom,
    numero: entity.numero,
    position: entity.position,
    x: entity.x,
    y: entity.y
  }
}

export type ActeView = ActeProps

export const renderActe = (entity: Acte): ActeView => {
  return {
    code: entity.code,
    nom: entity.nom
  }
}

export type DomaineRgeView = DomaineRgeProps

export const renderDomaineRge = (entity: DomaineRge): DomaineRgeView => {
  return {
    code: entity.code,
    nom: entity.nom
  }
}

export type QualificationRgeView =
  | QualificationRgeProps
  | {
      domaines_rge: DomaineRgeView[]
    }

export const renderQualificationRge = (
  entity: QualificationRge
): QualificationRgeView => {
  return {
    code: entity.code,
    nom: entity.nom,
    date_debut: entity.date_debut,
    date_fin: entity.date_fin,
    attestation: entity.attestation,
    domaines_rge: entity.domaines_rge.map(
      (item: DomaineRge): DomaineRgeView => renderDomaineRge(item)
    )
  }
}
