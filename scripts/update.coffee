module.exports = (robot) ->
  robot.respond /completed (.*) problems (.*)/i, (res) ->
      count = res.match[1]
      user = res.match[2]
      data = JSON.stringify({
        user : user,
        count : count,
      });
      robot.http(process.env.POSTER_DOMAIN)
      .header('Content-Type', 'application/json')
      .post(data) (err, res2, body) ->
        if err
          res.send "Encountered an error :( #{err}"
        else
          res.reply "User #{user} completed #{count} many problems !"
          return