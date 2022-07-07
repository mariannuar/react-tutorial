import { useState } from 'react';
import Table from './Table';
import Form from './Form';

export default function App() {
    const petsInformation = [
        {
            name: 'Puppy',
            owner: 'Mariana'
        },
        {
            name: 'Kiara',
            owner: 'Damaris'
        },
        {
            name: 'Lucy',
            owner: 'Marco'
        },
        {
            name: 'Jako',
            owner: 'Jean'
        }
    ];

    const [petsData, setPetsData] = useState(petsInformation);

    function removePet(index) {
        const newPetsData = petsData.filter((pet, i) => {
            return i !== index;
        });
        setPetsData(newPetsData);
    }

    function handleSubmit(pet) {
        setPetsData([...petsData, pet]);
    }

    return (
      <div className="container">
        <Table petsData={petsData} removePet={removePet} />
        <Form handleSubmit={handleSubmit} />
      </div>
    );
}