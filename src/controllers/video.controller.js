import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/clodinary.js";
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";
import { options } from "../constants.js";


const getAllVideos = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, query, sortBy, sortType, userId } = req.query;

  // todo: get all the videos based on query, sort and pagination.


});