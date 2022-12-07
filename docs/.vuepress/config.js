module.exports = {
    title: '羊雪',
    description: '羊雪博客',
    base: '/record/',
    theme: 'reco',
    themeConfig: {
        nav: [{
                text: '首页',
                link: '/html/basic'
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
                title: 'Html',
                path: '/html/basic',
                collapsable: false,
                children: [{
                    title: "基础",
                    path: "/html/basic"
                }, ],
            },
            {
                title: 'Css',
                path: '/css/basic',
                collapsable: false,
                children: [{
                    title: "基础",
                    path: "/css/basic"
                }, ],
            },
            {
                title: 'JavaScript',
                path: '/javascript/basic',
                collapsable: false,
                children: [{
                    title: "基础",
                    path: "/javascript/basic"
                }, {
                    title: "基础算法",
                    path: "/javascript/basicAirthmetic"
                }, {
                    title: "作用域",
                    path: "/javascript/scope"
                }, ],
            },
            {
                title: 'Vue',
                path: '/vue/vue2SoundCode',
                collapsable: false,
                children: [{
                    title: "Vue2源码",
                    path: "/vue/vue2SoundCode"
                }, {
                    title: "Vue3使用",
                    path: "/vue/useVue3"
                }, ],
            },
            {
                title: 'React',
                path: '/react/skills',
                collapsable: false,
                children: [{
                    title: "基础",
                    path: "/react/skills"
                }, ],
            },
            {
                title: '网络',
                path: '/net/skills',
                collapsable: false,
                children: [{
                    title: "http",
                    path: "/net/http"
                }, ],
            },
            {
                title: '浏览器',
                path: '/browser/browser',
                collapsable: false,
                children: [{
                    title: "浏览器原理",
                    path: "/browser/browser"
                }, {
                    title: "缓存",
                    path: "/browser/cache"
                }, {
                    title: "从url到页面",
                    path: "/browser/url"
                }, {
                    title: "v8",
                    path: "/browser/v8"
                }, ],
            },
            {
                title: '开发问题',
                path: '/solve/all',
                collapsable: false,
                children: [{
                    title: "解决",
                    path: "/solve/all"
                }, ],
            }
        ]
    }
}