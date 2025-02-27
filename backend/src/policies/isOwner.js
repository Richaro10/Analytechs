'use strict';

/**
 * `isOwner` policy
 */

module.exports = async (policyContext, config, { strapi }) => {
  const user = policyContext.state.user;
  
  if (!user) {
    return false;
  }

  const { id } = policyContext.params;
  const entity = await strapi.entityService.findOne(
    policyContext.request.route.controller,
    id,
    { populate: ['owner'] }
  );

  if (!entity) {
    return false;
  }

  return entity.owner?.id === user.id;
};