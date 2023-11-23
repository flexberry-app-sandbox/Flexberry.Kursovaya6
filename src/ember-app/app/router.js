import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya6-база-клиента-l');
  this.route('i-i-s-kursovaya6-база-клиента-e',
  { path: 'i-i-s-kursovaya6-база-клиента-e/:id' });
  this.route('i-i-s-kursovaya6-база-клиента-e.new',
  { path: 'i-i-s-kursovaya6-база-клиента-e/new' });
  this.route('i-i-s-kursovaya6-остаток-l');
  this.route('i-i-s-kursovaya6-остаток-e',
  { path: 'i-i-s-kursovaya6-остаток-e/:id' });
  this.route('i-i-s-kursovaya6-остаток-e.new',
  { path: 'i-i-s-kursovaya6-остаток-e/new' });
  this.route('i-i-s-kursovaya6-покупка-l');
  this.route('i-i-s-kursovaya6-покупка-e',
  { path: 'i-i-s-kursovaya6-покупка-e/:id' });
  this.route('i-i-s-kursovaya6-покупка-e.new',
  { path: 'i-i-s-kursovaya6-покупка-e/new' });
  this.route('i-i-s-kursovaya6-резервуар-l');
  this.route('i-i-s-kursovaya6-резервуар-e',
  { path: 'i-i-s-kursovaya6-резервуар-e/:id' });
  this.route('i-i-s-kursovaya6-резервуар-e.new',
  { path: 'i-i-s-kursovaya6-резервуар-e/new' });
  this.route('i-i-s-kursovaya6-ценновая-стела-l');
  this.route('i-i-s-kursovaya6-ценновая-стела-e',
  { path: 'i-i-s-kursovaya6-ценновая-стела-e/:id' });
  this.route('i-i-s-kursovaya6-ценновая-стела-e.new',
  { path: 'i-i-s-kursovaya6-ценновая-стела-e/new' });
});

export default Router;
