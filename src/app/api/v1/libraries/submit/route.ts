import { NextRequest, NextResponse } from 'next/server';
import { serverEnv } from '@/config/serverEnv';

const normalizeUrl = (value: string) => value.replace(/\/+$/, '');

const CORS_HEADERS: HeadersInit = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export async function POST(request: NextRequest) {
  const backendBaseUrl = normalizeUrl(serverEnv.libraryBackendUrl || '');

  if (!backendBaseUrl) {
    return NextResponse.json(
      {
        message: 'Library backend is not configured. Set LIBRARY_BACKEND_URL.',
      },
      { status: 500, headers: CORS_HEADERS }
    );
  }

  try {
    const formData = await request.formData();
    const upstreamResponse = await fetch(`${backendBaseUrl}/submit`, {
      method: 'POST',
      body: formData,
    });

    const body = await upstreamResponse.arrayBuffer();
    const contentType = upstreamResponse.headers.get('content-type') || 'application/json';

    return new Response(body, {
      status: upstreamResponse.status,
      headers: {
        'Content-Type': contentType,
        ...CORS_HEADERS,
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ message }, { status: 500, headers: CORS_HEADERS });
  }
}
