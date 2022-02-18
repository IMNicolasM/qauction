export default {
  auctions: {
    permission: 'iauctions.auctions.manage',
    activated: true,
    authenticated: true,
    path: '/auctions/auctions/index',
    name: 'qauctions.admin.auctions',
    crud: import('@imagina/qauction/_crud/auctions'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'iauctions.cms.sidebar.adminAuctions',
    icon: 'fas fa-gavel',
    subHeader: {
      refresh: true,
    }
  },
  bids: {
    permission: 'iauctions.bids.manage',
    activated: true,
    authenticated: true,
    path: '/auctions/bids/index',
    name: 'qauctions.admin.bids',
    crud: import('@imagina/qauction/_crud/bids'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'iauctions.cms.sidebar.adminBids',
    icon: 'far fa-hand-point-up',
    subHeader: {
      refresh: true,
    }
  },
  categories: {
    permission: 'iauctions.categories.manage',
    activated: true,
    authenticated: true,
    path: '/auctions/categories/index',
    name: 'qauctions.admin.categories',
    crud: import('@imagina/qauction/_crud/categories'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'iauctions.cms.sidebar.adminCategories',
    icon: 'fas fa-layer-group',
    subHeader: {
      refresh: true,
    }
  },

}
