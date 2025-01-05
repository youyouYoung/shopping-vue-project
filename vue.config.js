module.exports = {
  pages: {
    client: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    },
    admin: {
      entry: 'src/main.js',
      template: 'public/admin/index.html',
      filename: 'admin/index.html'
    }
  }
}
