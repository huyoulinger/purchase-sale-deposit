import Layout from '@/layout'

const purchaseRouter = {
  path: '/purchase',
  component: Layout,
  redirect: '/purchase/documents/order',
  name: 'Purchase',
  meta: {
    title: '采购',
    icon: 'nested'
  },
  children: [
    /* 采购单据*/
    {
      path: 'documents',
      component: () => import('@/views/purchase/purchase-documents/index'), // Parent router-view
      redirect: '/purchase/documents/order',
      name: 'PurchaseDocuments',
      meta: { title: '采购单据' },
      children: [
        {
          path: 'order',
          component: () => import('@/views/purchase/purchase-documents/purchase-order'),
          name: 'PurchaseOrder',
          meta: { title: '采购订单' }
        },
        {
          path: 'receipt',
          component: () => import('@/views/purchase/purchase-documents/purchase-receipt'),
          name: 'PurchaseReceipt',
          meta: { title: '采购入库单' }
        },
        {
          path: 'return',
          component: () => import('@/views/purchase/purchase-documents/purchase-return'),
          name: 'PurchaseReturn',
          meta: { title: '采购退货单' }
        }
      ]
    },
    /* 采购列表*/
    {
      path: 'list',
      component: () => import('@/views/purchase/purchase-list/index'), // Parent router-view
      redirect: '/purchase/list/order',
      name: 'PurchaseList',
      meta: { title: '采购列表' },
      children: [
        {
          path: 'order',
          component: () => import('@/views/purchase/purchase-list/purchase-order-list'),
          name: 'PurchaseOrderList',
          meta: { title: '采购订单列表' }
        },
        {
          path: 'receipt',
          component: () => import('@/views/purchase/purchase-list/purchase-receipt-list'),
          name: 'PurchaseReceiptList',
          meta: { title: '采购入库单列表' }
        },
        {
          path: 'return',
          component: () => import('@/views/purchase/purchase-list/purchase-return-list'),
          name: 'PurchaseReturnList',
          meta: { title: '采购退货单列表' }
        }
      ]
    },
    /* 采购报表*/
    {
      path: 'report',
      component: () => import('@/views/purchase/purchase-report/index'), // Parent router-view
      redirect: '/purchase/report/detail',
      name: 'PurchaseReport',
      meta: { title: '采购报表' },
      children: [
        {
          path: 'detail',
          component: () => import('@/views/purchase/purchase-report/purchase-detail-chart'),
          name: 'PurchaseDetailChart',
          meta: { title: '采购明细表' }
        },
        {
          path: 'tracking',
          component: () => import('@/views/purchase/purchase-report/purchase-order-tracking-chart'),
          name: 'PurchaseOrderTrackingChart',
          meta: { title: '采购订单跟踪表' }
        },
        {
          path: 'summary',
          component: () => import('@/views/purchase/purchase-report/purchase-summary-chart'),
          name: 'PurchaseSummaryChart',
          meta: { title: '采购汇总表' }
        },
        {
          path: 'payment',
          component: () => import('@/views/purchase/purchase-report/purchase-payment-chart'),
          name: 'PurchasePaymentChart',
          meta: { title: '采购付款一览表' }
        }
      ]
    }
  ]
}
export default purchaseRouter
