import { Serializer as ОстатокSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya6-остаток';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОстатокSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
