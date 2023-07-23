import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
  keyForAttribute(attr) {
    return attr; // blog_post_comment becomes blog-post-comment
  }
}
