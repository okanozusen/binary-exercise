function findRotationCount() {
    let left = 0;
    let right = arr.length - 1;

    if (arr[left] < arr[right]) {
        return 0;
    }

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const next = (mid + 1) % arr.length;
        const prev = (mid - 1 + arr.length) % arr.length;

        if (arr[mid] < arr[next] && arr[mid] < arr[prev]) {
            return mid; 
        }

        if (arr[mid] >= arr[left]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return 0; 
}


module.exports = findRotationCount