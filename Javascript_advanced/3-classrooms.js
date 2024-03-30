function createClassRoom(numberofStudents){
    var students = [];
    for(let i = 0; i<numberofStudents;i++){
        let seatNumber = studentSeat(i+1);
        console.log(seatNumber);
        students.push(seatNumber);
    }
    function studentSeat(seat){
        return function(){
            return seat;
        }
    }
    return students;
}

const classRoom = createClassRoom(10);