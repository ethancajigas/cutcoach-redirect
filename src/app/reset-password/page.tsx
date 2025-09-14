'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

function ResetPasswordContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get query parameters
    const queryParams = new URLSearchParams(searchParams.toString());
    
    // Construct the deep link URL
    let deepLinkUrl = 'cutcoach://reset-password';
    
    // Add query parameters
    if (queryParams.toString()) {
      deepLinkUrl += '?' + queryParams.toString();
    }
    
    // Add hash if present
    if (typeof window !== 'undefined' && window.location.hash) {
      deepLinkUrl += window.location.hash;
    }
    
    console.log('Attempting to open password reset:', deepLinkUrl);
    
    // Try to open the app
    if (typeof window !== 'undefined') {
      window.location.href = deepLinkUrl;
    }
  }, [searchParams]);

  const handleManualRedirect = () => {
    const queryParams = new URLSearchParams(searchParams.toString());
    let deepLinkUrl = 'cutcoach://reset-password';
    if (queryParams.toString()) {
      deepLinkUrl += '?' + queryParams.toString();
    }
    if (typeof window !== 'undefined' && window.location.hash) {
      deepLinkUrl += window.location.hash;
    }
    window.location.href = deepLinkUrl;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <Image
            src="/cutcoach_logo_white_transparent.png"
            alt="CutCoach"
            width={120}
            height={40}
            className="mx-auto"
          />
        </div>
        
        <div className="mb-6">
          <div className="w-10 h-10 border-3 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-white mb-2">
            Opening password reset...
          </h2>
          <p className="text-gray-300 text-sm">
            Redirecting to your CutCoach app
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <p className="text-white text-sm">
            If you're not redirected automatically,{' '}
            <button
              onClick={handleManualRedirect}
              className="text-white underline hover:text-gray-300 transition-colors"
            >
              click here to open the app
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <Image
              src="/cutcoach_logo_white_transparent.png"
              alt="CutCoach"
              width={120}
              height={40}
              className="mx-auto"
            />
          </div>
          
          <div className="mb-6">
            <div className="w-10 h-10 border-3 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Loading...
            </h2>
            <p className="text-gray-300 text-sm">
              Preparing redirect
            </p>
          </div>
        </div>
      </div>
    }>
      <ResetPasswordContent />
    </Suspense>
  );
}
