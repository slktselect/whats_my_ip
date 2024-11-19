import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const forwarded = request.headers.get('x-forwarded-for');
    let ip = forwarded ? forwarded.split(',')[0].trim() : request.headers.get('host');

    // 如果是 IPv6 映射的 IPv4 地址，提取标准 IPv4 地址
    if (ip && ip.startsWith('::ffff:')) {
        ip = ip.substring(7); // 移除 `::ffff:`
    }

    // 如果是本地 IPv6 地址 `::1`，转换为标准 IPv4 地址 `127.0.0.1`
    if (ip === '::1') {
        ip = '127.0.0.1';
    }

    return NextResponse.json({ ip });
}
