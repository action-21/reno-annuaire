import axios from 'axios'
import {
  Accompagnateur,
  Auditeur,
  EspaceConseil,
  Professionnel
} from './entities'
import {
  AccompagnateurFindQuery,
  AccompagnateurSearchQuery,
  AuditeurFindQuery,
  AuditeurSearchQuery,
  EspaceConseilFindQuery,
  EspaceConseilSearchQuery,
  ProfessionnelFindQuery,
  ProfessionnelSearchQuery
} from './queries'
import {
  AccompagnateurRepository,
  AuditeurRepository,
  EspaceConseilRepository,
  ProfessionnelRepository
} from './repositories'

export class BaseEntrepriseRgeAPIRepository {}

export class AccompagnateurAPIRepository implements AccompagnateurRepository {
  find (query: AccompagnateurFindQuery): Promise<Accompagnateur | null> {}

  search (query: AccompagnateurSearchQuery): Promise<Accompagnateur[]> {}
}

export class AuditeurAPIRepository
  extends BaseEntrepriseRgeAPIRepository
  implements AuditeurRepository
{
  find (query: AuditeurFindQuery): Promise<Auditeur | null> {}

  search (query: AuditeurSearchQuery): Promise<Auditeur[]> {}
}

export class EspaceConseilAPIRepository implements EspaceConseilRepository {
  find (query: EspaceConseilFindQuery): Promise<EspaceConseil | null> {}

  search (query: EspaceConseilSearchQuery): Promise<EspaceConseil[]> {}
}


export class ProfessionnelAPIRepository
  extends BaseEntrepriseRgeAPIRepository
  implements ProfessionnelRepository
{
  find (query: ProfessionnelFindQuery): Promise<Professionnel | null> {}

  search (query: ProfessionnelSearchQuery): Promise<Professionnel[]> {}

  transform(): Professionnel {

  }
}
