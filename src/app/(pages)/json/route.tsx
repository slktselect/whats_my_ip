import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const ip = '127.0.0.1';
    return NextResponse.json({ ip });
}
