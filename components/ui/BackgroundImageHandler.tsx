'use client';

import { useEffect } from 'react';

export default function BackgroundImageHandler() {
    useEffect(() => {
        // Check if we are running in production on GitHub Pages (detected by the path)
        const isProduction = window.location.pathname.startsWith('/the-chronicles');

        if (isProduction) {
            document.body.style.setProperty('--bg-image', "url('/the-chronicles/parchment.jpg')");
        } else {
            // Local development or root domain
            document.body.style.setProperty('--bg-image', "url('/parchment.jpg')");
        }
    }, []);

    return null;
}
