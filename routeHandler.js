var express = require('express'),
    path = require('path'),
    router = express.Router()
    blog = require('./routes/blogController.js')

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

router.get('/blog', (req, res) => {
  res.render('blog')
})

// router.post('/blog', blog.create)
// router.get('/blog/:id', blog.get)
// router.put('/blog/:id', blog.update)
// router.delete('/blog/:id', bglog.delete)
module.exports = router
