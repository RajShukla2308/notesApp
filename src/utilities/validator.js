var Validator = {}

Validator.validateFlightId = (flightId)=>{
    var pattern = new RegExp("^IND-[1-9][0-9]{2}$")
    if (flightId.length!=7 && !(pattern.test(flightId))){
        var err= Error("Error in Flight id")
        err.status = 406
        throw err
    }
}


Validator.validateBookingId =(bookingId)=>{
    if (new String(bookingId).length !=4){
        var err= Error("Error in Booking id")
        err.status = 406
        throw err
    }
}


module.exports =Validator