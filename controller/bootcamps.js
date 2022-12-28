// @desc Get all bootcamps
// @route Get /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).send({ success: true, msg: "Show all bootcamps" });
};

// @desc Get single bootcamp
// @route Get /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).send({ success: true, msg: `get bootcamp ${req.params.id}` });
};

// @desc Create new bootcamps
// @route POST /api/v1/bootcamps
// @access private
exports.createBootcamp = (req, res, next) => {
  res.status(200).send({ success: true, msg: "Create new bootcamps" });
};

// @desc update bootcamp
// @route POST /api/v1/bootcamps/:id
// @access private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .send({ success: true, msg: `update bootcamp ${req.params.id}` });
};

// @desc delete  bootcamp
// @route POST /api/v1/bootcamps/:id
// @access private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .send({ success: true, msg: `delete bootcamp ${req.params.id}` });
};
