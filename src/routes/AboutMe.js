export default {
  path: '/aboutMe',
  component: () => import('@/views/AboutMe'),
  meta: {
    displayName: 'Apie Mane',
    defaultName: 'AboutMe:Profile'
  },
  children: [
    {
      path: '',
      name: 'AboutMe:Profile',
      component: () => import('@/views/AboutMe/Profile')
    },
    {
      path: 'settings',
      name: 'AboutMe:Settings',
      component: () => import('@/views/AboutMe/Settings')
    },
    {
      path: 'options',
      name: 'AboutMe:Options',
      component: () => import('@/views/AboutMe/Options')
    }
  ]
}
