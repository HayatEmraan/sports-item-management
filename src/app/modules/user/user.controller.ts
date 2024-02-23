import { catchAsync } from '../../utils/catchasync'
import { UserService } from './user.service'

const findUser = catchAsync(async (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Users fetched successfully',
    data: await UserService.getUsersFromDB(),
  })
})

export const UserController = {
  findUser,
}
