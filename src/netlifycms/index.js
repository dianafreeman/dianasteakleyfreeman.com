import CMS from 'netlify-cms-app';

CMS.init({
  config: {
    backend: {
      name: 'git-gateway',
      branch: 'main',
      repo: 'dianafreeman/dianasteakleyfreeman.com',
    },
    // proxy_url: 'http://localhost:8081/api/v1',
    site_url: 'https://dianasteakleyfreeman.com',
    local_backend: true,
    load_config_file: false,
    media_folder: 'static/uploads/images',
    public_folder: '/uploads/images',
    collections: [
      {
        label: 'Blog Posts',
        name: 'blog',
        folder: 'content/blog',
        create: true,
        fields: [
          { label: 'Title', name: 'title', widget: 'string' },
          { label: 'Publish Date', name: 'date', widget: 'datetime' },
          { label: 'Featured Image', name: 'thumbnail', widget: 'image' },
          { label: 'Body', name: 'body', widget: 'markdown' },
        ],
      },
    ],
  },
});
/*


backend:
  name: git-gateway # Refer to https://www.netlifycms.org/docs/authentication-backends/ for auth backend list and instructions
  branch: main # Branch to update
  repo: dianafreeman/dianasteakleyfreeman.com

media_folder: static/assets
public_folder: assets

collections:
  - name: blog
    label: "Posts"
    folder: "content/blog"
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}.md"
    fields:
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Publish Date", name: "date", widget: "datetime" }
      - { label: "Cover Image", name: "cover", widget: "image" }
      - { label: "Slug", name: "slug", widget: "string" }
      - { label: "Category", name: "category", widget: "string" }
      - { label: "Tags", name: "tags", widget: "list" }
      - { label: "Body", name: "body", widget: "markdown" }



*/
