

// src/controllers/registrations.controller.js

import { getConnection } from "../db/db.connect.js";
import { apiResponse } from "../utils/apiresponse.js";

// Create a new registration
export const createRegistration = async (req, res) => {
    const { name, email, date_of_birth } = req.body;
    const query = 'INSERT INTO Registration (name, email, date_of_birth) VALUES (?, ?, ?)';
    const connection = getConnection();
    const response = apiResponse(res);

    try {
        // Log the data being inserted
        console.log("Inserting data:", { name, email, date_of_birth });

        // Validate input data
        if (!name || !email || !date_of_birth) {
            return response.send(400, null, 'Name, email, and date_of_birth are required.');
        }

        // Execute the query
        const result = await connection.query(query, [name, email, date_of_birth]);

        // Access insertId directly from result
        return response.send(201, { id: result.insertId, name, email, date_of_birth });
    } catch (err) {
        // Enhanced error logging
        console.error('Error inserting data:', err); // Log the full error
        return response.send(500, null, `Error inserting data: ${err.message}`); // Include the error message in the response
    }
};




// Get all registrations
export const getAllRegistrations = async (req, res) => {
    const query = 'SELECT * FROM Registration';
    const connection = getConnection();
    const response = apiResponse(res);

    try {
       
        const results = await new Promise((resolve, reject) => {
            connection.query(query, (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results); 
            });
        });

        
        return response.send(200, results); 
    } catch (err) {
        console.error('Error fetching data:', err);
        return response.send(500, null, 'Error fetching data');
    }
};

// Update a registration
export const updateRegistration = async (req, res) => {
    const { id } = req.params; // Get the registration ID from the URL parameters
    const { name, email, date_of_birth } = req.body; // Get the updated data from the request body
    const query = 'UPDATE Registration SET name = ?, email = ?, date_of_birth = ? WHERE id = ?';
    const connection = getConnection();
    const response = apiResponse(res);

    try {
        // Execute the query
        const results = await new Promise((resolve, reject) => {
            connection.query(query, [name, email, date_of_birth, id], (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results); // results is now a single object
            });
        });

        // Check if any rows were affected
        if (results.affectedRows === 0) {
            return response.send(404, null, 'Registration not found'); // If no rows were affected, the ID does not exist
        }

        return response.send(200, { id, name, email, date_of_birth }); // Send back the updated registration data
    } catch (err) {
        console.error('Error updating data:', err);
        return response.send(500, null, 'Error updating data');
    }
};

// Delete a registration
// Delete a registration
export const deleteRegistration = async (req, res) => {
    const { id } = req.params; // Get the registration ID from the URL parameters
    const query = 'DELETE FROM Registration WHERE id = ?';
    const connection = getConnection();
    const response = apiResponse(res);

    try {
        const results = await new Promise((resolve, reject) => {
            connection.query(query, [id], (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results); // results is a single object, not an array
            });
        });

        // Check if any rows were affected
        if (results.affectedRows === 0) {
            return response.send(404, null, 'Registration not found'); // If no rows were affected, the ID does not exist
        }
        
        return response.send(204); // No content to send back, just indicate success
    } catch (err) {
        console.error('Error deleting data:', err);
        return response.send(500, null, 'Error deleting data');
    }
};