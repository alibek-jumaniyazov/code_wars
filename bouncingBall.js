function bouncingBall(h, bounce, window) {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
        return -1;
    }

    let count = 1; // Counting the initial drop
    let height = h;
    while (height * bounce > window) {
        count += 2; // Counting the bounce up and the bounce down
        height *= bounce;
    }

    return count;
}
