import { NextResponse } from 'next/server';

export const dynamic = "force-dynamic"; // Enforce dynamic behavior for this route

export async function POST(request) {
  try {
    const { title, content } = await request.json();

    if (!title || !content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
    }

    const response = await fetch('https://worldmobile.club/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': process.env.DISCOURSE_API_KEY,
        'Api-Username': process.env.DISCOURSE_API_USERNAME,
      },
      body: JSON.stringify({
        title,
        raw: content,
        category: 68,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return NextResponse.json({ message: 'Post created successfully!', data }, { status: 200 });
    } else {
      const errorData = await response.json();
      return NextResponse.json({ error: errorData.message }, { status: response.status });
    }
  } catch (error) {
    console.error('An error occurred:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: 'GET method not allowed' }, { status: 405 });
}
