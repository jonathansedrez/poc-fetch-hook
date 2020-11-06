import React from 'react';

import Loader from '../../components/loader';
import Modal from '../../components/modal';
import { useFetch } from '../../hooks/fetch/useFetch';
import Endpoints, { Employee } from './get.service'
import '../../App';

const Get = () => {
  const findAll = useFetch<Employee[]>(Endpoints.findAll)
  const findById = useFetch<Employee>(Endpoints.findById)

  return (
    <div className="App">
      <button onClick={() => findAll.fetch()}>
        Fetch
      </button>
      <Loader isVisible={findAll.isLoading || findById.isLoading}/>
      
      {findById.response && <h2>{findById.response.employee_name}</h2>}
      <ul>
        {findAll.response?.map(employee => {
          return (
            <li key={employee.id} onClick={() => findById.fetch(employee.id.toString())}>
            {employee.employee_name}
            </li>
          )
        })}
      </ul>

      <Modal isVisible={findAll.error.isOpen} onDismiss={findAll.cleanUpError}/>
      <Modal isVisible={findById.error.isOpen} onDismiss={findById.cleanUpError}/>
    </div>
  );
}

export default Get;