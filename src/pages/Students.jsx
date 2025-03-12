import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import '../css/app.css'; // Import custom CSS

export default function Students() {
  // Sample student data
  const [students] = useState([
    { id: 1, firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
    { id: 2, firstName: 'Jacob', lastName: 'Thornton', username: '@fat' },
    { id: 3, firstName: 'Larry', lastName: 'Bird', username: '@twitter' }
  ]);

  // State for search query
  const [search, setSearch] = useState('');

  // Filter students based on search query
  const filteredStudents = students.filter(student =>
    `${student.firstName} ${student.lastName} ${student.username}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <Container className="students-container">
      <h1 className="subtitle">List of Students</h1>

      {/* Search Bar */}
      <Form.Control
        type="text"
        placeholder="Search students..."
        className="search-bar"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Student Table */}
      <Table striped bordered hover variant="dark" className="student-table">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.username}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
