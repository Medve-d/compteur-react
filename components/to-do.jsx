import React, { useState } from 'react';

function TodoList() {
  // Déclare une nouvelle variable d'état, que l'on va appeler "tasks"
  const [tache, setTasks] = useState([]);
  // Déclare une nouvelle variable d'état pour le contenu du champ de saisie
  const [inputValue, setInputValue] = useState('');

  // Fonction pour ajouter une tâche à la liste
  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tache, inputValue]);
      setInputValue(''); // Réinitialiser la valeur du champ de saisie après l'ajout
    }
  };

  // Fonction pour supprimer une tâche de la liste
  const deleteTask = index => {
    const updatedTasks = [...tache];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Liste de tâches</h2>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="Ajouter une nouvelle tâche"
      />
      <button onClick={addTask}>Ajouter</button>
      <ul>
        {tache.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
