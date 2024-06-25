import dotenv from 'dotenv';
import moment from 'moment';

dotenv.config();

// Calculate expiration time
const expiresInDays = 30;
const expiresIn = moment().add(expiresInDays, 'days').toISOString();

const jwtConfig = {
  secret: process.env.JWT_SECRET,
  expiresIn: expiresIn,
};

export default jwtConfig;