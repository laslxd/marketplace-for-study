/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        SERVER_URL: process.env.SERVER_URL,
        APP_URL: process.env. APP_URL
    },
    images: {domains: ['loremflickr.com', 'www.aptronixindia.com', 'encrypted-tbn0.gstatic.com', 'cloudflare-ipfs.com', 'ir.ozone.ru', 'cdn.ast.ru', 'atlet-torg.ru', 'orenburg.stolplit.ru', 'ir-2.ozone.ru', 'cdn.sportmaster.ru']}
};

export default nextConfig;
