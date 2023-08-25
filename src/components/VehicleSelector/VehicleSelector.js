import { React, useState } from 'react';
import classes from '../VehicleSelector/VehicleSelector.module.css';

const VehicleSelector = () => {

  const [showVehicleSelector, setShowVehicleSelector] = useState(true);

  const toggleSelector = () => {
    setShowVehicleSelector(!showVehicleSelector);
  }

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h2 className={classes.search}>Vehicle Search</h2>
        <div className={classes.close}>
          {showVehicleSelector &&
            <span className="material-symbols-outlined" onClick={toggleSelector}>close</span>
          }
        </div>
      </div>
    </div>
  )
}

export default VehicleSelector
