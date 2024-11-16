import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const forwarded = request.headers.get('x-forwarded-for');
    let ip = forwarded ? forwarded.split(',')[0] : request.headers.get('host');
    // 如果是 IPv6 的本地地址 `::1`，转换为标准 IPv4 地址 `127.0.0.1`
    if (ip === '::1') {
        ip = '127.0.0.1';
    }
    return NextResponse.json({ ip });
}
