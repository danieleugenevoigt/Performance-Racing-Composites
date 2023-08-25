import { React } from 'react';
import classes from '../VehicleSelector/VehicleSelector.module.css';

const VehicleSelector = ({ toggle } ) => {
 
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h2 className={classes.search}>Vehicle Search</h2>
        <div className={classes.close}>
          <button className={classes.headerBtn} onClick={toggle}>
            <span className="material-symbols-outlined">close</span>
          </button>
          
        </div>
      </div>
    </div>
  )
}

export default VehicleSelector
