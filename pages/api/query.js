
var Twit = require('twit')
 
var T = new Twit({
  consumer_key:         'HN5mgnSJY0GPi2GGbZ1AmcbNK',
  consumer_secret:      'KtJ6hIJ9VPYAzv9uBAoB7XuuW1aQPSprzqUm3fgQijJedTHGZC',
  access_token:         '1125757371861520389-mhDiO93hwCy4P9BLHrnShmsV5Ede5K',
  access_token_secret:  'kXrTf5NfdlJRl60LwsQqah8LanKP4iGVyYBE6d2qhCfrc',
})

export default (req, res) => {
    T.get('friendships/show', { source_screen_name	: String(req.body.source), target_screen_name: String(req.body.target) },  function (err, data, response) {
        if (String(data.relationship.source.following) === "true" && String(data.relationship.source.followed_by) === "true") {
            res.send("successful!")
        } else {
            res.send("unsuccessful!")
        }
    })
}

