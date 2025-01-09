export default function manifest() {
    return {
        name: 'Resolution Tracker PWA',
        short_name: 'Resolute',
        description: 'A Progressive Web App built with Next.js',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#000000',
        icons: [
            {
                src: "/web-app-manifest-192x192.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "maskable"
            },
            {
                src: "/web-app-manifest-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable"
            }
        ],
    }
}

//   {
//     "name": "Resolution Tracker",
//     "short_name": "Resolute",
//     "icons": [
//       {
//         "src": "/web-app-manifest-192x192.png",
//         "sizes": "192x192",
//         "type": "image/png",
//         "purpose": "maskable"
//       },
//       {
//         "src": "/web-app-manifest-512x512.png",
//         "sizes": "512x512",
//         "type": "image/png",
//         "purpose": "maskable"
//       }
//     ],
//     "theme_color": "#000000",
//     "background_color": "#000000",
//     "display": "standalone"
//   }