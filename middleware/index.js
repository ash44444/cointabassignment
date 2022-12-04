const rateLimit = require('express-rate-limit')

const loginAccountLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 24 hr
  max: 5, // Limit each IP to 5 create account requests per `window` (here, 24hr)
  message: 'Too many requests made from this IP, please try again after 24hr',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

module.exports = {
  loginAccountLimiter,
}
