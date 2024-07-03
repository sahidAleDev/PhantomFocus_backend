import { Configuration } from "../interfaces/configuration.interface";
import ConfigurationModel from "../models/configuration";


const getConfigurations = async () => {
  const response = ConfigurationModel.find()
  return response
}

const insertConfiguration = async (configuration: Configuration) => {
  const response = ConfigurationModel.create(configuration)
  return response 
}

export {
  getConfigurations,
  insertConfiguration,
}