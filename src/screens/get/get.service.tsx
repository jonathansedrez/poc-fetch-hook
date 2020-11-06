import { AxiosRequestConfig } from "axios"

export type Employee = {
  id: number,
  employee_name: string,
  employee_salary: number,
  employee_age: number,
  profile_image: string
}

const Endpoints: { [key: string]: AxiosRequestConfig }= {
  findAll: {
    method: 'GET',
    baseURL: 'http://dummy.restapiexample.com/api/v1/employees'
  },
  findById: {
    method: 'GET',
    baseURL: 'http://dummy.restapiexample.com/api/v1/employee'
  }
}

export default Endpoints