// ref: https://umijs.org/config/
export default {
  antd: {},
  dva: {},
  dynamicImport: false,
  title: 'plan-book',
  dll: false,
  routes: [
    {
      path: '/',
      component: './index'
    },
  
    {
      path: '/login',
      component: './login'
    },

    {
      path: '/c/:id',
      component: './content'
    },
    {
      path: '/test/:id',
      component: './test'
    }
  ],
  tailwindcss: {
    tailwindCssFilePath: 'tailwindcss/tailwind.css',
    tailwindConfigFilePath: 'tailwind-custom.config.js', // 默认取值 tailwindConfigFilePath || join(process.env.APP_ROOT || api.cwd, 'tailwind.config.js'),,
  },
};
