const Customer = require("../model/Customer");
exports.createCustomer = async (req, res) => {
  console.log(req.body);
  try {
    const data = await Customer.create(req.body);
    res.status(200).json({
      success: true,
      message: "User create successfully",
      data: data,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: `User not create successfully ${error}`,
      data: null,
    });
  }
};

exports.getAllCustomer = async (req, res) => {
  try {
    const data = await Customer.find();
    res.status(200).json({
      success: true,
      message: "Get AllUser successfully",
      data: data,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: `User not create successfully ${error}`,
      data: null,
    });
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const isId = await Customer.findById(req.params.id);
    if (!isId) {
      res.status(200).json({
        success: false,
        message: `User not Found ${error}`,
        data: null,
      });
    }
    const data = await Customer.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "User delete successfully",
      data: data,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: `User not delete successfully ${error}`,
      data: null,
    });
  }
};
