export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);



  let courses = server.createList('course', 10);
  let students = server.createList('student', 10);

  students.forEach((student) => {
    student.update({
      course:  courses[Math.floor(Math.random() * students.length)]
    });
  });

}
