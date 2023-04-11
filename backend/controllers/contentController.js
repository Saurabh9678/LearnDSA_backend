const Content = require("../models/contentModel");
const ErrorHandler = require("../utils/errorHandler").default;
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apiFeatures");

//ADMIN OPERATIONS

//Create content --ADMIN
exports.createContent = catchAsyncErrors(async (req, res, next) => {
  req.body.createdBy = req.user.id;

  const content = await Content.create(req.body);

  res.status(201).json({
    success: true,
    content,
  });
});

//Delete Content --admin
exports.deleteContent = catchAsyncErrors(async (req, res, next) => {
  let content = await Content.findById(req.params.id);
  if (!content) {
    return next(new ErrorHandler("Content not found", 404));
  }
  await content.remove();

  res.status(200).json({
    success: true,
    message: "Content Delete Successful",
  });
});

// Update content --ADMIN
exports.updateContent = catchAsyncErrors(async (req, res, next) => {
  req.body.lastUpdatedBy = req.user.id;
  req.body.updatedOn = Date.now();

  let content = await Content.findById(req.params.id);
  if (!content) {
    return next(new ErrorHandler("Content not found", 404));
  }
  content = await Content.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    content,
  });
});

//USER & ADMIN OPERATIONS

//GET ALL CONTENTS
exports.getAllContents = catchAsyncErrors(async (req, res) => {
  // const resultPerPage = 10;
  const contentCount = await Content.countDocuments();
  const apiFeatures = new ApiFeatures(Content.find(), req.query)
    .search()
    .filter();
    // .pagination(resultPerPage);
  const contents = await apiFeatures.query;
  res.status(200).json({
    success: true,
    contents,
    contentCount,
  });
});

//GET SINGLE CONTENT
exports.getContent = catchAsyncErrors(async (req, res, next) => {
  const content = await Content.findById(req.params.id).populate(
    "createdBy lastUpdatedBy",
    "name email"
  );

  if (!content) {
    return next(new ErrorHandler("Content not found", 404));
  }

  res.status(200).json({
    success: true,
    content,
  });
});
