import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya6-ценновая-стела', 'Unit | Model | i-i-s-kursovaya6-ценновая-стела', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
