/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://wmtx.worldmobile.club',
  generateRobotsTxt: true,
  outDir: 'out',
}
