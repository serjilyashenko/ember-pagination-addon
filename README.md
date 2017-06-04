# ember-pagination-addon

This README outlines the details of collaborating on this Ember addon.

## Installation

Install this add-on through Ember CLI.

* From the command line run:<br />
`ember install git+https://github.com/serjilyashenko/ember-pagination-addon.git`
* Once installed, run the library's blueprint to pull in its Bower dependencies. This only needs to be done once.<br />
`ember generate ember-pagination-addon`
* Install bower dependencies: `bower install`

## Integration

* Add component to a template:
```hbs
{{articles/index-page
   model=model
   setPage=(action 'setPage')
 }}
```

* And you must throw 'setPage' action through all components between controller and component with pagination.

* Extend target route and controller using `PaginationRouteMixin` and `PginationRouteMixin` respectively.
```js
import Ember from 'ember';
import PaginationRouteMixin from 'ember-pagination-addon/mixins/pagination-router-mixin';

export default Ember.Route.extend(PaginationRouteMixin, {
});
```
```js
import Ember from 'ember';
import PaginationControllerMixin from 'ember-pagination-addon/mixins/pagination-controller-mixin';

export default Ember.Controller.extend(PaginationControllerMixin, {
});
```
* By default it is applied 30 pages limit. For customization of this use property limit:
```js
import Ember from 'ember';
import PaginationControllerMixin from 'ember-pagination-addon/mixins/pagination-controller-mixin';

export default Ember.Controller.extend(PaginationControllerMixin, {
  limit: 30,
});
```
