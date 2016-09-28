import { normalize } from 'normalizr';
import { camelizeKeys } from 'humps';
import { SCHEMAS } from './schemas';

export default function responseNormalizer(json, schemaName) {
  const
    schema = SCHEMAS[schemaName],
    camelizedJson = camelizeKeys(json);

  return normalize(camelizedJson, schema);
}
