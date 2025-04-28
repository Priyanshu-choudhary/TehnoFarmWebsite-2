import React, { useState, useEffect } from 'react';
import { TextField, Button, MenuItem, Container, Typography, Grid, Paper } from '@mui/material';
import api from '/src/API';
import { useParams, useNavigate } from 'react-router-dom';

const ComponentForm = () => {
    const { id } = useParams(); // Extract the id from the URL
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        value: '',
        brand: '',
        price: '',
        pack: '', 
        catagory: '',
    });
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const packageOptions = ['SMD', 'THROUGH HOLE', 'OTHER']; // Package options

    useEffect(() => {
        const fetchCategories = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('No token found in localStorage');
                return;
            }

            try {
                const response = await api.get('/api/component/categories/all', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: 'application/json',
                    },
                });
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
                setError('Failed to load categories.');
            } finally {
                setLoading(false);
            }
        };

        const fetchComponentData = async () => {
            if (id) {
                setLoading(true);
                try {
                    const token = localStorage.getItem('token');
                    const response = await api.get(`/api/component/${id}`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            Accept: 'application/json',
                        },
                    });
                    setFormData(response.data);
                } catch (error) {
                    console.error('Error fetching component data:', error);
                    setError('Failed to load component data.');
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchCategories();
        fetchComponentData();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('No token found in localStorage');
            return;
        }

        try {
            let response;
            if (id) {
                // Update existing component
                response = await api.put(`/api/component/${id}`, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: 'application/json',
                    },
                });
                console.log('Component updated successfully:', response.data);
                alert('Component updated successfully!');
            } else {
                // Create a new component
                response = await api.post('/api/component', formData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: 'application/json',
                    },
                });
                console.log('Component created successfully:', response.data);
                alert('Component created successfully!');
            }
            navigate('/ShowComponent'); // Redirect to components list or another page after submission
        } catch (error) {
            console.error('There was an error saving the component!', error);
            alert('There was an error saving the component!');
        }
    };

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <div>
          
            <Container sx={{ mt: 4 }}>
                <Paper elevation={3} sx={{ p: 3 }}>
                    <Typography variant="h4" align="center" gutterBottom>
                        {id>0 ? 'Edit Component' : 'Add Component'}
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    label="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Value"
                                    name="value"
                                    value={formData.value}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Brand"
                                    name="brand"
                                    value={formData.brand}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Price"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    fullWidth
                                    type="number"
                                    required
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Package"
                                    name="pack"
                                    value={formData.pack}
                                    onChange={handleChange}
                                    fullWidth
                                    select
                                    required
                                >
                                    {packageOptions.map((option) => (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Category"
                                    name="catagory"
                                    value={formData.catagory}
                                    onChange={handleChange}
                                    fullWidth
                                    select
                                    required
                                >
                                    {categories.map((catagory) => (
                                        <MenuItem key={catagory.id} value={catagory.name}>
                                            {catagory.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color="primary" fullWidth>
                                    {id ? 'Save' : 'Submit'}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </div>
    );
};

export default ComponentForm;
