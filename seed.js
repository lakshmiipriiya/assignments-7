
require('dotenv').config();
const mongoose = require('mongoose');
const Resume = require('./models/Resume');

const resumeData = {
    fullName: 'K. LAKSHMIPRIYA',
    email: 'k.lakshmipriya928@gmail.com',
    phone: '+91 8848120757',
    location: 'Kochi, Kerala',

    linkedinUrl: 'https://linkedin.com/in/lakshmi-priya-107307362',
    linkedinLabel: 'linkedin.com/in/lakshmi-priya-107307362',
    githubUrl: 'https://github.com/lakshmiipriiya',
    githubLabel: 'github.com/lakshmiipriiya',

    professionalSummary:
        'BCA (Data Science) graduate with a strong foundation in software development, web technologies, and database management. Proficient in Python, HTML, CSS, JavaScript and MySQL, with hands-on experience developing academic projects and solving real world problems through technology. Quick to learn new tools and technologies, with strong analytical thinking, problem-solving, and teamwork skills. Passionate about building scalable, user-friendly applications and eager to begin a career as a Software Developer.',

    education: [
        {
            institution: 'Cochin University of Science and Technology (CUSAT)',
            qualification: 'Master of Vocation (Application Development)',
            period: 'Ongoing',
            location: 'Kochi',
            sortOrder: 1
        },
        {
            institution: 'Amrita Vishwa Vidyapeetham',
            qualification: 'Bachelor of Computer Applications (Data Science)',
            details: 'CGPA: 7.65 / 10',
            period: '2023 - 2026',
            location: 'Kochi',
            sortOrder: 2
        },
        {
            institution: 'Bhavans Munshi Vidyashram',
            qualification: 'Higher Secondary',
            details: '83% Percentage',
            period: '2021 - 2023',
            location: 'Thiruvamkulam',
            sortOrder: 3
        }
    ],

    skillGroups: [
        {
            groupName: 'Programming',
            items: ['Python', 'Java', 'JavaScript', 'C#', 'HTML', 'CSS'],
            sortOrder: 1
        },
        {
            groupName: 'Databases',
            items: ['MySQL', 'SQLite'],
            sortOrder: 2
        },
        {
            groupName: 'Tools & Platforms',
            items: ['VS Code', 'Jupyter Notebook', 'Google Colab'],
            sortOrder: 3
        },
        {
            groupName: 'Languages',
            items: [
                'English (Professional)',
                'Malayalam (Native)',
                'Hindi (Elementary)'
            ],
            sortOrder: 4
        }
    ],

    activities: [
        {
            description: 'Team Leader: Led both Major and Minor academic project teams, coordinating task allocation, project execution, and timely delivery.',
            sortOrder: 1
        },
        {
            description: 'Participated in Artificial Intelligence (AI) Bootcamps to enhance knowledge of AI technologies and industry trends.',
            sortOrder: 2
        },
        {
            description: 'Attended Hardware Workshops, gaining practical exposure to computer hardware and system fundamentals.',
            sortOrder: 3
        },
        {
            description: 'Actively participated in technical workshops and seminars to strengthen technical and professional competencies.',
            sortOrder: 4
        }
    ],

    projects: [
        {
            title: 'Protectech – Smart Website Security & SEO Analyzer',
            technologies: 'React.js, Flask, Python, MySQL, HTML, CSS, JavaScript',
            sortOrder: 1,
            points: [
                { description: 'Developed a web application that analyzes website security and SEO performance.', sortOrder: 1 },
                { description: 'Implemented SSL certificate and security header checking.', sortOrder: 2 },
                { description: 'Integrated MySQL authentication system.', sortOrder: 3 },
                { description: 'Generated analysis reports with recommendations.', sortOrder: 4 },
                { description: 'Built responsive frontend using React.js and Flask APIs.', sortOrder: 5 }
            ]
        },
        {
            title: 'Interview Scheduling & Candidate Shortlisting System',
            technologies: 'Python, Flask, MySQL, HTML, CSS, JavaScript',
            sortOrder: 2,
            points: [
                { description: 'Developed recruitment management system.', sortOrder: 1 },
                { description: 'Implemented automated candidate shortlisting.', sortOrder: 2 },
                { description: 'Created interview scheduling dashboard.', sortOrder: 3 },
                { description: 'Integrated MySQL database.', sortOrder: 4 },
                { description: 'Reduced manual recruitment effort.', sortOrder: 5 }
            ]
        }
    ],

    certifications: [
        {
            description: 'Major academic software development project under the industry mentorship of ReKonsult (2026).',
            sortOrder: 1
        }
    ]
};

async function seedDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        const existingResume = await Resume.findOne();

        if (existingResume) {
            console.log('Resume already exists. No duplicate inserted.');
            return;
        }

        await Resume.create(resumeData);
        console.log('Resume inserted successfully!');
    } catch (error) {
        console.error('Error inserting resume:', error.message);
        process.exitCode = 1;
    } finally {
        if (mongoose.connection.readyState !== 0) {
            await mongoose.disconnect();
        }
    }
}

seedDatabase();
