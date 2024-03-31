import {
  Accompagnateur,
  Auditeur,
  EspaceConseil,
  Professionnel
} from './entities'
import { AccompagnateurFindQuery, AccompagnateurSearchQuery } from './queries'
import { AuditeurFindQuery, AuditeurSearchQuery } from './queries'
import { EspaceConseilFindQuery, EspaceConseilSearchQuery } from './queries'
import { ProfessionnelFindQuery, ProfessionnelSearchQuery } from './queries'

export interface AccompagnateurRepository {
  find(query: AccompagnateurFindQuery): Promise<Accompagnateur | null>
  search(query: AccompagnateurSearchQuery): Promise<Accompagnateur[]>
}

export interface AuditeurRepository {
  find(query: AuditeurFindQuery): Promise<Auditeur | null>
  search(query: AuditeurSearchQuery): Promise<Auditeur[]>
}

export interface EspaceConseilRepository {
  find(query: EspaceConseilFindQuery): Promise<EspaceConseil | null>
  search(query: EspaceConseilSearchQuery): Promise<EspaceConseil[]>
}

export interface ProfessionnelRepository {
  find(query: ProfessionnelFindQuery): Promise<Professionnel | null>
  search(query: ProfessionnelSearchQuery): Promise<Professionnel[]>
}
