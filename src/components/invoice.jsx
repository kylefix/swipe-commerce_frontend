import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { orderIdToPdf } from '../pdf/template'

pdfMake.vfs = pdfFonts.pdfMake.vfs

export default async orderId => {
  const template = await orderIdToPdf(orderId)
  return pdfMake.createPdf(template).open()
}
