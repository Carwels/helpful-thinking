/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    prependData: `
    @import "src/assets/scss/abstracts/_variables.scss";
    @import "src/assets/scss/abstracts/_mixins.scss";`,
  },
}

module.exports = nextConfig
