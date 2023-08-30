import { React, useRef } from 'react';
import classes from '../VehicleSelector/VehicleSelector.module.css';

const VehicleSelector = ({ toggle } ) => {

  const selectedRef = useRef();

  //--------------------------------------------------------------------------------------------------------------
  // function handleSelection(event) {
  //   event.preventDefault();
  //   const selected = selectedRef.current.value;
  //   setSelectedProducts(selectedProducts);

  //   if (selected === "All") {
  //     setLoadedProducts(selectedProducts);
  //   } else {
  //     setLoadedProducts(
  //       selectedProducts.filter((each) => {
  //         return each.CATEGORY === selected;
  //       })
  //     );
  //   }
  //} //end function -------------------------------------------------------------------------------------------------
 
  return (
    <div className={classes.container}>
        <h2 className={classes.search}>Vehicle Search</h2>
        <div className={classes.close}>
          <button className={classes.headerBtn} onClick={toggle}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
       
        <form className={classes.selectorMake}>
        <label className={classes.vehicleSelectorLabel} htmlFor='vehicleMake'>Make</label>
          <select name='vehicleMake' ref={selectedRef}>
          <option value='Acura'>Acura</option>
          <option value='Alfa Romeo'>Alfa Romeo</option>
          <option value='Aston Martin'>Aston Martin</option>
          <option value='Audi'>Audi</option>
          <option value='Bentley'>Bentley</option>
          <option value='BMW'>BMW</option>
          <option value='Bugatti'>Bugatti</option>
          <option value='Buick'>Buick</option>
          <option value='Cadillac'>Cadillac</option>
          <option value='Chevrolet'>Chevrolet</option>
          <option value='Chrysler'>Chrysler</option>
          <option value='Citroën'>Citroën</option>
          <option value='Dodge'>Dodge</option>
          <option value='Ferrari'>Ferrari</option>
          <option value='Fiat'>Fiat</option>
          <option value='Ford'>Ford</option>
          <option value='Genesis'>Genesis</option>
          <option value='GMC'>GMC</option>
          <option value='Honda'>Honda</option>
          <option value='Hyundai'>Hyundai</option>
          <option value='Infiniti'>Infiniti</option>
          <option value='Jaguar'>Jaguar</option>
          <option value='Jeep'>Jeep</option>
          <option value='Kia'>Kia</option>
          <option value='Lamborghini'>Lamborghini</option>
          <option value='Land Rover'>Land Rover</option>
          <option value='Lexus'>Lexus</option>
          <option value='Lincoln'>Lincoln</option>
          <option value='Maserati'>Maserati</option>
          <option value='Mazda'>Mazda</option>
          <option value='McLaren'>McLaren</option>
          <option value='Mercedes-Benz'>Mercedes-Benz</option>
          <option value='Mini'>Mini</option>
          <option value='Mitsubishi'>Mitsubishi</option>
          <option value='Nissan'>Nissan</option>
          <option value='Pagani'>Pagani</option>
          <option value='Peugeot'>Peugeot</option>
          <option value='Porsche'>Porsche</option>
          <option value='RAM'>RAM</option>
          <option value='Renault'>Renault</option>
          <option value='Rolls-Royce'>Rolls-Royce</option>
          <option value='Saab'>Saab</option>
          <option value='Subaru'>Subaru</option>
          <option value='Suzuki'>Suzuki</option>
          <option value='Tesla'>Tesla</option>
          <option value='Toyota'>Toyota</option>
          <option value='Volkswagen'>Volkswagen</option>
          <option value='Volvo'>Volvo</option>
        </select>
      </form>
      <form className={classes.selectorModel}>
        <label className={classes.vehicleSelectorLabel} htmlFor='vehicleModel'>Make</label>
        <select name='vehicleModel' ref={selectedRef}>
          <option value='CL'>CL</option>
          <option value='ILX'>ILX</option>
          <option value='Integra'>Integra</option>
          <option value='Legend'>Legend</option>
          <option value='MDX'>MDX</option>
          <option value='NSX'>NSX</option>
          <option value='RDX'>RDX</option>
          <option value='RL'>RL</option>
          <option value='RLX'>RLX</option>
          <option value='RSX'>RSX</option>
          <option value='SLX'>SLX</option>
          <option value='TL'>TL</option>
          <option value='TLX'>TLX</option>
          <option value='TSX'>TSX</option>
          <option value='Vigor'>Vigor</option>
          <option value='ZDX'>ZDX</option>
        </select>
      </form>
      <form className={classes.selectorYear}>
        <label className={classes.vehicleSelectorLabel} htmlFor='vehicleYear'>Year</label>
        <select name='vehicleYear' ref={selectedRef}>
          <option value='1960'>1960</option>
          <option value='1961'>1961</option>
          <option value='1962'>1962</option>
          <option value='1963'>1963</option>
          <option value='1964'>1964</option>
          <option value='1965'>1965</option>
          <option value='1966'>1966</option>
          <option value='1967'>1967</option>
          <option value='1968'>1968</option>
          <option value='1969'>1969</option>
          <option value='1970'>1970</option>
          <option value='1971'>1971</option>
          <option value='1972'>1972</option>
          <option value='1973'>1973</option>
          <option value='1974'>1974</option>
          <option value='1975'>1975</option>
          <option value='1976'>1976</option>
          <option value='1977'>1977</option>
          <option value='1978'>1978</option>
          <option value='1979'>1979</option>
          <option value='1980'>1980</option>
          <option value='1981'>1981</option>
          <option value='1982'>1982</option>
          <option value='1983'>1983</option>
          <option value='1984'>1984</option>
          <option value='1985'>1985</option>
          <option value='1986'>1986</option>
          <option value='1987'>1987</option>
          <option value='1988'>1988</option>
          <option value='1989'>1989</option>
          <option value='1990'>1990</option>
          <option value='1991'>1991</option>
          <option value='1992'>1992</option>
          <option value='1993'>1993</option>
          <option value='1994'>1994</option>
          <option value='1995'>1995</option>
          <option value='1996'>1996</option>
          <option value='1997'>1997</option>
          <option value='1998'>1998</option>
          <option value='1999'>1999</option>
          <option value='2000'>2000</option>
          <option value='2001'>2001</option>
          <option value='2002'>2002</option>
          <option value='2003'>2003</option>
          <option value='2004'>2004</option>
          <option value='2005'>2005</option>
          <option value='2006'>2006</option>
          <option value='2007'>2007</option>
          <option value='2008'>2008</option>
          <option value='2009'>2009</option>
          <option value='2010'>2010</option>
          <option value='2011'>2011</option>
          <option value='2012'>2012</option>
          <option value='2013'>2013</option>
          <option value='2014'>2014</option>
          <option value='2015'>2015</option>
          <option value='2016'>2016</option>
          <option value='2017'>2017</option>
          <option value='2018'>2018</option>
          <option value='2019'>2019</option>
          <option value='2020'>2020</option>
          <option value='2021'>2021</option>
          <option value='2022'>2022</option>
          <option value='2023'>2023</option>
          <option value='2024'>2024</option>
          <option value='2025'>2025</option>
        </select>
      </form>
    </div>
  )
}

export default VehicleSelector
