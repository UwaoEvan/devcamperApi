const Bootcamp = require('../models/Bootcamp');

//@desc     Get all bootcamps
//@route    GET /api/v1/bootcamps
//@access   Public
exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();

        res.status(200).json({ success: true, data: bootcamps })
    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false })
    }
}

//@desc     Create a new bootcamp
//@route    POST /api/v1/bootcamps
//@access   Admin
exports.createBootcamp = async (req, res, next) => {
    try {
    const bootcamp = await Bootcamp.create(req.body);
    
    res.status(200).json({ 
        success: true,
        data: bootcamp
    })
    } catch(err) {
        console.log(err)
        res.status(400).json({
        success: false
    })
}
}

//@desc     Get a single bootcamp
//@route    GET /api/v1/bootcamps/:id
//@access   Public
exports.getBootcamp = async (req, res, next) => {
    console.log(req.params.id)
    try {
        const bootcamp = await Bootcamp.findById(req.params.id); 
        if(!bootcamp){
            res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: bootcamp })
    } catch (err) {
        res.status(400).json({ success: false })
    }
}

//@desc     Update a single bootcamp
//@route    PUT /api/v1/bootcamps/:id
//@access   Admin
exports.updateBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, { 
            new: true,
            runValidators: true
        });
        if(!bootcamp) {
            res.status(400).json({ success: false })
        }

        res.status(200).json({ success: true, data: bootcamp })
    } catch (error) {
        
    }
}

//@desc     Delete a single bootcamp
//@route    DELETE /api/v1/bootcamps/:id
//@access   Admin
exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)
        if(!bootcamp){
            res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: bootcamp })
    } catch (err) {
        console.log(err)
        res.status(400).json({ success: false })
    }
}