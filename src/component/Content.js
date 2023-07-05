import React from 'react';
 
  function Content() {
    return (
      
        <div> 
       <section class="bg-light" id="about">
         <div class="container">
           <div class="row">
             <div class="col-sm-12 col-md-12">
                <h1 class="text-center mt-4 text-secondary">Train Schedule</h1>
              </div>
             </div>
            <div class="row">
             <p> </p>
            </div>   
         </div>   
       </section>   
  
       <section class="" id="destinations">   
        <div class="container">
            <div class="row">
      
             <div>
             <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Train name</th>
      <th scope="col">Origin</th>
      <th scope="col">Destination</th>
      <th scope="col">Seats left</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Ajanta Express</th>
      <td>Manmad Jn</td>
      <td>Secunderabad Jn</td>
      <td>199</td>
      <td>1000</td>
    </tr>
    <tr>
      <th scope="row">Brindavan Express</th>
      <td>Bangalore</td>
      <td>Chennai Central</td>
      <td>140</td>
      <td>1700</td>
    </tr>
    <tr>
      <th scope="row">Chennai Mail</th>
      <td>Chennai Central</td>
      <td>Howrah Jn</td>
      <td>127</td>
      <td>2000</td>
    </tr>
    <tr>
      <th scope="row">Durgiana Express</th>
      <td>Kolkata	</td>
      <td>Amritsar Junction</td>
      <td>117</td>
      <td>2500</td>
    </tr>
    <tr>
      <th scope="row">Haripriya Express</th>
      <td>Tirupati</td>
      <td>Kolhapur</td>
      <td>110</td>
      <td>3500</td>
    </tr>
  </tbody>
</table>
       </div>
     </div>
   </div> 
  </section> 
  </div>
    );
  }
   
  export default Content;