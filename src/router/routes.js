const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
     { path: '/signup', component: () => import('pages/signup.vue') },
     { path: '/login', component: () => import('pages/login.vue') },
     { path: '/user', component: () => import('pages/user.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
