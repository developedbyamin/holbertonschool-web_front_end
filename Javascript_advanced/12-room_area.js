const roomDimensions = {
    width: 50,
    length: 100,
    getArea: function() {
        return this.width * this.length;
    }
};

const boundGetArea = roomDimensions.getArea.bind(roomDimensions);

console.log(roomDimensions.getArea()); // Output: 5000
console.log(boundGetArea()); // Output: 5000
