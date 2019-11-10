

const Home = () => import('../views/home/index.vue')
const User = () => import('../views/user/index.vue')
const Login = () => import('../views/home/login.vue')

const Zuzu = () => import('../views/layout/index.vue')
const Office = () => import('../views/office/index.vue')
const OfficeDetail = () => import('../views/office-detail/index.vue')
const Loupan = () => import('../views/loupan/index.vue')
const LoupanDetail = () => import('../views/loupan-detail/index.vue')
const Share = () => import('../views/share/index.vue')
const ShareDetail = () => import('../views/share-detail/index.vue')
const Weituo = () => import('../views/weituo/index.vue')
const Toufang = () => import('../views/toufang/index.vue')
const BMap = () =>import('../views/map/index.vue')

const routes = [
  {
    component: Home,
    path: '/',
    redirect: ''
  },
  {
    component: User,
    path: '/user'
  },
  {
    component: Zuzu,
    path: '/zuzu',
    children: [
      {
        component: Office,
        path: 'office',
        name: '出租'
      },
      {
        component: Loupan,
        path: 'loupan',
        name: '找楼盘'
      },
      {
        component: Share,
        path: 'share',
        name: '共享办公',
      },
      {
        component: OfficeDetail,
        path: 'office-detail',
        name: '出租详情'
      },
      {
        component: LoupanDetail,
        path: 'loupan-detail',
        name: '楼盘详情'
      },
      {
        component: ShareDetail,
        path: 'share-detail',
        name: '共享详情'
      },
      {
        component: Weituo,
        path: 'weituo',
        name: '委托找房'
      },
      {
        component: Toufang,
        path: 'toufang',
        name: '投放房源'
      },
      {
        component: BMap,
        path: 'map',
        name: '地图找房'
      },
    ]
  },
  {
    component: Login,
    path: '/login'
  },
]

export default routes