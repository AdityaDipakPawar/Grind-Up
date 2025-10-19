const Company = require('../models/Company');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register a new company
exports.registerCompany = async (req, res) => {
  try {
    const {
      companyName,
      email,
      password,
      contactNo,
      industry,
      companySize,
      location,
    } = req.body;

    // Check if company already exists
    const existingCompany = await Company.findOne({ 
      $or: [{ email }, { companyName }] 
    });
    
    if (existingCompany) {
      return res.status(400).json({
        success: false,
        message: 'Company with this email or name already exists'
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create company
    const company = new Company({
      companyName,
      email,
      password: hashedPassword,
      contactNo,
      location,
      industry,
      companySize,
      location,
    });

    await company.save();

    // Generate JWT token
    const token = jwt.sign(
      { 
        id: company._id, 
        email: company.email, 
        type: 'company' 
      },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(201).json({
      success: true,
      message: 'Company registered successfully',
      data: {
        token,
        company: {
          id: company._id,
          companyName: company.companyName,
          email: company.email,
          type: 'company'
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Login company
exports.loginCompany = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find company
    const company = await Company.findOne({ email });
    if (!company) {
      return res.status(400).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, company.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        id: company._id, 
        email: company.email, 
        type: 'company' 
      },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({
      success: true,
      message: 'Login successful',
      data: {
        token,
        company: {
          id: company._id,
          companyName: company.companyName,
          email: company.email,
          type: 'company'
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Get all companies
exports.getAllCompanies = async (req, res) => {
  try {
    const { page = 1, limit = 10, search, industry, companySize, state, city } = req.query;
    
    let query = { isActive: true };
    
    if (search) {
      query.$or = [
        { companyName: new RegExp(search, 'i') },
        { industry: new RegExp(search, 'i') },
        { description: new RegExp(search, 'i') }
      ];
    }
    
    if (industry) {
      query.industry = new RegExp(industry, 'i');
    }
    
    if (companySize) {
      query.companySize = companySize;
    }
    
    if (state) {
      query['address.state'] = new RegExp(state, 'i');
    }
    
    if (city) {
      query['address.city'] = new RegExp(city, 'i');
    }

    const companies = await Company.find(query)
      .select('-password')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Company.countDocuments(query);

    res.json({
      success: true,
      data: {
        companies,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
        total
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Get company by ID
exports.getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id)
      .select('-password');

    if (!company) {
      return res.status(404).json({
        success: false,
        message: 'Company not found'
      });
    }

    res.json({
      success: true,
      data: company
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Update company profile
exports.updateCompany = async (req, res) => {
  try {
    const companyId = req.params.id;
    
    // Check if user is authorized to update this company
    if (req.user.id !== companyId && req.user.type !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this company'
      });
    }

    const updatedCompany = await Company.findByIdAndUpdate(
      companyId,
      req.body,
      { new: true, runValidators: true }
    ).select('-password');

    if (!updatedCompany) {
      return res.status(404).json({
        success: false,
        message: 'Company not found'
      });
    }

    res.json({
      success: true,
      message: 'Company updated successfully',
      data: updatedCompany
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Delete company
exports.deleteCompany = async (req, res) => {
  try {
    const companyId = req.params.id;
    
    // Check if user is authorized to delete this company
    if (req.user.id !== companyId && req.user.type !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this company'
      });
    }

    const company = await Company.findByIdAndDelete(companyId);

    if (!company) {
      return res.status(404).json({
        success: false,
        message: 'Company not found'
      });
    }

    res.json({
      success: true,
      message: 'Company deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Get current company profile
exports.getCurrentCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.user.id)
      .select('-password');

    if (!company) {
      return res.status(404).json({
        success: false,
        message: 'Company not found'
      });
    }

    res.json({
      success: true,
      data: company
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

