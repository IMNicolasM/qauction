const moduleName = 'iauctions';
const moduleVersion = 'v1';
const urlBase = `/${moduleName}/${moduleVersion}`


export default {
  urlBase : urlBase,
  version: moduleVersion,
  auctions: `${urlBase}/auctions`,
  categories: `${urlBase}/categories`,
  bids: `${urlBase}/bids`,
  statusBid: `${urlBase}/status-bid`,
}
