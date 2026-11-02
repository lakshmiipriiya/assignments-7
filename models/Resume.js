
const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    institution: String,
    qualification: String,
    details: String,
    period: String,
    location: String,
    sortOrder: { type: Number, default: 0 }
});

const skillGroupSchema = new mongoose.Schema({
    groupName: String,
    items: [String],
    sortOrder: { type: Number, default: 0 }
});

const activitySchema = new mongoose.Schema({
    description: String,
    sortOrder: { type: Number, default: 0 }
});

const projectSchema = new mongoose.Schema({
    title: String,
    technologies: String,
    points: [{
        description: String,
        sortOrder: { type: Number, default: 0 }
    }],
    sortOrder: { type: Number, default: 0 }
});

const certificationSchema = new mongoose.Schema({
    description: String,
    sortOrder: { type: Number, default: 0 }
});

const resumeSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    phone: String,
    location: String,
    linkedinUrl: String,
    linkedinLabel: String,
    githubUrl: String,
    githubLabel: String,
    professionalSummary: String,

    education: [educationSchema],
    skillGroups: [skillGroupSchema],
    activities: [activitySchema],
    projects: [projectSchema],
    certifications: [certificationSchema]

}, { timestamps: true });

module.exports = mongoose.model('Resume', resumeSchema);
