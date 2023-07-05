import React from 'react';
 
  function Form() {
    return (
        <form>
        <div class="form-row">
        <h1 class="text-center mt-4 text-secondary">Choose Train</h1>
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" id="inputEmail4" >
          </input></div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input type="password" class="form-control" id="inputPassword4" >
            </input> </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity">
            </input></div>
          <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <select id="inputState" class="form-control">
              <option></option>
              <option></option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" class="form-control" id="inputZip">
            </input></div>
        </div>
        <button type="submit" class="btn btn-primary">Check availability</button>
      </form>
        )
}
export default Form;