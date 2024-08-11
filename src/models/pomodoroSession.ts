import { Schema, model, Types } from "mongoose";
import { PomodoroSession } from "../interfaces/pomodoroSession.interface";

const PomodoroSessionSchema = new Schema<PomodoroSession>({
  userId: { 
    type: Types.ObjectId, 
    required: true, 
    ref: "users"
  },
  startTime: { 
    type: Date, 
    required: true 
  },
  endTime: { 
    type: Date, 
    required: true 
  },
  workDuration: { 
    type: Number, 
    required: true 
  },
  breakDuration: { 
    type: Number, 
    required: true 
  },
  currentCycle: { 
    type: Number, 
    required: true 
  },
  cyclesBeforeLongBreak: { 
    type: Number, 
    required: true 
  },
  longBreakDuration: { 
    type: Number, 
    required: true 
  },
  pauseRemainingTime: { 
    type: Number, 
    required: true 
  },
  title: { 
    type: String, 
    required: true 
  },
  isCompleted: { 
    type: Boolean, 
    required: true 
  },
  isActive: { 
    type: Boolean, 
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
})

const PomodoroSessionModel = model<PomodoroSession>('pomodoroSessions', PomodoroSessionSchema);
export default PomodoroSessionModel;