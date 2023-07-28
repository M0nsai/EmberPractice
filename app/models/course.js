import Model, { attr, hasMany } from '@ember-data/model';

export default class Course extends Model {

 @hasMany ('student') students;

  @attr('string')
    code;

  @attr('string')
    name;
}
