

export const Orders = () => {

  const onSearchSumbit = () =>{
    console.log("submit serach");
  };

  return (
    <>
      <div className="row">
        
        <div className="col-10">
          <h1 className="ms-2">Orders</h1> 

        </div>
        <div className="col-2">
          <button className="btn btn-outline-primary mt-2 justify-content-end btn-create-order">Create New Order</button>

        </div>

      </div>
      <hr/>


      <div className="row">
        <div className="col-6 orders-list">  
        
              <form onSubmit={onSearchSumbit}>
                <input 
                  type="text"
                  placeholder="Search an Order"
                  className="form-control"
                  name="searchText"
                  autoComplete="off"
                />
                <button className="btn btn-outline-primary mt-1 float-right">
                    Search
                </button>
              </form>




          <ul>
            <li>Order #1</li>
            <li>Order #2</li>
            <li>Order #3</li>
            <li>Order #4</li>
          </ul>
        </div>
        <div className="col-6">
          <h1>Show edit form</h1>
          <div className="table-container">
            <table className="table table-striped">
              <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Piece</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Total Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Piece1</td>
                  <td>18</td>
                  <td>100</td>
                  <td>18*100</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Piece2</td>
                  <td>9</td>
                  <td>500</td>
                  <td>9*500</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Piece3</td>
                  <td>9</td>
                  <td>400</td>
                  <td>9*400</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="btn btn-outline-primary mt-2">Add Piece</button>
        </div>
          
      </div>
    </>
  )
}
