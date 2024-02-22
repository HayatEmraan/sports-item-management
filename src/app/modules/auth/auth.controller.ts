import { catchAsync } from '../../utils/catchasync'
import { UserService } from '../user/user.service'
import { AuthService } from './auth.service'

const registerUser = catchAsync(async (req, res) => {
  return res.status(201).json({
    success: true,
    message: 'User created successfully',
    data: await UserService.createUser(req.body),
  })
})

const loginUser = catchAsync(async (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'User logged in successfully',
    data: {
      accessToken: await AuthService.loginUser(req.body),
    },
  })
})

export const AuthController = {
  registerUser,
  loginUser,
}
