'use client';

import { useEffect } from 'react';
import { getAssetPath } from '@/lib/utils';

export default function BackgroundImageHandler() {
    useEffect(() => {
        document.body.style.setProperty('--bg-image', `url('${getAssetPath('/parchment.jpg')}')`);
    }, []);

    return null;
}
