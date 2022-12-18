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
import { SERVER_URI } from '../../config/keys'
import VisibilityIcon from '@mui/icons-material/Visibility';
import Poppup from './Poppup'


export default function MaterialTable() {

  const token = localStorage.getItem("token");
  const user = localStorage.getItem("userId");


  const initialValue = { userName: "", email: "", password: "", confirmPassword: "", view: null, userId: user }
  const [tableData, setTableData] = useState(null)
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState(initialValue)
  const navigate = useNavigate();

  const [gridApi, setGridApi] = useState(null);
  // const [gridColumnApi, setGridColumnApi] = useState(null);


  const [error, setError] = useState("");
  const [opens, setOpens] = React.useState(false);
  const [opendelet, setDelet] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpens(false);
    setDelet(false)
    setFormData(initialValue)
  };

  // const url = `http://localhost:8080/users`

  const columnDefs = [
    { headerName: "ID", field: "id" },
    { headerName: "User Name", field: "userName", },
    { headerName: "Email Id", field: "email", },
    {
      headerName: "Actions", field: "id", cellRendererFramework: (params) => <Box spacing={3}>
        <Button variant="text" color="primary" sx={{ml:"10px"}} onClick={() => handleUpdate(params.data)}><EditIcon /></Button>
        <Button variant="text" color="secondary" sx={{ml:"10px"}} onClick={() => handleView(params.data)}><VisibilityIcon /></Button>
        <Button variant="text" color="secondary" sx={{ml:"10px", color:"red"}} onClick={() => handleDelete(params.data)}><DeleteIcon /></Button>
      </Box>
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
      const comingData = await axios.get(`${SERVER_URI}/users`);
      let data = comingData.data.data
      for (let i = 0; i < data.length; i++) {
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

  // setting view row data to form data and opening pop up window
  const handleView = (oldData) => {
    setOpens(true)
    setFormData(oldData)
    handleClickOpen()
  }


  // setting update row data to form data and opening pop up window
  const handleUpdate = (oldData) => {
    oldData.userId = user
    setFormData(oldData)
    handleClickOpen()
  }


  // setting update row data to form data and opening pop up window
  const handleDelete = (oldData) => {
    setDelet(true)
    setFormData(oldData)
    handleClickOpen()
  }

  //deleting a user
  const handleforDelete = async (id) => {
    try {
      const url = `${SERVER_URI}/users`;
      const { data: res } = await axios.delete(url + `/${id}`,);
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
  }

  const handleFormSubmit = async (e) => {
    console.log(formData)
    if (formData.id) {
      //updating a user 
      try {
        // const confirm = window.confirm("Are you sure, you want to update this row ?")
        // confirm && fetch(url + `/${formData.id}`, {
        const url = `${SERVER_URI}/users`;
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
        const url = `${SERVER_URI}/users`;
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
      <Container maxWidth="xl" sx={{ mt: '80px' }}>
        <h3>CRUD Operation  on Users table</h3>
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
          <Button variant="contained" color="primary" onClick={handleClickOpen}><PersonAddIcon /> Add User</Button>
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
      {opendelet ? (<Poppup open={open} handleClose={handleClose} handleforDelete={handleforDelete} data={formData} />) :
        (<FormDialog open={open} handleClose={handleClose}
          data={formData} opens={opens} error={error} onChange={onChange} handleFormSubmit={handleFormSubmit} />)}
    </div>
  );
}

