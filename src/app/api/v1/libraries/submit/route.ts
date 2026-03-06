import { NextRequest, NextResponse } from 'next/server';
import { publicEnv } from '@/config/publicEnv';
import { serverEnv } from '@/config/serverEnv';

const normalizeUrl = (value: string) => value.replace(/\/+$/, '');

const resolveLibraryBackendUrl = () => {
  const serverValue = normalizeUrl(serverEnv.libraryBackendUrl || '');
  if (serverValue) {
    return serverValue;
  }

  const publicValue = normalizeUrl(publicEnv.libraryBackendUrl || '');
  return publicValue;
};

export async function POST(request: NextRequest) {
  const backendBaseUrl = resolveLibraryBackendUrl();

  if (!backendBaseUrl) {
    return NextResponse.json(
      {
        message:
          'Library backend is not configured. Set LIBRARY_BACKEND_URL or NEXT_PUBLIC_LIBRARY_BACKEND_URL.',
      },
      { status: 500 }
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
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ message }, { status: 500 });
  }
}
