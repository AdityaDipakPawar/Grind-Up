const Job = require('../models/Job');
const JobApplication = require('../models/JobApplication');
const Invite = require('../models/Invite');
const User = require('../models/User');

// Create a new job posting
exports.createJob = async (req, res) => {
  try {
    const {
      title,
      description,
      location,
      salary,
      employmentType,
      experience,
      skills,
      requirements,
      benefits,
      applicationDeadline,
      vacancies
    } = req.body;

    // Check if user is a company
    if (req.user.type !== 'company') {
      return res.status(403).json({
        success: false,
        message: 'Only companies can post jobs'
      });
    }

    const job = new Job({
      title,
      description,
      company: req.user.id,
      location,
      salary,
      employmentType,
      experience,
      skills: skills || [],
      requirements,
      benefits,
      applicationDeadline,
      vacancies: vacancies || 1
    });

    await job.save();
    await job.populate('company', 'companyName email contactNo');

    res.status(201).json({
      success: true,
      message: 'Job posted successfully',
      data: job
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
};

// Get all jobs
exports.getAllJobs = async (req, res) => {
  try {
    const { page = 1, limit = 10, location, employmentType, search } = req.query;
    
    let query = { isActive: true };
    
    if (location) {
      query.location = new RegExp(location, 'i');
    }
    
    if (employmentType) {
      query.employmentType = employmentType;
    }
    
    if (search) {
      query.$or = [
        { title: new RegExp(search, 'i') },
        { description: new RegExp(search, 'i') },
        { skills: { $in: [new RegExp(search, 'i')] } }
      ];
    }

    const jobs = await Job.find(query)
      .populate('company', 'companyName email contactNo industry companySize location')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Job.countDocuments(query);

    res.json({
      success: true,
      data: {
        jobs,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
        total
      }
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
};

// Get job by ID
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id)
      .populate('company', 'companyName email contactNo industry companySize location');

    if (!job) {
      return res.status(404).json({
        success: false,
        message: 'Job not found'
      });
    }

    res.json({
      success: true,
      data: job
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
};

// Update job
exports.updateJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: 'Job not found'
      });
    }

    // Check if user owns the job
    if (job.company.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this job'
      });
    }

    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('company', 'companyName email contactNo industry companySize location');

    res.json({
      success: true,
      message: 'Job updated successfully',
      data: updatedJob
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
};

// Delete job
exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: 'Job not found'
      });
    }

    // Check if user owns the job
    if (job.company.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this job'
      });
    }

    await Job.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'Job deleted successfully'
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
};

// Get jobs posted by company
exports.getCompanyJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ company: req.user.id })
      .populate('company', 'companyName email contactNo industry companySize location')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: jobs
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
};

// Apply for job (college applying)
exports.applyForJob = async (req, res) => {
  try {
    const { coverLetter, resume } = req.body;
    const jobId = req.params.id;

    // Check if user is a college
    if (req.user.type !== 'college') {
      return res.status(403).json({
        success: false,
        message: 'Only colleges can apply for jobs'
      });
    }

    // Check if job exists
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        success: false,
        message: 'Job not found'
      });
    }

    // Check if already applied
    const existingApplication = await JobApplication.findOne({
      job: jobId,
      applicant: req.user.id
    });

    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: 'You have already applied for this job'
      });
    }

    // Create application
    const application = new JobApplication({
      job: jobId,
      applicant: req.user.id,
      coverLetter,
      resume
    });

    await application.save();
    await application.populate('job', 'title company');
    await application.populate('applicant', 'collegeName email');

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully',
      data: application
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
};

// Get applications for a job (company view)
exports.getJobApplications = async (req, res) => {
  try {
    const jobId = req.params.id;

    // Check if job exists and user owns it
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        success: false,
        message: 'Job not found'
      });
    }

    if (job.company.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to view applications for this job'
      });
    }

    const applications = await JobApplication.find({ job: jobId })
      .populate('applicant', 'collegeName email contactNo')
      .populate('job', 'title')
      .sort({ appliedAt: -1 });

    res.json({
      success: true,
      data: applications
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
};

// Update application status
exports.updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.applicationId;

    const application = await JobApplication.findById(applicationId)
      .populate('job');

    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Application not found'
      });
    }

    // Check if user owns the job
    if (application.job.company.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this application'
      });
    }

    application.status = status;
    await application.save();

    res.json({
      success: true,
      message: 'Application status updated successfully',
      data: application
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
};

// Invite college to apply for job
exports.inviteCollege = async (req, res) => {
  try {
    const { collegeId, message } = req.body;
    const jobId = req.params.id;

    // Check if user is a company
    if (req.user.type !== 'company') {
      return res.status(403).json({
        success: false,
        message: 'Only companies can send invitations'
      });
    }

    // Check if job exists and user owns it
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        success: false,
        message: 'Job not found'
      });
    }

    if (job.company.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to invite for this job'
      });
    }

    // Check if college exists
    const college = await User.findById(collegeId);
    if (!college || college.type !== 'college') {
      return res.status(404).json({
        success: false,
        message: 'College not found'
      });
    }

    // Check if already invited
    const existingInvite = await Invite.findOne({
      job: jobId,
      college: collegeId
    });

    if (existingInvite) {
      return res.status(400).json({
        success: false,
        message: 'College has already been invited for this job'
      });
    }

    // Create invite
    const invite = new Invite({
      job: jobId,
      company: req.user.id,
      college: collegeId,
      message
    });

    await invite.save();
    await invite.populate('job', 'title');
    await invite.populate('college', 'collegeName email');
    await invite.populate('company', 'companyName email');

    res.status(201).json({
      success: true,
      message: 'Invitation sent successfully',
      data: invite
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
};

