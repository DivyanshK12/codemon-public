module.exports = robot =>

  robot.respond(/topic\b/i, function(msg) {
    const topics = [
        "Number Theory",
        "Recursion",
        "Back Tracking",
        "Dynamic Programming",
        "Greedy Algorithms",
        "Basic Graph Algortihms",
        "Minimum Spanning Trees",
        "Shortest Paths",
        "All pairs shortest paths",
        "Sorting and Searching",
        "Set Theory",
        "Randomized Algorithms",
        "Hash tables / Hashing",
        "Binary Trees",
        "Red Black Trees/ Special Trees",
        "B Trees",
        "Binomial Heaps",
        "Fibonacci Heap",
        "String Matching",
        "String Algos",
        "Polynomials and FFT",
        "Matrix Operations",
        "Computational Geometry"
    ];
    return msg.send(msg.random(topics));
  })
;