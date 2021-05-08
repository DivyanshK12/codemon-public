module.exports = robot =>

  robot.respond(/commands\b/i, function(msg) {
    let commands = [
        "badger",
        "open the <door> door",
        "I like pie",
        "lulz",
        "you are a little slow",
        "annoy me",
        "unannoy me",
        "have a soda",
        "sleep it off",
        "topic"
    ];
    return msg.send(msg.random(commands));
  })