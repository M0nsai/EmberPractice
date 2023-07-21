import Model, { attr } from '@ember-data/model';

export default class Course extends Model {
  @attr('string')
    code;

  @attr('string')
    name;
}
