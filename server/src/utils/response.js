module.exports = (res, req, statusCode, data) => {
  res.status(statusCode).json({
    meta: {
      error: false,
      count: data.length ? data.length : 1,
      status: statusCode,
      url: req.protocol + '://' + req.get('host') + req.originalUrl,
    },
    data: data || [],
  })
}