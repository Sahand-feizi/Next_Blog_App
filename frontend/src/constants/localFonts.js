import localFont from 'next/font/local'

const kalamehFont = localFont({
    src: [
        {
            path:'../../public/fonts/kalameh/Kalameh-Black.woff2',
            style:'normal',
            weight: '900'
        },
        {
            path:'../../public/fonts/kalameh/Kalameh-Bold.woff2',
            style:'normal',
            weight: '800'
        },
        {
            path:'../../public/fonts/kalameh/Kalameh-Medium.woff',
            style:'normal',
            weight: '500'
        },
        {
            path:'../../public/fonts/kalameh/Kalameh-Regular.woff2',
            style:'normal',
            weight: '400'
        },
        {
            path:'../../public/fonts/kalameh/Kalameh-Thin.woff2',
            style:'normal',
            weight: '100'
        },
    ],
    display:'block',
    style:'normal',
    variable: '--font-kalameh',
})

export default kalamehFont