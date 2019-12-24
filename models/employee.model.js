const mongoose =  require('mongoose');

const employeeSchema = mongoose.Schema(
    {
        emp_id: { type: String, required: true, default: null, trim: true, unique: true },
        name: { type: String, required: true, default: null, trim: true },
        salary: { type: Number, required: true, default: 0, min: 0 },
        type: { type: String, required: true, default: 'junior', enum: ['junior', 'senior'], trim: true, lower: true }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('employee', employeeSchema);
