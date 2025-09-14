'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import Image from 'next/image';

interface CatchAllPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

function CatchAllContent({ params }: CatchAllPageProps) {
  const [resolvedParams, setResolvedParams] = useState<{ slug: string[] } | null>(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    const resolveParams = async () => {
      const resolved = await params;
      setResolvedParams(resolved);
    };
    resolveParams();
  }, [params]);

  useEffect(() => {
    if (!resolvedParams) return;
    
    // Get the current path and parameters
    const currentPath = pathname;
    const queryParams = new URLSearchParams(searchParams.toString());
    
    // Construct the deep link URL from the slug segments
    const targetPath = resolvedParams.slug.join('/');
    let deepLinkUrl = 'cutcoach://' + targetPath;
    
    // Add query parameters
    if (queryParams.toString()) {
      deepLinkUrl += '?' + queryParams.toString();
    }
    
    // Add hash if present
    if (typeof window !== 'undefined' && window.location.hash) {
      deepLinkUrl += window.location.hash;
    }
    
    console.log('Attempting to open:', deepLinkUrl);
    
    // Try to open the app
    if (typeof window !== 'undefined') {
      window.location.href = deepLinkUrl;
    }
  }, [pathname, searchParams, resolvedParams]);

  const handleManualRedirect = () => {
    if (!resolvedParams) return;
    
    const queryParams = new URLSearchParams(searchParams.toString());
    const targetPath = resolvedParams.slug.join('/');
    
    let deepLinkUrl = 'cutcoach://' + targetPath;
    if (queryParams.toString()) {
      deepLinkUrl += '?' + queryParams.toString();
    }
    if (typeof window !== 'undefined' && window.location.hash) {
      deepLinkUrl += window.location.hash;
    }
    window.location.href = deepLinkUrl;
  };

  if (!resolvedParams) {
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
              Loading...
            </h2>
            <p className="text-gray-300 text-sm">
              Preparing redirect
            </p>
          </div>
        </div>
      </div>
    );
  }

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
            Redirecting to your app...
          </h2>
          <p className="text-gray-300 text-sm">
            Opening CutCoach mobile app
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

export default function CatchAllPage({ params }: CatchAllPageProps) {
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
      <CatchAllContent params={params} />
    </Suspense>
  );
}
