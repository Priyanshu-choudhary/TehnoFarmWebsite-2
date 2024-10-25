import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from '/src/API';

const ShowSales = () => {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        // Retrieve the JWT token from localStorage
        const token = localStorage.getItem('token');

        // Make the request with the Authorization header
        const response = await api.get('/api/sales', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
            
        setSales(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching sales data:', error);
        setError('Failed to fetch sales data.');
      } finally {
        setLoading(false);
      }
    };

    fetchSales();
  }, []);

  if (loading) {
    return <div>Loading sales data...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
<div className="">
  <h2 className="text-3xl font-semibold text-gray-800 mb-4">Sales List</h2>
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-300">
      <thead className="bg-gray-300 font-bold">
        <tr>
          <th className="px-6 py-3 text-left text-md text-gray-700">No.</th>
          <th className="px-6 py-3 text-left text-md text-gray-700">Party</th>
          <th className="px-6 py-3 text-left text-md text-gray-700">Business Name</th>
          <th className="px-6 py-3 text-left text-md text-gray-700">Mobile</th>
          <th className="px-6 py-3 text-left text-md text-gray-700">City</th>
          <th className="px-6 py-3 text-left text-md text-gray-700">Balance</th>
        </tr>
      </thead>
      <tbody>
        {sales.map((sale, index) => (
          <tr
            key={sale.id}
            className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
          >
            <td className="px-6 py-4 text-sm text-gray-700">{index + 1}</td> {/* Sequence Number */}
            <td className="px-6 py-4 text-sm text-gray-700">{sale.name}</td>
            <td className="px-6 py-4 text-sm text-gray-700">{sale.businessName}</td>
            <td className="px-6 py-4 text-sm text-gray-700">{sale.mobile}</td>
            <td className="px-6 py-4 text-sm text-gray-700">{sale.city}</td>
            <td className="px-6 py-4 text-sm text-gray-700">{sale.balance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


  );
};

export default ShowSales;
