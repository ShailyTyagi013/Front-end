function Todolist() {
    return (
        <>
            
                <div className="main-box" >
                    <div className="main-input">
                    <input type="text" placeholder="Enter todo here" />
                    </div>
                   <div className="main-input">
                   <input type="date" />
                   </div>
                    <div>
                    <button>Add</button>
                    </div>
                    
                </div>
            
        </>
    )
}

export default Todolist;