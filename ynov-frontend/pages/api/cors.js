import Cors from 'cors'
import initMiddleware from '../../middlewares/init-middleware'

// Initialize the cors middleware
const cors = initMiddleware(

  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

export default async function handler(req, res) {
  // Run cors
  await cors(req, res)

  // Rest of the API logic
  res.json({ message: 'Hello Everyone!' })
}