import { useState } from "react";

export default function Form(props) {
    const initialState = {
        name: '',
        owner: '',
    };

    const [newPet, setNewPet] = useState(initialState);

    function submitForm(event) {
        event.preventDefault();

        props.handleSubmit(newPet);
        setNewPet(initialState);
    }

    function handleChange(event) {
        const { name, value } = event.target
      
        setNewPet({...newPet, [name]: value})
    }

    return (
        <form onSubmit={submitForm}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            value={newPet.name}
            onChange={handleChange} 
            />
          <label htmlFor="owner">Dueño</label>
          <input
            type="text"
            name="owner"
            id="owner"
            value={newPet.owner}
            onChange={handleChange}
          />
          <input type="submit" value="Agregar" />
        </form>
      );
}