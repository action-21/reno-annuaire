import { writeFileSync } from 'node:fs'
import axios from 'axios'
import communes from '@etalab/decoupage-administratif/data/communes.json' with { type: 'json'}
import departements from '@etalab/decoupage-administratif/data/departements.json' with { type: 'json'}
import domaines from './data/domaines.json' with { type: 'json'}
import periodes from './data/periodes.json' with { type: 'json'}

const output = []

const buildQS = (domaine, periode, departement) => {
  // Filtre les lignes par qualification active à une date donnée
  let qs = `lien_date_debut: {* TO ${periode}} AND lien_date_fin: {${periode} TO *}`

  if (domaine) {
    // Filtre les lignes par domaine de travaux
    qs += ` AND domaine: "${domaine}"`
  }
  if (departement === "2A" || departement === "2B") {
    // Filtre les lignes par code postal
    const codesPostaux = [...new Set(communes.filter(c => c.departement === departement).map(c => c.codesPostaux).flat())]
    qs += ` AND code_postal: (${codesPostaux.join(' OR ')})`
  } else {
    // Filtre les lignes par code postal
    qs += ` AND code_postal: /${departement}[0-9]+/`
  }
  return qs
}

for (const domaine of domaines) {
  for (const periode of periodes) {
    for (const departement of departements) {
      try {
        const response = await axios.get('https://data.ademe.fr/data-fair/api/v1/datasets/historique-rge/metric_agg', {
          params: {
            metric: 'cardinality',
            field: 'siret',
            qs: buildQS(domaine, periode, departement.code)
          }
        })
        output.push({ domaine, periode, departement: departement.code, total: response.data.metric })
      } catch (error) {
        console.error(error)
      }
    }
  }
  console.log('Domaine traité : ', domaine)
}

writeFileSync('output.json', JSON.stringify(output, null, 2))
