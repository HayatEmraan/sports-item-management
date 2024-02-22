import { catchAsync } from '../../utils/catchasync'
import { SaleService } from './sales.service'

const insertSales = catchAsync(async (req, res) => {
  return res.status(201).json({
    success: true,
    message: 'Sales created successfully',
    data: await SaleService.salesIntoDb(req.body, req.user.userId),
  })
})

const salesHistoryByQuery = catchAsync(async (req, res) => {

  console.log(req.query);
  return res.status(200).json({
    success: true,
    message: 'Sales fetched successfully',
    data: await SaleService.salesHistory(req.query.stats),
  })
})

export const SalesController = {
  insertSales,
  salesHistoryByQuery,
}