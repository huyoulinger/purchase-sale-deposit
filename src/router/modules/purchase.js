import Layout from '@/layout'

const purchaseRouter = {
  path: '/purchase',
  component: Layout,
  redirect: '/purchase/purchase-documents',
  name: 'Purchase',
  meta: {
    title: '采购',
    icon: 'nested'
  },
  children: [
    /* 采购单据*/
    {
      path: 'purchase-documents',
      component: () => import('@/views/purchase/purchase-documents/index'), // Parent router-view
      name: 'PurchaseDocuments',
      meta: { title: '采购单据' },
      children: [
        {
          path: 'purchase-order',
          component: () => import('@/views/purchase/purchase-documents/purchase-order/PurchaseOrder'),
          name: 'PurchaseOrder',
          meta: { title: '采购订单' }
        },
        {
          path: 'purchase-receipt',
          component: () => import('@/views/purchase/purchase-documents/purchase-receipt/PurchaseReceipt'),
          name: 'PurchaseReceipt',
          meta: { title: '采购入库单' }
        },
        {
          path: 'purchase-return',
          component: () => import('@/views/purchase/purchase-documents/purchase-return/PurchaseReturn'),
          name: 'PurchaseReturn',
          meta: { title: '采购退货单' }
        }
      ]
    },
    /* 采购列表*/
    {
      path: 'purchase-list',
      component: () => import('@/views/purchase/purchase-list/index'), // Parent router-view
      name: 'PurchaseList',
      meta: { title: '采购列表' },
      children: [
        {
          path: 'purchase-order-list',
          component: () => import('@/views/purchase/purchase-list/purchase-order-list/PurchaseOrderList'),
          name: 'PurchaseOrderList',
          meta: { title: '采购订单列表' }
        },
        {
          path: 'purchase-receipt-list',
          component: () => import('@/views/purchase/purchase-list/purchase-receipt-list/PurchaseReceiptList'),
          name: 'PurchaseReceiptList',
          meta: { title: '采购入库单列表' }
        },
        {
          path: 'purchase-return-list',
          component: () => import('@/views/purchase/purchase-list/purchase-return-list/PurchaseReturnList'),
          name: 'PurchaseReturnList',
          meta: { title: '采购退货单列表' }
        }
      ]
    },
    /* 采购报表*/
    {
      path: 'purchase-report',
      component: () => import('@/views/purchase/purchase-report/index'), // Parent router-view
      name: 'PurchaseReport',
      meta: { title: '采购报表' },
      children: [
        {
          path: 'purchase-detail-chart',
          component: () => import('@/views/purchase/purchase-report/purchase-detai-chart/PurchaseDetailChart'),
          name: 'PurchaseDetailChart',
          meta: { title: '采购明细表' }
        },
        {
          path: 'purchase-order-tracking-chart',
          component: () => import('@/views/purchase/purchase-report/purchase-order-tracking-chart/PurchaseOrderTrackingChart'),
          name: 'PurchaseOrderTrackingChart',
          meta: { title: '采购订单跟踪表' }
        },
        {
          path: 'purchase-summary-chart',
          component: () => import('@/views/purchase/purchase-report/purchase-summary-chart/PurchaseSummaryChart'),
          name: 'PurchaseSummaryChart',
          meta: { title: '采购汇总表' }
        },
        {
          path: 'purchase-payment-chart',
          component: () => import('@/views/purchase/purchase-report/purchase-payment-chart/PurchasePaymentChart'),
          name: 'PurchasePaymentChart',
          meta: { title: '采购付款一览表' }
        }
      ]
    }
  ]
}
export default purchaseRouter
