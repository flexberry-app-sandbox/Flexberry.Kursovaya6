import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya6-база-клиента', 'Unit | Serializer | i-i-s-kursovaya6-база-клиента', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya6-база-клиента',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kursovaya6-состояния',

    'model:i-i-s-kursovaya6-база-клиента',
    'model:i-i-s-kursovaya6-остаток',
    'model:i-i-s-kursovaya6-покупка',
    'model:i-i-s-kursovaya6-резервуар',
    'model:i-i-s-kursovaya6-ценновая-стела',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
