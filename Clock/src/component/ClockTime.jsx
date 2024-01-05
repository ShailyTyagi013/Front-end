function ClockTime () {
    let date= new Date();
    return(
        <>
        
         
        <h1 className="heading">{date.toLocaleTimeString()}
         
        </h1>
        </>
    )

}

export default ClockTime;