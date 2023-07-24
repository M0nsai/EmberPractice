import Controller from '@ember/controller';

export default class StudentsController extends Controller {

  get allStudents() {
    return this.model;
  }

}
