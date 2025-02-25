'use client';

import { LAppDelegate } from '@/lib/live2d/demo/lappdelegate';
import { useEffect, useRef } from 'react';

export default function Live2dView() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    return () => {
      LAppDelegate.releaseInstance();
      globalThis.window.removeEventListener('resize', resizeView);
    };
  }, []);

  useEffect(() => {
    if (ref.current) {
      initialize();
      globalThis.window.addEventListener('resize', resizeView);
    }
  }, [ref.current]);

  const initialize = async () => {
    LAppDelegate.getInstance().initialize([ref.current]);
    LAppDelegate.getInstance().run();
  };

  const resizeView = () => {
    LAppDelegate.getInstance().onResize();
  };

  return <canvas className="w-screen h-screen" ref={ref} />;
}
