/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [new URL('https://next-blog-app-vert-three.vercel.app/uploads/**')]
    }
};

export default nextConfig;
