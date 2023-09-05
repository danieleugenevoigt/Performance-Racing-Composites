const makesList = ({setMake, setModel}) => {
  
    
const handleMake = (e) => {
    const selectedMake = e.target.value;
    setMake(selectedMake);
    // Reset the selected model when the make changes
    console.log(selectedMake);
    setModel('');
    }

  return (
    <select onChange={handleMake}>
        <option value=''>-</option>
        <option value='Acura'>Acura</option>
        <option value='AlfaRomeo'>Alfa Romeo</option>
        <option value='AstonMartin'>Aston Martin</option>
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
        <option value='LandRover'>Land Rover</option>
        <option value='Lexus'>Lexus</option>
        <option value='Lincoln'>Lincoln</option>
        <option value='Maserati'>Maserati</option>
        <option value='Mazda'>Mazda</option>
        <option value='McLaren'>McLaren</option>
        <option value='MercedesBenz'>Mercedes-Benz</option>
        <option value='Mini'>Mini</option>
        <option value='Mitsubishi'>Mitsubishi</option>
        <option value='Nissan'>Nissan</option>
        <option value='Pagani'>Pagani</option>
        <option value='Peugeot'>Peugeot</option>
        <option value='Porsche'>Porsche</option>
        <option value='RAM'>RAM</option>
        <option value='Renault'>Renault</option>
        <option value='RollsRoyce'>Rolls-Royce</option>
        <option value='Saab'>Saab</option>
        <option value='Subaru'>Subaru</option>
        <option value='Suzuki'>Suzuki</option>
        <option value='Tesla'>Tesla</option>
        <option value='Toyota'>Toyota</option>
        <option value='Volkswagen'>Volkswagen</option>
        <option value='Volvo'>Volvo</option>
    </select>
  )
}
export default makesList;