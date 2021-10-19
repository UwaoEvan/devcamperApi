//@desc     Get all bootcamps
//@route    GET /api/v1/bootcamps
//@access   Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ msg: 'Show all bootcamps'})
}

//@desc     Create a new bootcamp
//@route    POST /api/v1/bootcamps
//@access   Admin
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ msg: 'Create a new bootcamp'})
}

//@desc     Get a single bootcamp
//@route    GET /api/v1/bootcamps/:id
//@access   Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ mgs: 'Get a single bootcamp'})
}

//@desc     Update a single bootcamp
//@route    PUT /api/v1/bootcamps/:id
//@access   Admin
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ mgs: 'Update a single bootcamp'})
}


//@desc     Delete a single bootcamp
//@route    DELETE /api/v1/bootcamps/:id
//@access   Admin
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ mgs: 'Delete a single bootcamp'})
}