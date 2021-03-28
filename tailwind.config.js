module.exports = {
  purge: {
    // enabled: !process.env.ROLLUP_WATCH,
    content: [
      './public/index.html',
      './src/**/*.svelte',
      './src/**/*.js',
      './src/**/*.ts'
    ],
    options: {
      defaultExtractor: (content) => [
        ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
        ...(content.match(/(?<=class:)[^=>\/\s]*/g) || [])
      ]
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
