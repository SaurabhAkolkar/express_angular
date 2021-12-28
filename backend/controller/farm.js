const Farm = require("../model/Farm");
// exports.createFarm = async (req, res) => {
//   try {
//     const data = await Farm.create(req.body);
//     res.status(200).json({
//       success: true,
//       message: "Farm create successfully",
//       data: data,
//     });
//   } catch (error) {
//     res.status(200).json({
//       success: false,
//       message: `Farm not create successfully ${error}`,
//       data: null,
//     });
//   }
// };

exports.getAllFarm = async (req, res) => {
  try {
    const data = await Farm.find();
    res.status(200).json({
      success: true,
      message: "Get All Farm successfully",
      data: data,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: `Unable to get all Farm successfully ${error}`,
      data: null,
    });
  }
};

exports.deleteFarm = async (req, res) => {
  try {
    const isId = await Farm.findById(req.params.id);
    if (!isId) {
      res.status(200).json({
        success: false,
        message: `Farm not Found ${error}`,
        data: null,
      });
    }
    const data = await Farm.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Farm delete successfully",
      data: data,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: `Farm not delete successfully ${error}`,
      data: null,
    });
  }
};
