function dirReduc(arr) {
    const oppositeDirections = {
        "NORTH": "SOUTH",
        "SOUTH": "NORTH",
        "EAST": "WEST",
        "WEST": "EAST"
    };

    const reducedPath = [];
    for (let direction of arr) {
        if (reducedPath.length > 0 && reducedPath[reducedPath.length - 1] === oppositeDirections[direction]) {
            reducedPath.pop(); // Remove the opposite direction
        } else {
            reducedPath.push(direction);
        }
    }

    return reducedPath;
}