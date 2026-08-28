import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/PAWS-Technical-Documentation/',
  title: 'PAWS Technical Documentation',
  description: 'Predictive Alert & Wildlife Sentinel',
  lang: 'en',
  cleanUrls: true,

  themeConfig: {
    logo: '/paws-logo.png',
    siteTitle: 'PAWS Technical Doc',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Overview', link: '/overview/' },
      
      { text: 'API Reference', link: '/backend/api' }
    ],

    sidebar: [
      { text: 'Home', items: [
        { text: 'PAWS', link: '/' },
        { text: 'Overview', link: '/overview/' }
      ]},
      { text: 'Architecture', items: [
        { text: 'System Architecture', link: '/architecture/' },
        { text: 'Field Station', link: '/architecture/field-station' },
        { text: 'HQ Infrastructure', link: '/architecture/hq' },
        { text: 'Data Flow', link: '/architecture/data-flow' },
        { text: 'Brand & Design System', link: '/architecture/brand' }
      ]},
    
      { text: 'Engineering', items: [
        { text: 'Backend', link: '/backend/' },
        { text: 'API Reference', link: '/backend/api' },
        { text: 'Authentication', link: '/backend/authentication' },
        { text: 'Errors & Logging', link: '/backend/errors' },
        { text: 'Database', link: '/database/' },
        { text: 'ERD', link: '/database/erd' },
        { text: 'Data Dictionary', link: '/database/data-dictionary' },
        { text: 'AI', link: '/ai/' },
        { text: 'AI Models', link: '/ai/models' },
        
       
        { text: 'Frontend Web', link: '/frontend/' },
        
        
        
        { text: 'Mobile', link: '/mobile/' }
      ]},
      { text: 'Operations', items: [
       
        { text: 'Security', link: '/security/' },
        
        { text: 'Deployment', link: '/deployment/' }
      ]},
      { text: 'Team Standards', items: [
        { text: 'Code Standards', link: '/standards/' },
        { text: 'Naming Conventions', link: '/standards/naming' },
        { text: 'Git & Commits', link: '/standards/git' },
        { text: 'Pull Requests', link: '/standards/pull-requests' },
        { text: 'Glossary', link: '/glossary' }
      ]}
    ],

    search: { provider: 'local' },
    outline: { level: [2, 3], label: 'On this page' },
    docFooter: { prev: 'Previous', next: 'Next' },
    footer: {
      message: 'PAWS — Predictive Alert & Wildlife Sentinel',
      copyright: 'Technical Documentation'
    }
  }
})
