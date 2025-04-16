import React, { useState, useEffect } from 'react';
import {
  Autocomplete,
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
  IconButton,
  CircularProgress,
} from '@mui/material';
import { AddCircle, RemoveCircle } from '@mui/icons-material';
import api from '/src/API'; // Adjust path to your API instance

const AddProduct = () => {
  const [loading, setLoading] = useState(true);
  const [compCategories, setCompCategories] = useState([]);
  const [components, setComponents] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    catagory: '',
    isActive: true,
    version: 1,
    comment: '',
    compDetails: [{ compId: null, compQuant: '' }],  // Initial array for components
    labourCost: 0,
  });

  useEffect(() => {
    const fetchFormData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found in localStorage');
        setLoading(false);
        return;
      }
      try {
        const response = await api.get('https://technofarm.in/api/products/add-form-data', {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
        });
        const { compCategories, components } = response.data;
        setCompCategories(compCategories || []);
        setComponents(components || []);
      } catch (error) {
        console.error('Error fetching form data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchFormData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCompDetailChange = (index, field, value) => {
    const updatedCompDetails = [...formData.compDetails];
    updatedCompDetails[index][field] = value;
    setFormData((prevData) => ({
      ...prevData,
      compDetails: updatedCompDetails,
    }));
  };

  const addComponentRow = () => {
    setFormData((prevData) => ({
      ...prevData,
      compDetails: [...prevData.compDetails, { compId: null, compQuant: '' }],
    }));
  };

  const removeComponentRow = (index) => {
    const updatedCompDetails = formData.compDetails.filter((_, i) => i !== index);
    setFormData((prevData) => ({
      ...prevData,
      compDetails: updatedCompDetails,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedData = {
      ...formData,
      compId: formData.compDetails.map((item) => item.compId),
      compQuant: formData.compDetails.map((item) => Number(item.compQuant)),
    };
    delete formattedData.compDetails; // Remove compDetails since it's already split into compId and compQuant arrays

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found in localStorage');
        return;
      }
      const response = await api.post('https://technofarm.in/api/products', formattedData, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      });
      console.log('Product added successfully:', response.data);
      alert('Product added successfully!');
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product. Please try again.');
    }
  };

  if (loading) return <CircularProgress />;

  return (
    <div>
    
      <Container>
        <Typography variant="h4" gutterBottom align="center">Add New Product</Typography>
        <form onSubmit={handleSubmit}>
          <Paper elevation={3} sx={{ padding: 3, marginBottom: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Product Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <Autocomplete
                  options={compCategories}
                  getOptionLabel={(option) => option}
                  onChange={(event, newValue) => handleInputChange({ target: { name: 'catagory', value: newValue } })}
                  renderInput={(params) => <TextField {...params} label="Category" required />}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  label="Version"
                  name="version"
                  type="number"
                  value={formData.version}
                  onChange={handleInputChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Labour Cost"
                  name="labourCost"
                  type="number"
                  value={formData.labourCost}
                  onChange={handleInputChange}
                  fullWidth
                  required
                />
              </Grid>

              {formData.compDetails.map((compDetail, index) => (
                <React.Fragment key={index}>
                  <Grid item xs={6}>
                    <Autocomplete
                      options={components}
                      getOptionLabel={(option) => `${option.name} - ${option.id}`}
                      onChange={(event, newValue) =>
                        handleCompDetailChange(index, 'compId', newValue ? newValue.id : null)
                      }
                      renderInput={(params) => (
                        <TextField {...params} label="Component" required />
                      )}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      label="Quantity"
                      type="number"
                      value={compDetail.compQuant}
                      onChange={(e) =>
                        handleCompDetailChange(index, 'compQuant', e.target.value)
                      }
                      fullWidth
                      required
                    />
                  </Grid>
                 
                  
                  <Grid item xs={1}>
                    <IconButton  sx={{height:50}} onClick={() => removeComponentRow(index)} color="error">
                      <RemoveCircle />
                    </IconButton>
                  </Grid>

                </React.Fragment>
              ))}
              <Grid item xs={3}>
                    <Button
                      variant="outlined"
                      startIcon={<AddCircle />}
                      onClick={addComponentRow}
                      color="primary"
                      sx={{height:55}}
                    >
                      
                      Add Component
                    </Button>
                  </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  fullWidth
                  multiline
                  rows={2}
                />
              </Grid>

              {/* Dynamic Component and Quantity Rows */}
              <Grid item xs={12}>
                <Typography variant="h6">Components</Typography>
              </Grid>


            </Grid>
            <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
              Add Product
            </Button>
          </Paper>
        </form>
      </Container>
    </div>
  );
};

export default AddProduct;
