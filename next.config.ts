import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '/test_build_next', // ยังคงใช้ basePath ถ้าจำเป็น
  assetPrefix: '/test_build_next', // ยังคงใช้ assetPrefix ถ้าจำเป็น
  output: 'export', // เพิ่มการตั้งค่านี้เพื่อสร้าง Static Export
};

export default nextConfig;