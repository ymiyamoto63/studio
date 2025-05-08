"use client";

import { useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";

export function ServiceWorkerRegistrar() {
  const { toast } = useToast();

  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') { // Register SW only in production
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
            // Optional: Notify user about PWA readiness.
            // toast({
            //   title: "App Ready",
            //   description: "This app can be added to your home screen and used offline.",
            // });
          })
          .catch(err => {
            console.error('ServiceWorker registration failed: ', err);
            toast({
              title: "Offline Mode Setup Failed",
              description: "Could not set up offline capabilities for the app. You might be in a development environment.",
              variant: "destructive",
            });
          });
      });
    }
  }, [toast]);

  return null; // This component does not render anything visible
}
