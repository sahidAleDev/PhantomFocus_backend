import dotenv from "dotenv"; // Para usar variables de entorno
import { users } from './users';
import colors from 'colors';
import dbConnect from '../config/mongo';
import Users from '../models/user';

dotenv.config();

async function main() {
  await dbConnect();

  async function seedBD() {
    try {
      await Users.insertMany(users);
      console.log(colors.green.bold('Se agregaron los datos correctamente'));
      process.exit(0);
    } catch (error) {
      console.error('Error importing data', error);
      process.exit(1);
    }
  }

  async function clearDb() {
    try {
      await Users.deleteMany();
      console.log(colors.red.bold('Se eliminaron los datos correctamente'));
      process.exit(0);
    } catch (error) {
      console.error('Error importing data', error);
      process.exit(1);
    }
  }

  if (process.argv[2] === '--import') {
    seedBD();
  } else {
    clearDb();
  }
}

main().catch(error => {
  console.error('Error executing the script', error);
  process.exit(1);
});
