import React from "react";

 function Profile(){
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
                      <h3 className="mb-5 text-uppercase">My Profile</h3>
      
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example1m" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Example1m">First name</label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div claclassNames="form-outline">
                            <input type="text" id="form3Example1n" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form3Example1n">Last name</label>
                          </div>
                        </div>
                      </div>   
      
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example8" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example8">Address</label>
                      </div>                            
                      <div className="row">
                        <div className="col-md-6 mb-4">
      
                          <select className="select">
                            <option value="1">State</option>
                            <option value="2">Option 1</option>
                            <option value="3">Option 2</option>
                            <option value="4">Option 3</option>
                          </select>
      
                        </div>
                        <div className="col-md-6 mb-4">
      
                          <select className="select">
                            <option value="1">City</option>
                            <option value="2">Option 1</option>
                            <option value="3">Option 2</option>
                            <option value="4">Option 3</option>
                          </select>
      
                        </div>
                      </div>   
      
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example90" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example90">Pincode</label>
                      </div>
                              
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example97" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example97">Email ID</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example99" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Example99">Password</label>
                      </div>
      
                      <div className="d-flex justify-content-end pt-3">
                        <button type="button" className="btn btn-light btn-lg">Reset all</button>
                        <button type="button" className="btn btn-warning btn-lg ms-2">Update</button>
                      </div>
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Profile;