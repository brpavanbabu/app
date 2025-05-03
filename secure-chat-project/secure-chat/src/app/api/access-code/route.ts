import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { getAccessCode, setAccessCode } from '@/app/api/auth/[...nextauth]/route';

// Add error handling and logging for production
export async function GET(req: NextRequest) {
  try {
    // Get the session to verify the user
    const session = await getServerSession();
    
    if (!session || !session.user) {
      console.log('Unauthorized access attempt to access code API');
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }
    
    // Get the access code
    const result = getAccessCode(session.user.id);
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error getting access code:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Server error processing request',
      error: process.env.NODE_ENV === 'development' ? String(error) : undefined
    }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    // Get the session to verify the user
    const session = await getServerSession();
    
    if (!session || !session.user) {
      console.log('Unauthorized access attempt to modify access code');
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }
    
    // Parse the request body
    const body = await req.json();
    const { code } = body;
    
    if (!code) {
      return NextResponse.json({ success: false, message: 'Access code is required' }, { status: 400 });
    }
    
    // Set the access code
    const result = setAccessCode(code, session.user.id);
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error setting access code:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Server error processing request',
      error: process.env.NODE_ENV === 'development' ? String(error) : undefined
    }, { status: 500 });
  }
}
