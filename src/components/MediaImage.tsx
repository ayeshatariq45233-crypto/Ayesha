import { useState } from 'react';
import { Layers } from 'lucide-react';

interface MediaImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  aspectClassName?: string;
}

export function MediaImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  aspectClassName = '',
}: MediaImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#300B10] via-[#180909] to-[#100707] p-6 text-center ${aspectClassName} ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="pointer-events-none absolute inset-0 bg-luxury-grid opacity-45" />
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#C62840]/40 bg-[#4A1018]/60 text-[#F5EDED]">
            <Layers className="h-5 w-5" />
          </div>
          <p className="max-w-xs text-sm font-medium text-[#F5EDED]">
            {fallbackTitle || alt}
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
