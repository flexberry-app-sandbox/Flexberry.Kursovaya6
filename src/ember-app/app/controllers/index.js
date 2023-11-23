import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kursovaya6.caption'),
          title: i18n.t('forms.application.sitemap.kursovaya6.title'),
          children: [{
            link: 'i-i-s-kursovaya6-покупка-l',
            caption: i18n.t('forms.application.sitemap.kursovaya6.i-i-s-kursovaya6-покупка-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya6.i-i-s-kursovaya6-покупка-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-kursovaya6-ценновая-стела-l',
            caption: i18n.t('forms.application.sitemap.kursovaya6.i-i-s-kursovaya6-ценновая-стела-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya6.i-i-s-kursovaya6-ценновая-стела-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-kursovaya6-база-клиента-l',
            caption: i18n.t('forms.application.sitemap.kursovaya6.i-i-s-kursovaya6-база-клиента-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya6.i-i-s-kursovaya6-база-клиента-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-kursovaya6-резервуар-l',
            caption: i18n.t('forms.application.sitemap.kursovaya6.i-i-s-kursovaya6-резервуар-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya6.i-i-s-kursovaya6-резервуар-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-kursovaya6-остаток-l',
            caption: i18n.t('forms.application.sitemap.kursovaya6.i-i-s-kursovaya6-остаток-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya6.i-i-s-kursovaya6-остаток-l.title'),
            icon: 'tags',
            children: null
          }]
        }
      ]
    };
  }),
})