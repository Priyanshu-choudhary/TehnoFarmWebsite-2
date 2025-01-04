import React, { useState, useEffect } from 'react';
import {
    Autocomplete,
    Container,
    TextField,
    Button,
    Grid,
    Typography,
    Paper,
    CircularProgress,
} from '@mui/material';
import api from '/src/API'; // Adjust the path to your API instance
import NavbarTechnoFarm from '../NavBr/NavBarTechnoFarmOriginal';

const AddProduction = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [employeeNames, setEmployeeNames] = useState([]); // New state for employee names
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const [date, setDate] = useState(new Date());
    const [comment, setComment] = useState('');
    const [employee, setEmployee] = useState(''); // New state for selected employee

    useEffect(() => {
        const fetchProducts = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('No token found in localStorage');
                setLoading(false);
                return;
            }
            try {
                const response = await api.get('http://test.technofarm.in:9090/api/production/add', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: 'application/json',
                    },
                }); // Adjust API endpoint
                setProducts(response.data || []);
                
                // Assuming the API response includes an employeeNames array
                setEmployeeNames(response.data.employeeNames || []);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedProduct) {
            alert('Please select a product');
            return;
        }

        const jsonData = {
            product: {
                id: selectedProduct.id,
            },
            quantity: quantity,
            date: date.toISOString().split('T')[0], // Format the date as YYYY-MM-DD
            comment: comment,
            employee: {id: employee}, // Include selected employee in JSON data
        };


        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('No token found in localStorage');
                setLoading(false);
                return;
            }
            const response = await api.post('http://test.technofarm.in:9090/api/production', jsonData, {
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
            <NavbarTechnoFarm />
            <Container>
                <Typography variant="h4" gutterBottom align="center">Add Product Stock</Typography>
                <form onSubmit={handleSubmit}>
                    <Paper elevation={3} sx={{ padding: 3, marginBottom: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Autocomplete
                                    options={products.products}
                                    getOptionLabel={(option) =>  `${option.name || ''}  - ${option.catagory || ''}`} // Assuming products have a `name` field
                                    onChange={(event, newValue) => {
                                        setSelectedProduct(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} label="Select Product" required />}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Autocomplete
                                    options={products.employees}
                                    getOptionLabel={(option) => `${option.name}`}
                                    onChange={(event, newValue) => {
                                        setEmployee(newValue.id);
                                    }}
                                    renderInput={(params) => <TextField {...params} label="Select Employee" required />}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Quantity"
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Date"
                                    type="date"
                                    value={date.toISOString().split('T')[0]} // Format date for input
                                    onChange={(e) => setDate(new Date(e.target.value))}
                                    fullWidth
                                    required
                                />
                            </Grid>
                            
                            <Grid item xs={12}>
                                <TextField
                                    label="Comment"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    fullWidth
                                    multiline
                                    rows={2}
                                />
                            </Grid>
                        </Grid>
                        <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
                            Add Stock
                        </Button>
                    </Paper>
                </form>
            </Container>
        </div>
    );
};

export default AddProduction;
