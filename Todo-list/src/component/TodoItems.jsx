function TodoItems() {

    let todoName = 'Buy Milk';
    let todoDate = '4/10/2023';
    

    return (
        <>

            <div className="main-box" >
                <div >
                    <div>{todoName}</div>
                </div>

                <div>
                    <div>{todoDate}</div>
                </div>
                <div>
                    <button>Delete</button>
                </div>


            </div>

        </>
    )
}
export default TodoItems;