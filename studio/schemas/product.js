export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    // ... other fields ...
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'name',
      title: 'Name',
      type: 'localeString'
    },
    {
      name: 'slug',
      title: 'Slug',
      slug: 'localeString',
      type: 'localeString',
    }
  ]
}