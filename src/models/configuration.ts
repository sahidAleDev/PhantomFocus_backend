import { Schema, model, Types } from "mongoose";
import { Configuration } from "../interfaces/configuration.interface";

const ConfigurationSchema = new Schema<Configuration>({
  userId: { 
    type: Types.ObjectId, 
    required: true,
    ref: "users"
  },
  workDuration: { 
    type: Number, 
    required: true 
  },
  breakDuration: { 
    type: Number, 
    required: true 
  },
  longBreakDuration: { 
    type: Number, 
    required: true 
  },
  cyclesBeforeLongBreak: { 
    type: Number, 
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
})

const ConfigurationModel = model<Configuration>('configurations', ConfigurationSchema);
export default ConfigurationModel;