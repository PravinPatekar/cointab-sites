import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Button, Box } from '@mui/material'
import FormDialog from './FormDialog';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Container, Stack } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function MaterialTable() {

  const token = localStorage.getItem("token");
  const user = localStorage.getItem("userId");


  const initialValue = { fname: "", lname: "", subjects: "", number: null, userId: user }
  const [tableData, setTableData] = useState(null)
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState(initialValue)
  const navigate = useNavigate();

  const [gridApi, setGridApi] = useState(null);
  // const [gridColumnApi, setGridColumnApi] = useState(null);


  const [error, setError] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData(initialValue)
  };

  // const url = `http://localhost:8080/users`

  const columnDefs = [
    { headerName: "ID", field: "id" },
    { headerName: "First Name", field: "fname", },
    { headerName: "Last Name", field: "lname", },
    { headerName: "Subjects", field: "subjects", },
    { headerName: "Number", field: "number" },
    {
      headerName: "Actions", field: "id", cellRendererFramework: (params) => <div>
        <Button variant="outlined" color="primary" onClick={() => handleUpdate(params.data)}><EditIcon />Update</Button>
        <Button variant="outlined" color="secondary" onClick={() => handleDelete(params.value)}><DeleteIcon /> Delete</Button>
      </div>
    },

  ]



  axios.interceptors.request.use(
    config => {
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    error => {
      return Promise.reject(error)
    }
  )
  //fetching user data from server
  const getUsers = async () => {
    try {
      const comingData = await axios.get("http://localhost:8080/users");
      let data = comingData.data.data
      for(let i = 0; i < data.length; i++){
        data[i].id = data[i]._id
      }
      setTableData(data)
      console.log(data)
      
      // console.log(row)
    } catch (error) {
      return error
    }
  }

  // calling getUsers function for first time 
  useEffect(() => {
    getUsers()
  }, [])

  const onChange = (e) => {
    const { value, id } = e.target
    console.log(value, id)
    setFormData({ ...formData, [id]: value })
  }



  // setting update row data to form data and opening pop up window
  const handleUpdate = (oldData) => {
    oldData.userId = user
    setFormData(oldData)
    handleClickOpen()
  }

  //deleting a user
  const handleDelete = async (id) => {
    const confirm = window.confirm(`Are you sure, you want to delete this row : ${id}`)
    if (confirm) {
      try {
        // const confirm = window.confirm("Are you sure, you want to update this row ?")
        // confirm && fetch(url + `/${formData.id}`, {
        const url = "http://localhost:8080/users";
        const { data: res } = await axios.delete(url + `/${id}`,);
        navigate("/dashboard");
        console.log(res.message);
        getUsers()
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setError(error.response.data.message);
        }
      }
    }
  }

  const handleFormSubmit = async (e) => {
    console.log(formData)
    if (formData.id) {
      //updating a user 
      try {
        // const confirm = window.confirm("Are you sure, you want to update this row ?")
        // confirm && fetch(url + `/${formData.id}`, {
        const url = "http://localhost:8080/users";
        const { data: res } = await axios.put(url + `/${formData.id}`, formData);
        navigate("/dashboard");
        console.log(res.message);
        handleClose()
        getUsers()
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setError(error.response.data.message);
        }
      }
    } else {
      // adding new user
      try {
        const url = "http://localhost:8080/users";
        await axios.post(url, formData);
        navigate("/dashboard");
        handleClose()
        getUsers()
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setError(error.response.data.message);
        }
      }
    }
  }

  // const searchDivStyle = { backgroundColor: "#dedede", padding: 10 }
  const searchStyle = {
    width: "80%", padding: "10px 20px", borderRadius: 20, outline: 0,
    border: "2px #68bf40 solid", fontSize: "100%"
  }
  function onGridReady(params) {
    setGridApi(params.api);
    // setGridColumnApi(params.columnApi);
  }
  const onFilterTextChange = (e) => {
    gridApi.setQuickFilter(e.target.value)
  }

  const defaultColDef = {
    sortable: true,
    flex: 1, filter: true,
    floatingFilter: true
  }
  return (
    <div className="App">
      <Container maxWidth="xl">
        <h1 align="center">React-App</h1>
        <h3>CRUD Operation  in ag-Grid</h3>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={3}
        >
          <input
            type="text"
            id="filter-text-box"
            placeholder="Filter..."
            style={searchStyle}
            onInput={onFilterTextChange}
          />
          <Button variant="contained" color="primary" onClick={handleClickOpen}><PersonAddIcon/> Add student</Button>
        </Stack>
        <Box className="ag-theme-alpine" sx={{ height: "400px", width: "100%" }}>
          <AgGridReact
            rowData={tableData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            onGridReady={onGridReady}
            cacheQuickFilter={true}
            pagination={true}
            paginationPageSize={6}
          />
        </Box>
      </Container >
      <FormDialog open={open} handleClose={handleClose}
        data={formData} error={error} onChange={onChange} handleFormSubmit={handleFormSubmit} />
    </div>
  );
}

