function TodoItems({ todoName, todoDate}) {

    

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