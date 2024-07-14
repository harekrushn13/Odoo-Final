// User Model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['employee', 'HR', 'admin'], required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);

// Grievance Model
const timelineSchema = new Schema({
    status: { type: String, enum: ['pending', 'in-progress', 'resolved'], required: true },
    date: { type: Date, default: Date.now }
});

const grievanceSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    grievanceType: {
        type: String,
        enum: [
            'Workplace Harassment',
            'Workplace Harassment - Sexual Harassment',
            'Workplace Harassment - Bullying',
            'Workplace Harassment - Discrimination',
            'Work Conditions',
            'Work Conditions - Health and Safety Concerns',
            'Work Conditions - Unfavorable Work Environment',
            'Work Conditions - Ergonomic Issues',
            'Compensation and Benefits',
            'Compensation and Benefits - Salary Discrepancies',
            'Compensation and Benefits - Unpaid Wages or Overtime',
            'Compensation and Benefits - Benefits Issues',
            'Workplace Policies',
            'Workplace Policies - Violation of Company Policies',
            'Workplace Policies - Inconsistent Application of Policies',
            'Workplace Policies - Unfair Disciplinary Actions',
            'Interpersonal Conflicts',
            'Interpersonal Conflicts - Conflicts with Co-workers',
            'Interpersonal Conflicts - Conflicts with Supervisors or Managers',
            'Workload and Job Responsibilities',
            'Workload and Job Responsibilities - Unmanageable Workload',
            'Workload and Job Responsibilities - Unclear Job Expectations',
            'Workload and Job Responsibilities - Inadequate Resources or Support',
            'Career Development',
            'Career Development - Lack of Training or Development Opportunities',
            'Career Development - Unfair Promotion Practices',
            'Career Development - Performance Review Disputes',
            'Ethical and Legal Concerns',
            'Ethical and Legal Concerns - Fraud or Misconduct',
            'Ethical and Legal Concerns - Compliance Issues',
            'Ethical and Legal Concerns - Whistleblowing'
        ],
        required: true
    },
    description: { type: String, required: true },
    department: { type: String, required: true },
    severity: { type: String, enum: ['low', 'medium', 'high'], required: true },
    status: { type: String, enum: ['pending', 'in-progress', 'resolved'], default: 'pending' },
    attachments: [{ type: String }],
    timeline: [timelineSchema],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Grievance', grievanceSchema);

// Notification Model
const notificationSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    grievanceId: { type: Schema.Types.ObjectId, ref: 'Grievance', required: true },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notification', notificationSchema);

// Message Model
const messageSchema = new Schema({
    grievanceId: { type: Schema.Types.ObjectId, ref: 'Grievance', required: true },
    senderId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', messageSchema);
