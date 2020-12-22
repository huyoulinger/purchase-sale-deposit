import Layout from '@/layout'
const formRouter = {
  path: '/form',
  component: Layout,
  children: [
    {
      path: '/form/index',
      name: 'Form',
      component: () => import('@/views/form/index'),
      meta: { title: 'Form', icon: 'form' }
    }
  ]
}
export default formRouter
