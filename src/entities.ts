export type AccompagnateurProps = {
  raison_sociale: string
  siren: string
  siret: string
  adresse: Adresse
  email: string
  telephone: string
  site_internet: string | null
  date_debut_agrement: Date
  date_fin_agrement: Date
}

export class Accompagnateur {
  constructor (private props: AccompagnateurProps) {}

  get raison_sociale (): string {
    return this.props.raison_sociale
  }

  get siren (): string {
    return this.props.siren
  }

  get siret (): string {
    return this.props.siret
  }

  get adresse (): Adresse {
    return this.props.adresse
  }

  get email (): string {
    return this.props.email
  }

  get telephone (): string {
    return this.props.telephone
  }

  get site_internet (): string | null {
    return this.props.site_internet
  }

  get date_debut_agrement (): Date {
    return this.props.date_debut_agrement
  }

  get date_fin_agrement (): Date {
    return this.props.date_fin_agrement
  }
}

export type AuditeurProps = {
  raison_sociale: string
  siren: string
  siret: string
  adresse: Adresse
  email: string
  telephone: string
  site_internet: string | null
  qualifications: QualificationRge[]
}

export class Auditeur {
  constructor (private props: AuditeurProps) {}

  get raison_sociale (): string {
    return this.props.raison_sociale
  }

  get siren (): string {
    return this.props.siren
  }

  get siret (): string {
    return this.props.siret
  }

  get adresse (): Adresse {
    return this.props.adresse
  }

  get email (): string {
    return this.props.email
  }

  get telephone (): string {
    return this.props.telephone
  }

  get site_internet (): string | null {
    return this.props.site_internet
  }

  get qualifications (): QualificationRge[] {
    return this.props.qualifications
  }

  /**
   * TODO
   */
  public is_active (date: Date): boolean {
    return false
  }
}

export type EspaceConseilProps = {
  id: string
  raison_sociale: string
  siren: string
  siret: string
  adresse: Adresse
  email: string
  telephone: string
  site_internet: string | null
  actes_couverts: Acte[]
}

export class EspaceConseil {
  constructor (private props: EspaceConseil) {}

  get id (): string {
    return this.props.id
  }

  get raison_sociale (): string {
    return this.props.raison_sociale
  }

  get siren (): string {
    return this.props.siren
  }

  get siret (): string {
    return this.props.siret
  }

  get adresse (): Adresse {
    return this.props.adresse
  }

  get email (): string {
    return this.props.email
  }

  get telephone (): string {
    return this.props.telephone
  }

  get site_internet (): string | null {
    return this.props.site_internet
  }

  get actes_couverts (): Acte[] {
    return this.props.actes_couverts
  }

  public couvre (code_acte: string): boolean {
    return (
      this.actes_couverts.filter(
        (item: Acte): boolean => item.code === code_acte
      ).length > 0
    )
  }
}

export type ProfessionnelProps = {
  raison_sociale: string
  siren: string
  siret: string
  adresse: Adresse
  email: string
  telephone: string
  site_internet: string | null
  qualifications: QualificationRge[]
}

export class Professionnel {
  constructor (private props: ProfessionnelProps) {}

  get raison_sociale (): string {
    return this.props.raison_sociale
  }

  get siren (): string {
    return this.props.siren
  }

  get siret (): string {
    return this.props.siret
  }

  get adresse (): Adresse {
    return this.props.adresse
  }

  get email (): string {
    return this.props.email
  }

  get telephone (): string {
    return this.props.telephone
  }

  get site_internet (): string | null {
    return this.props.site_internet
  }

  get qualifications (): QualificationRge[] {
    return this.props.qualifications
  }

  public couvre (code_domaine_rge: string, date: Date): boolean {
    return (
      this.qualifications.filter(
        (item: QualificationRge): boolean =>
          item.is_active(date) && item.couvre(code_domaine_rge)
      ).length > 0
    )
  }

  public is_active (date: Date): boolean {
    for (const qualification of this.qualifications) {
      if (qualification.is_active(date)) {
        return true
      }
    }
    return false
  }
}

export type AdresseProps = {
  cle_interop: string
  commune_insee: string
  commune_nom: string
  voie_nom: string
  numero: string
  position: number[]
  x: number
  y: number
}

export class Adresse {
  constructor (private props: AdresseProps) {}

  get cle_interop (): string {
    return this.props.cle_interop
  }

  get commune_insee (): string {
    return this.props.commune_insee
  }

  get commune_nom (): string {
    return this.props.commune_nom
  }

  get voie_nom (): string {
    return this.props.voie_nom
  }

  get numero (): string {
    return this.props.numero
  }

  get position (): number[] {
    return this.props.position
  }

  get x (): number {
    return this.props.x
  }

  get y (): number {
    return this.props.y
  }
}

export type QualificationRgeProps = {
  code: string
  nom: string
  date_debut: Date
  date_fin: Date
  attestation: string
  domaines_rge: DomaineRge[]
}

export class QualificationRge {
  constructor (private props: QualificationRgeProps) {}

  get code (): string {
    return this.props.code
  }

  get nom (): string {
    return this.props.nom
  }

  get date_debut (): Date {
    return this.props.date_debut
  }

  get date_fin (): Date {
    return this.props.date_fin
  }

  get attestation (): string {
    return this.props.attestation
  }

  get domaines_rge (): DomaineRge[] {
    return this.props.domaines_rge
  }

  public couvre (code_domaine_rge: string): boolean {
    return (
      this.props.domaines_rge.filter(
        (item: DomaineRge): boolean => item.code === code_domaine_rge
      ).length > 0
    )
  }

  public is_active (date: Date): boolean {
    return this.props.date_debut <= date && this.props.date_fin >= date
  }
}

export type DomaineRgeProps = {
  code: string
  nom: string
}

export class DomaineRge {
  constructor (private props: DomaineRgeProps) {}

  get code (): string {
    return this.props.code
  }

  get nom (): string {
    return this.props.nom
  }
}

export type ActeProps = {
  code: string
  nom: string
}

export class Acte {
  constructor (private props: ActeProps) {}

  get code (): string {
    return this.props.code
  }

  get nom (): string {
    return this.props.nom
  }
}
