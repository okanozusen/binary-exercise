function sortedFrequency(arr, target) {
    const findFirst = (arr, target) => {
        let left = 0;
        let right = arr.length - 1;
        let firstIndex = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) {
                firstIndex = mid; 
                right = mid - 1;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return firstIndex;
    };

    const findLast = (arr, target) => {
        let left = 0;
        let right = arr.length - 1;
        let lastIndex = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) {
                lastIndex = mid; 
                left = mid + 1;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return lastIndex;
    };

    const firstIndex = findFirst(arr, target);
    if (firstIndex === -1) return 0; 

    const lastIndex = findLast(arr, target);
    return lastIndex - firstIndex + 1; 
}

module.exports = sortedFrequency;