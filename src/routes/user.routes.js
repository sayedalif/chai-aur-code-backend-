import { Router } from "express";
import { changeCurrentPassword, getCurrentUser, getUserChannelProfile, getWatchHistory, loginUser, logoutUser, refreshTokenAccess, registerUser, updateAccountDetails, updateUserAvatar, updateUserCoverImage } from "../controllers/user.controllers.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router();

router.use(verifyJWT);

router.route('/register').post(
  upload.fields([
    {
      name: 'avatar',
      maxCount: 1,
    },
    {
      name: 'coverImage',
      maxCount: 1
    }
  ]),
  registerUser
);

router.route('/login').post(loginUser);

// secure routes
// router.route('/logout').post(verifyJWT, logoutUser);
router.route('/logout').post(logoutUser);

router.route('/refresh-token').post(refreshTokenAccess);

router.route('/change-password').post(changeCurrentPassword);

router.route('/current-user').get(getCurrentUser);

router.route('/update-account').patch(updateAccountDetails);

router.route('/avatar').patch(upload.single('avatar'), updateUserAvatar);

router.route('/cover-image').patch(upload.single('coverImage'), updateUserCoverImage);

router.route('/c/:username').get(getUserChannelProfile);

router.route('/history').get(getWatchHistory);

export default router;