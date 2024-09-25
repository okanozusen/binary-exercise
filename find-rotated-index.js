function findRotatedIndex() {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

               if (arr[mid] === target) {
            return mid;
        }

        if (arr[left] <= arr[mid]) {
            if (target >= arr[left] && target < arr[mid]) {
                right = mid - 1; 
            } else {
                left = mid + 1; 
            }
        } else {
            if (target > arr[mid] && target <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1; 
            }
        }
    }

    return -1;
}


module.exports = findRotatedIndex