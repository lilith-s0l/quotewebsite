import mongoose from 'mongoose';

const resumeItemSchema = new mongoose.Schema({

  //Lilith's Quote Schema
  // quote: { type: String, maxlength: 1000 },
  // author: { type: String, maxlength: 100 },
  quote: { type: String, trim: true, maxlength: 1000 },
  author: { type: String, trim: true, maxlength: 100 },
  // DATA OMITTED DUE TO PEER FEEDBACK
  // date: { type: String, maxlength: 50 },
  // date: { type: Date, default: Date.now },
  // genre: { type: String, maxlength: 100 },
  // notes: { type: String, maxlength: 1000 },
  
}, { collection: 'resume_items', autoIndex: false });

export const ResumeItem = mongoose.models.ResumeItem || mongoose.model('ResumeItem', resumeItemSchema);
