'use strict';

const fs = require('fs');
const path = require('path');

module.exports = async ({ strapi }) => {
  // Check if we need to run initial setup
  const shouldSetup = await strapi.query('plugin::users-permissions.user').count() === 0;

  if (shouldSetup) {
    strapi.log.info('Initialisation des données...');

    try {
      // Create admin user
      await strapi.admin.services.user.create({
        firstname: 'Admin',
        lastname: 'User',
        email: 'admin@analytechs.tech',
        password: 'ChangeMe123!',
        isActive: true,
        roles: [1], // Super admin role
      });

      strapi.log.info('✅ Utilisateur admin créé');

      // Create default roles if they don't exist
      const pluginStore = strapi.store({
        environment: '',
        type: 'plugin',
        name: 'users-permissions',
      });

      const roles = await pluginStore.get({ key: 'roles' });
      
      // Add custom permissions to authenticated role
      const authenticatedRole = roles.authenticated;
      authenticatedRole.permissions = {
        ...authenticatedRole.permissions,
        'api::article.article': {
          controllers: {
            'article': ['find', 'findOne', 'create', 'update']
          }
        },
        'api::project.project': {
          controllers: {
            'project': ['find', 'findOne']
          }
        },
        'api::service.service': {
          controllers: {
            'service': ['find', 'findOne']
          }
        }
      };

      await pluginStore.set({ key: 'roles', value: roles });
      strapi.log.info('✅ Rôles et permissions configurés');

      // Create initial content types
      const initialData = {
        articles: [
          {
            title: "Introduction à la Business Intelligence",
            slug: "introduction-bi",
            content: "# Introduction à la Business Intelligence\n\nLa Business Intelligence (BI) est devenue un élément crucial...",
            excerpt: "Découvrez les fondamentaux de la BI",
            author: "Admin",
            published: true,
            publishedAt: new Date()
          }
        ],
        projects: [
          {
            company: "Exemple SA",
            project: "Mise en place d'un Data Warehouse",
            role: "Lead Data Engineer",
            achievements: ["Conception", "Développement", "Formation"],
            order: 1
          }
        ],
        services: [
          {
            title: "Business Intelligence",
            description: "Transformez vos données en insights actionnables",
            icon: "BarChart2",
            features: ["Tableaux de bord", "KPIs", "Reporting"],
            order: 1
          }
        ]
      };

      // Insert initial data with progress logging
      for (const [contentType, items] of Object.entries(initialData)) {
        strapi.log.info(`📥 Insertion des ${contentType}...`);
        for (const item of items) {
          await strapi.entityService.create(`api::${contentType}.${contentType}`, {
            data: item
          });
        }
        strapi.log.info(`✅ ${items.length} ${contentType} créés`);
      }

      strapi.log.info('✅ Initialisation terminée avec succès');
    } catch (error) {
      strapi.log.error('❌ Erreur lors de l\'initialisation:', error);
      throw error;
    }
  }
};