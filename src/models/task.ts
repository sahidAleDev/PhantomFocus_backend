import { Schema, model, Types } from "mongoose";
import { Task } from "../interfaces/task.interface";

const TaskSchema = new Schema<Task>({
  userId: { 
    type: Types.ObjectId, 
    required: true, 
    ref: "users" 
  },
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String 
  },
  completed: { 
    type: Boolean, 
    default: false 
  },
  pomodoroSessionId: { 
    type: Types.ObjectId, 
    required: true, 
    ref: "pomodoroSessions" 
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const TaskModel = model<Task>("tasks", TaskSchema);
export default TaskModel;