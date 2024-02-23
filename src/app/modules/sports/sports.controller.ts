import { catchAsync } from '../../utils/catchasync'
import { SportService } from './sports.service'

const dbInsertSports = catchAsync(async (req, res) => {
  return res.status(201).json({
    success: true,
    message: 'Sports created successfully',
    data: await SportService.insertSport(req.body),
  })
})

const getSports = catchAsync(async (req, res) => {
  const user = req.user
  return res.status(200).json({
    success: true,
    message: 'Sports fetched successfully',
    data: await SportService.getSports(req.query, user),
  })
})

const updateSport = catchAsync(async (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Sports updated successfully',
    data: await SportService.updateSport(req.body, req.params.id),
  })
})

const deleteSport = catchAsync(async (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Sports deleted successfully',
    data: await SportService.deleteSport(req.body.deleteIds),
  })
})



export const SportController = {
  getSports,
  dbInsertSports,
  updateSport,
  deleteSport,
}
