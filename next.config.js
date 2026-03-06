/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  images: { domains: [], unoptimized: true },
  async redirects() {
    return [
      { source: '/wiki/:path*', destination: '/:path*', permanent: true },
      ...['domener', 'dns', 'epost', 'nettsider'].flatMap((slug) => [
        { source: `/teknologi/internett/${slug}`, destination: `/${slug}`, permanent: true },
        { source: `/teknologi/internett/${slug}/:path*`, destination: `/${slug}/:path*`, permanent: true },
      ]),
      { source: '/teknologi/internett', destination: '/teknologi', permanent: false },
    ];
  },
  async rewrites() {
    return [
      { source: '/entity-index.json', destination: '/api/entity-index' },
      { source: '/rss.xml', destination: '/api/rss' },
    ];
  },
  async headers() {
    return [
      { source: '/admin/:path*', headers: [{ key: 'X-Frame-Options', value: 'SAMEORIGIN' }] },
      {
        source: '/api/entity-index',
        headers: [
          { key: 'Content-Type', value: 'application/json; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
      {
        source: '/api/rss',
        headers: [
          { key: 'Content-Type', value: 'application/rss+xml; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400' },
        ],
      },
    ];
  },
};
module.exports = nextConfig;
