import mongoose from 'mongoose'
import { databaseUrl } from '../config/index.js'
import logger from '../logger.js'

export default mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => logger.info('Database connection successful'))
.catch(e => logger.error(`Exception connecting to database ${e}`))
