import React from 'react';

const TableHeader = () => {
    return (
      <thead>
        <tr>
            <th>Nombre</th>
            <th>Dueño</th>
            <th>Eliminar</th>
        </tr>
      </thead>
    );
}

const TableBody = (props) => {
    const { petsData, removePet } = props;

    const pets = petsData.map((pet, index) => {
        return (
          <tr key={index}>
            <td>{pet.name}</td>
            <td>{pet.owner}</td>
            <td>
                <button onClick={() => removePet(index)}>Eliminar</button>
            </td>
          </tr>
        );
    });
    
    return (
        <tbody>{pets}</tbody>  
    );
}

export default function Table(props) {
    const { petsData, removePet } = props;

    return (
      <table>
        <TableHeader />
        <TableBody petsData={petsData} removePet={removePet} />
      </table>
    )
}