import { Factory } from 'miragejs';


export default Factory.extend({
  name(i) {
    return `Paco ${i}`;
  },

  lastName(i) {
    return `Perez ${i}`;
  },
});
