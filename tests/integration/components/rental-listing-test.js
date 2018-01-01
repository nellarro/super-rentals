import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';
import { run } from '@ember/runloop';

let rental = EmberObject.create({
  image: 'merp.jpg',
  title: 'Place',
  owner: 'Human',
  category: 'apartment',
  city: 'Winter Park',
  bedrooms: 3
});

let mock = this.set('rentalObj', rental);
let renderMock = this.render(hbs`{{rental-listing rental=rentalObj}}`);

moduleForComponent('rental-listing', 'Integration | Component | rental listing', {
  integration: true
});

test('should display rental details', function(assert) {
  mock;
  renderMock;
  assert.equal(this.$('.listing h3').text(), 'Place', 'Title: Place');
  assert.equal(this.$('.listing .owner').text().trim(), 'Owner: Human', 'Owner: Human');
});

test('should toggle wide class on click', function(assert) {
  mock;
  renderMock;
  assert.equal(this.$('.image.wide').length, 0, 'initially rendered small');
  run(() => document.querySelector('.image').click());
  assert.equal(this.$('.image.wide').length, 1, 'rendered wide after click');
  run(() => document.querySelector('.image').click());
  assert.equal(this.$('.image.wide').length, 0, 'rendered small after second click');
});
