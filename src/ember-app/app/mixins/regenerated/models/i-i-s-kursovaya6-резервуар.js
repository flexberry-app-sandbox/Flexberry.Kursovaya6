import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  idР: DS.attr('number'),
  колвоТоп: DS.attr('decimal'),
  состояние: DS.attr('i-i-s-kursovaya6-состояния'),
  остаток: DS.belongsTo('i-i-s-kursovaya6-остаток', { inverse: null, async: false })
});

export let ValidationRules = {
  idР: {
    descriptionKey: 'models.i-i-s-kursovaya6-резервуар.validations.idР.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  колвоТоп: {
    descriptionKey: 'models.i-i-s-kursovaya6-резервуар.validations.колвоТоп.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  состояние: {
    descriptionKey: 'models.i-i-s-kursovaya6-резервуар.validations.состояние.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  остаток: {
    descriptionKey: 'models.i-i-s-kursovaya6-резервуар.validations.остаток.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РезервуарE', 'i-i-s-kursovaya6-резервуар', {
    колвоТоп: attr('Колво топ', { index: 0 }),
    состояние: attr('Состояние', { index: 1 }),
    idР: attr('Id Р', { index: 2 }),
    остаток: belongsTo('i-i-s-kursovaya6-остаток', 'Остаток', {
      номер: attr('Номер', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'номер' })
  });

  modelClass.defineProjection('РезервуарL', 'i-i-s-kursovaya6-резервуар', {
    колвоТоп: attr('Колво топ', { index: 0 }),
    состояние: attr('Состояние', { index: 1 }),
    idР: attr('Id Р', { index: 2 }),
    остаток: belongsTo('i-i-s-kursovaya6-остаток', 'Номер', {
      номер: attr('Номер', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
