import { getOrderById } from '../feathers/orders'
import { getTransactionById } from '../feathers/transactions'

const parseItems = (items, taxRate) => {
  const uniques = items.reduce(
    (acc, item) => ({
      ...acc,
      [item.productId]: {
        title: item.title,
        description: '',
        quantity:
          ((acc[item.productId] && acc[item.productId].quantity) || 0) + 1,
        price: item.price
      }
    }),
    {}
  )

  return Object.values(uniques).map(item => itemTemplate(item, taxRate))
}

const getSubTotal = items =>
  +items.reduce((acc, item) => acc + item.price, 0).toFixed(2)

const itemTemplate = ({ title, description, quantity, price }, taxRate) => [
  [
    {
      text: title,
      style: 'itemTitle'
    },
    {
      text: description,
      style: 'itemSubTitle'
    }
  ],
  {
    text: quantity,
    style: 'itemNumber'
  },
  {
    text: `$${price}`,
    style: 'itemNumber'
  },
  {
    text: `${taxRate}%`,
    style: 'itemNumber'
  },
  {
    text: `$${((price * taxRate + price) * quantity).toFixed(2)}`,
    style: 'itemTotal'
  }
]

const template = ({
  dateIssued,
  storeLogo,
  invoiceNumber,
  storeName,
  displayName,
  storeStreet,
  storeCity,
  storeCountry,
  customerStreet,
  customerCity,
  customerCountry,
  taxRate,
  notes,
  items
}) => ({
  content: [
    // Header
    {
      columns: [
        {
          image:
            'data:image/png;base64,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',
          width: 150
        },

        [
          {
            text: 'INVOICE',
            style: 'invoiceTitle',
            width: '*'
          },
          {
            stack: [
              {
                columns: [
                  {
                    text: 'Invoice #',
                    style: 'invoiceSubTitle',
                    width: '*'
                  },
                  {
                    text: invoiceNumber,
                    style: 'invoiceSubValue',
                    width: 100
                  }
                ]
              },
              {
                columns: [
                  {
                    text: 'Date Issued',
                    style: 'invoiceSubTitle',
                    width: '*'
                  },
                  {
                    text: dateIssued,
                    style: 'invoiceSubValue',
                    width: 100
                  }
                ]
              }
            ]
          }
        ]
      ]
    },
    // Billing Headers
    {
      columns: [
        {
          text: 'Billing From',
          style: 'invoiceBillingTitle'
        },
        {
          text: 'Billing To',
          style: 'invoiceBillingTitle'
        }
      ]
    },
    // Billing Details
    {
      columns: [
        {
          text: storeName,
          style: 'invoiceBillingDetails'
        },
        {
          text: displayName,
          style: 'invoiceBillingDetails'
        }
      ]
    },
    // Billing Address Title
    {
      columns: [
        {
          text: 'Address',
          style: 'invoiceBillingAddressTitle'
        },
        {
          text: 'Address',
          style: 'invoiceBillingAddressTitle'
        }
      ]
    },
    // Billing Address
    {
      columns: [
        {
          text: `${storeStreet} \n ${storeCity} \n ${storeCountry}`,
          style: 'invoiceBillingAddress'
        },
        {
          text: `${customerStreet} \n ${customerCity} \n ${customerCountry}`,
          style: 'invoiceBillingAddress'
        }
      ]
    },
    // Line breaks
    '\n\n',
    // Items
    {
      table: {
        // headers are automatically repeated if the table spans over multiple pages
        // you can declare how many rows should be treated as headers
        headerRows: 1,
        widths: ['*', 40, 'auto', 40, 'auto', 80],

        body: [
          // Table Header
          [
            {
              text: 'Product',
              style: 'itemsHeader'
            },
            {
              text: 'Qty',
              style: ['itemsHeader', 'center']
            },
            {
              text: 'Price',
              style: ['itemsHeader', 'center']
            },
            {
              text: 'Tax',
              style: ['itemsHeader', 'center']
            },
            {
              text: 'Total',
              style: ['itemsHeader', 'center']
            }
          ],
          ...parseItems(items, taxRate)
        ]
      }
    },
    {
      table: {
        headerRows: 0,
        widths: ['*', 80],

        body: [
          [
            {
              text: 'Subtotal',
              style: 'itemsFooterSubTitle'
            },
            {
              text: `$${getSubTotal(items)}`,
              style: 'itemsFooterSubValue'
            }
          ],
          [
            {
              text: `Tax ${taxRate}%`,
              style: 'itemsFooterSubTitle'
            },
            {
              text: `$${(getSubTotal(items) * taxRate).toFixed(2)}`,
              style: 'itemsFooterSubValue'
            }
          ],
          [
            {
              text: 'TOTAL',
              style: 'itemsFooterTotalTitle'
            },
            {
              text: `$${(
                getSubTotal(items) * taxRate +
                getSubTotal(items)
              ).toFixed(2)}`,
              style: 'itemsFooterTotalValue'
            }
          ]
        ]
      }, // table
      layout: 'lightHorizontalLines'
    },
    {
      text: 'NOTES',
      style: 'notesTitle'
    },
    {
      text: notes || '',
      style: 'notesText'
    }
  ],
  styles: {
    // Document Header
    documentHeaderLeft: {
      fontSize: 10,
      margin: [5, 5, 5, 5],
      alignment: 'left'
    },
    documentHeaderCenter: {
      fontSize: 10,
      margin: [5, 5, 5, 5],
      alignment: 'center'
    },
    documentHeaderRight: {
      fontSize: 10,
      margin: [5, 5, 5, 5],
      alignment: 'right'
    },
    // Document Footer
    documentFooterLeft: {
      fontSize: 10,
      margin: [5, 5, 5, 5],
      alignment: 'left'
    },
    documentFooterCenter: {
      fontSize: 10,
      margin: [5, 5, 5, 5],
      alignment: 'center'
    },
    documentFooterRight: {
      fontSize: 10,
      margin: [5, 5, 5, 5],
      alignment: 'right'
    },
    // Invoice Title
    invoiceTitle: {
      fontSize: 22,
      bold: true,
      alignment: 'right',
      margin: [0, 0, 0, 15]
    },
    // Invoice Details
    invoiceSubTitle: {
      fontSize: 12,
      alignment: 'right'
    },
    invoiceSubValue: {
      fontSize: 12,
      alignment: 'right'
    },
    // Billing Headers
    invoiceBillingTitle: {
      fontSize: 14,
      bold: true,
      alignment: 'left',
      margin: [0, 20, 0, 5]
    },
    // Billing Details
    invoiceBillingDetails: {
      alignment: 'left'
    },
    invoiceBillingAddressTitle: {
      margin: [0, 7, 0, 3],
      bold: true
    },
    invoiceBillingAddress: {},
    // Items Header
    itemsHeader: {
      margin: [0, 5, 0, 5],
      bold: true
    },
    // Item Title
    itemTitle: {
      bold: true
    },
    itemSubTitle: {
      italics: true,
      fontSize: 11
    },
    itemNumber: {
      margin: [0, 5, 0, 5],
      alignment: 'center'
    },
    itemTotal: {
      margin: [0, 5, 0, 5],
      bold: true,
      alignment: 'center'
    },

    // Items Footer (Subtotal, Total, Tax, etc)
    itemsFooterSubTitle: {
      margin: [0, 5, 0, 5],
      bold: true,
      alignment: 'right'
    },
    itemsFooterSubValue: {
      margin: [0, 5, 0, 5],
      bold: true,
      alignment: 'center'
    },
    itemsFooterTotalTitle: {
      margin: [0, 5, 0, 5],
      bold: true,
      alignment: 'right'
    },
    itemsFooterTotalValue: {
      margin: [0, 5, 0, 5],
      bold: true,
      alignment: 'center'
    },
    signaturePlaceholder: {
      margin: [0, 70, 0, 0]
    },
    signatureName: {
      bold: true,
      alignment: 'center'
    },
    signatureJobTitle: {
      italics: true,
      fontSize: 10,
      alignment: 'center'
    },
    notesTitle: {
      fontSize: 10,
      bold: true,
      margin: [0, 50, 0, 3]
    },
    notesText: {
      fontSize: 10
    },
    center: {
      alignment: 'center'
    }
  },
  defaultStyle: {
    columnGap: 20
  }
})

const createPdfTemplate = (transaction, order, store) => {
  return template({
    dateIssued: transaction.updatedAt,
    storeLogo: transaction.logo || '',
    invoiceNumber: transaction._id,
    storeName: 'Alibay',
    displayName: order.orderDetails[0].displayName,
    storeStreet: '',
    storeCity: '',
    storeCountry: '',
    customerStreet: '',
    customerCity: '',
    customerCountry: '',
    taxRate: 0.15,
    notes: '',
    items: order.orderDetails
  })
}

export const orderIdToPdf = async orderId => {
  const order = await getOrderById(orderId)
  const transaction = await getTransactionById(order.transactionIds[0])
  console.log({ order, transaction })
  return createPdfTemplate(transaction, order)
}
