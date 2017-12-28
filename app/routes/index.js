import Route from '@ember/routing/route';

export default Route.extend({
    // creates a default route
    beforeModel() {
     this.replaceWith('rentals');
    }
});