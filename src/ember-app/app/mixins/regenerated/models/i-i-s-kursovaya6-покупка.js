import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('decimal'),
  сумма: DS.attr('decimal'),
  базаКлиента: DS.belongsTo('i-i-s-kursovaya6-база-клиента', { inverse: null, async: false }),
  остаток: DS.belongsTo('i-i-s-kursovaya6-остаток', { inverse: null, async: false }),
  ценноваяСтела: DS.belongsTo('i-i-s-kursovaya6-ценновая-стела', { inverse: null, async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-kursovaya6-покупка.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-kursovaya6-покупка.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  базаКлиента: {
    descriptionKey: 'models.i-i-s-kursovaya6-покупка.validations.базаКлиента.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  остаток: {
    descriptionKey: 'models.i-i-s-kursovaya6-покупка.validations.остаток.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  ценноваяСтела: {
    descriptionKey: 'models.i-i-s-kursovaya6-покупка.validations.ценноваяСтела.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПокупкаE', 'i-i-s-kursovaya6-покупка', {
    сумма: attr('Сумма', { index: 0 }),
    количество: attr('Количество', { index: 1 }),
    ценноваяСтела: belongsTo('i-i-s-kursovaya6-ценновая-стела', 'Ценновая стела', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' }),
    остаток: belongsTo('i-i-s-kursovaya6-остаток', 'Остаток', {
      номер: attr('Номер', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'номер' }),
    базаКлиента: belongsTo('i-i-s-kursovaya6-база-клиента', 'База клиента', {
      логин: attr('Логин', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'логин' })
  });

  modelClass.defineProjection('ПокупкаL', 'i-i-s-kursovaya6-покупка', {
    сумма: attr('Сумма', { index: 0 }),
    количество: attr('Количество', { index: 1 }),
    ценноваяСтела: belongsTo('i-i-s-kursovaya6-ценновая-стела', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true }),
    остаток: belongsTo('i-i-s-kursovaya6-остаток', 'Номер', {
      номер: attr('Номер', { index: 3 })
    }, { index: -1, hidden: true }),
    базаКлиента: belongsTo('i-i-s-kursovaya6-база-клиента', 'Логин', {
      логин: attr('Логин', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
