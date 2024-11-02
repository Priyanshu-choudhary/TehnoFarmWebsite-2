import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from '/src/API';
import { useNavigate } from 'react-router-dom';
import NavbarTechnoFarm from '../NavBr/NavBarTechnoFarmOriginal';
import DeleteIcon from '@mui/icons-material/Delete';

const ShowPurchase = () => {
    const [purchase, setPurchase] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPurchase = async () => {
            try {
                // Retrieve the JWT token from localStorage
                const token = localStorage.getItem('token');

                // Make the request with the Authorization header
                const response = await api.get('/api/purchase', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setPurchase(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching purchase data:', error);
                setError('Failed to fetch purchase data.');
            } finally {
                setLoading(false);
            }
        };

        fetchPurchase();
    }, []);

    if (loading) {
        return <div>Loading purchase data...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    const handleDeleteById = async (id) => {
        // Show a confirmation dialog to the user
        const confirmed = window.confirm("Are you sure you want to delete this item?");
        if (!confirmed) return; // If the user cancels, exit the function
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`http://localhost:8080/api/purchase/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                },
            });

            if (response.ok) {
                // Update the state to remove the deleted item from the UI
                setItems(prevItems => prevItems.filter(item => item.id !== id));
                alert("Item deleted successfully.");
                window.location.reload();
            } else {
                alert("Failed to delete item.");

            }
        } catch (error) {
            console.error("Error deleting item:", error);
            window.location.reload();
        }
    };
    return (
        <div>
            <NavbarTechnoFarm />
            <div className="p-4">
                <div className='flex' style={{justifyContent:"space-between"}}>
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Purchase Entries</h2>
                <button className='bg-blue-400 rounded-md font-bold px-2 h-10 hover:bg-blue-600' onClick={() => { navigate(`/AddPurchase`) }} >
                    Add Purchase +
                </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead className="bg-gray-300 font-bold">
                            <tr>
                                <th className="px-6 py-3 text-left text-md text-gray-700">No.</th>
                                <th className="px-6 py-3 text-left text-md text-gray-700">Purchase Date</th>
                                <th className="px-6 py-3 text-left text-md text-gray-700">Party Name</th>
                                <th className="px-6 py-3 text-left text-md text-gray-700">Amount Paid</th>
                                <th className="px-6 py-3 text-left text-md text-gray-700">Balance</th>
                                <th className="px-6 py-3 text-left text-md text-gray-700">Total Amount</th>
                                <th className="px-6 py-3 text-left text-md text-gray-700">Paid By</th>
                                <th className="px-6 py-3 text-left text-md text-gray-700">Comment</th>
                                <th className="px-4 py-2 text-left border">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {purchase.map((item, index) => (
                                <tr
                                    key={item.id}
                                    className={`cursor-pointer ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
                                    onClick={() => navigate(`/purchase/${item.id}`)}
                                >
                                    <td className="px-6 py-4 text-sm text-gray-700">{index + 1}</td>

                                    <td className="px-6 py-4 text-sm text-gray-700">{item.date}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{item.sellerParty.name} {item.sellerParty.city}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{item.amountPaid}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{item.balance}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{item.totalAmount}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{item.paidByEmployee.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{item.comment}</td>
                                    <td className="flex pl-1 border">
                                    <button onClick={(event) => {
                                        event.stopPropagation(); // Prevents the row click from firing
                                        handleDeleteById(item.id);
                                    }}>
                                        <DeleteIcon className='text-red-500' /> Delete
                                    </button>
                                </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ShowPurchase;
