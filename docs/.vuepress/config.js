module.exports = {
    title: '羊雪',
    description: '羊雪博客',
    base: '/record/',
    theme: 'reco',
    themeConfig: {
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: '羊雪的 JavaScript 博客',
                items: [{
                    text: 'Github',
                    link: 'https://github.com/jwors'
                }]
            }
        ],
        sidebar: [{
                title: '首页',
                path: '/',
                collapsable: false
            },
            {
                title: 'JavaScript',
                path: '/javascript/basic',
                collapsable: false,
                children: [{
                    title: "基础",
                    path: "/javascript/basic"
                }, ],
            }
        ]
    }
}