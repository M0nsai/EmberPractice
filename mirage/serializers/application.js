import { JSONAPISerializer } from 'ember-cli-mirage';
import { pluralize } from 'ember-inflector';

export default JSONAPISerializer.extend({
  keyForAttribute(attr) {
    return attr; // don't dasherize
  },

  // Ensure that Mirage mirrors the behavior of Crnk
  shouldIncludeLinkageData(relationshipKey, model) {
    if (model.hasManyAssociations[relationshipKey]) {
      // eagerly include hasMany-related records for activity and review models
      return [ ].includes(model.modelName);
    }
    return true; // include all belongsTo
  },

  links(model) {
    // Return links for each relationship to mirror the behavior of Crnk
    return Object.fromEntries(
      Object.keys(model.associations).map((key) => [
        key,
        {
          related: `/api/mirage/${pluralize(model.modelName)}/${
            model.id
          }/${key}`,
        },
      ])
    );
  },
});
