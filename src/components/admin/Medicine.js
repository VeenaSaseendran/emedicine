import React from "react";
import 'bootstrap';

 function Medicine(){
    return(
        <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">Medicine Management</h3>
      
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example1m" className="form-control form-control-lg" placeholder="Name" />                     
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div claclassNames="form-outline">
                            <input type="text" id="form3Example1n" className="form-control form-control-lg" placeholder="Manufacturer" />
                          </div>
                        </div>
                      </div>   
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example1m" className="form-control form-control-lg" placeholder="Price" />                     
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div claclassNames="form-outline">
                            <input type="text" id="form3Example1n" className="form-control form-control-lg" placeholder="Discount" />
                          </div>
                        </div>
                      </div>   
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example1m" className="form-control form-control-lg" placeholder="Quantity" />                     
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                        <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
                         <input placeholder="Select date" type="text" id="example" class="form-control"/>
                        
                        <i class="fas fa-calendar input-prefix"></i>
                        </div>
                        </div>
                      </div>   
                      <div className="row">                   
                        <div className="col-md-6 mb-4">
                          <div claclassNames="form-outline">
                          <input type="file" class="form-control" id="customFile" />
                          </div>
                        </div>
                        <div className="col-md-2 mb-2">
                          <div claclassNames="form-outline">
                          <button type="button"
                           className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" style={{backgroundcolor:'blue'}} >Add</button>
                          </div>
                          </div>
                          <div className="col-md-2 mb-2">
                          <div claclassNames="form-outline">
                          <button type="button"
                           className="btn btn-dark btn-lg  " >Reset</button>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  <table className="table ">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Manufacturer</th>
      <th scope="col">Unit Price</th>
      <th scope="col">Discount</th>
      <th scope="col">Quantity</th>
      <th scope="col">Exp Date</th>
      <th scope="col">Image</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
    
  </tbody>
        </table>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    )
}

export default Medicine;