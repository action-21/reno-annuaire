export type AccompagnateurSearchQuery = {
  code_insee?: string
  distance?: number
  siren?: string
  date?: Date
}

export type AccompagnateurFindQuery = {
  siret: string
}

export type AuditeurSearchQuery = {
  code_insee?: string
  distance?: number
  siren?: string
  date?: Date
}

export type AuditeurFindQuery = {
  siret: string
}

export type EspaceConseilSearchQuery = {
  code_insee?: string
  distance?: number
  'acte[]'?: string[]
}

export type EspaceConseilFindQuery = {
  id: string
}

export type ProfessionnelSearchQuery = {
  code_insee?: string
  distance?: number
  siren?: string
  'domaine_rge[]'?: string[]
  date?: Date
}

export type ProfessionnelFindQuery = {
  siret: string
}
