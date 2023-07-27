import Model, { attr, belongsTo } from '@ember-data/model';

export default class StudentModel extends Model {

  @belongsTo('course') course;

  @attr ('string') name;
  @attr ('string') lastName;

}
