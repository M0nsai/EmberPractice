import { Factory } from 'miragejs';

export default Factory.extend({
  code(i) {
    return `IF-000${i}`;
  },

  name(i) {
    return `Course #${i}`;
  },
});
