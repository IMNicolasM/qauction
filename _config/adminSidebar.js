import pages from 'src/config/pages' // Get Pages from config

//Blog
export default [
  {
    title: 'iauctions.cms.sidebar.adminGroup',
    icon: 'fa-light fa-gavel',
    children: [
      pages.mainqauction.auctions,
      pages.mainqauction.bids,
      pages.mainqauction.categories,
    ]
  },
]
