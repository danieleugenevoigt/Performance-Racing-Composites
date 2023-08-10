import React from 'react'
import classes from './PromoCard.module.css';

const PromoCard = () => {
  const title = 'New Cardholders';
  const offer = 'Get 15% back up to $150';
  return (
    <div className={ classes.promoContainer }>
      <h1>{ title }</h1>
      <p>{ offer}</p>
    </div>
  )
}

export default PromoCard
