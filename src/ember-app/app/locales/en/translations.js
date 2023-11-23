import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKursovaya6БазаКлиентаLForm from './forms/i-i-s-kursovaya6-база-клиента-l';
import IISKursovaya6ОстатокLForm from './forms/i-i-s-kursovaya6-остаток-l';
import IISKursovaya6ПокупкаLForm from './forms/i-i-s-kursovaya6-покупка-l';
import IISKursovaya6РезервуарLForm from './forms/i-i-s-kursovaya6-резервуар-l';
import IISKursovaya6ЦенноваяСтелаLForm from './forms/i-i-s-kursovaya6-ценновая-стела-l';
import IISKursovaya6БазаКлиентаEForm from './forms/i-i-s-kursovaya6-база-клиента-e';
import IISKursovaya6ОстатокEForm from './forms/i-i-s-kursovaya6-остаток-e';
import IISKursovaya6ПокупкаEForm from './forms/i-i-s-kursovaya6-покупка-e';
import IISKursovaya6РезервуарEForm from './forms/i-i-s-kursovaya6-резервуар-e';
import IISKursovaya6ЦенноваяСтелаEForm from './forms/i-i-s-kursovaya6-ценновая-стела-e';
import IISKursovaya6БазаКлиентаModel from './models/i-i-s-kursovaya6-база-клиента';
import IISKursovaya6ОстатокModel from './models/i-i-s-kursovaya6-остаток';
import IISKursovaya6ПокупкаModel from './models/i-i-s-kursovaya6-покупка';
import IISKursovaya6РезервуарModel from './models/i-i-s-kursovaya6-резервуар';
import IISKursovaya6ЦенноваяСтелаModel from './models/i-i-s-kursovaya6-ценновая-стела';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya6-база-клиента': IISKursovaya6БазаКлиентаModel,
    'i-i-s-kursovaya6-остаток': IISKursovaya6ОстатокModel,
    'i-i-s-kursovaya6-покупка': IISKursovaya6ПокупкаModel,
    'i-i-s-kursovaya6-резервуар': IISKursovaya6РезервуарModel,
    'i-i-s-kursovaya6-ценновая-стела': IISKursovaya6ЦенноваяСтелаModel
  },

  'application-name': 'Kursovaya6',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kursovaya6',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya6',
          title: 'Kursovaya6'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        kursovaya6: {
          caption: 'Kursovaya6',
          title: 'Kursovaya6',
          'i-i-s-kursovaya6-покупка-l': {
            caption: 'Покупка',
            title: ''
          },
          'i-i-s-kursovaya6-ценновая-стела-l': {
            caption: 'Ценновая стела',
            title: ''
          },
          'i-i-s-kursovaya6-база-клиента-l': {
            caption: 'База клиента',
            title: ''
          },
          'i-i-s-kursovaya6-резервуар-l': {
            caption: 'Резервуар',
            title: ''
          },
          'i-i-s-kursovaya6-остаток-l': {
            caption: 'Остаток',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kursovaya6-база-клиента-l': IISKursovaya6БазаКлиентаLForm,
    'i-i-s-kursovaya6-остаток-l': IISKursovaya6ОстатокLForm,
    'i-i-s-kursovaya6-покупка-l': IISKursovaya6ПокупкаLForm,
    'i-i-s-kursovaya6-резервуар-l': IISKursovaya6РезервуарLForm,
    'i-i-s-kursovaya6-ценновая-стела-l': IISKursovaya6ЦенноваяСтелаLForm,
    'i-i-s-kursovaya6-база-клиента-e': IISKursovaya6БазаКлиентаEForm,
    'i-i-s-kursovaya6-остаток-e': IISKursovaya6ОстатокEForm,
    'i-i-s-kursovaya6-покупка-e': IISKursovaya6ПокупкаEForm,
    'i-i-s-kursovaya6-резервуар-e': IISKursovaya6РезервуарEForm,
    'i-i-s-kursovaya6-ценновая-стела-e': IISKursovaya6ЦенноваяСтелаEForm
  },

});

export default translations;
