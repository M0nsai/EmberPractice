import Controller from '@ember/controller';

export default class CoursesController extends Controller {
  get allCourses() {
    return this.model;
  }
}
