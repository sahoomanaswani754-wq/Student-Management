import React, { useState } from "react";

export default function StudentForm() {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    course: ""
  });

  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.rollNo || !formData.course) {
      alert("Please fill all fields");
      return;
    }

    setStudents([...students, { ...formData, id: Date.now() }]);
    setFormData({ name: "", rollNo: "", course: "" });
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  return (
    <div style={styles.container}>
      <style>{`
        @media (max-width: 600px) {
          .input-row { flex-direction: column !important; }
          .input-row input { min-width: 100% !important; }
        }
      `}</style>

      <div style={styles.card}>
        <h2 style={styles.heading}>Add Student</h2>
        
        <form onSubmit={handleSubmit}>
          <div style={styles.row} className="input-row">
            <input
              type="text"
              name="name"
              placeholder="Student Name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="number"
              name="rollNo"
              placeholder="Roll No"
              value={formData.rollNo}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="text"
              name="course"
              placeholder="Course"
              value={formData.course}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.button}>
            Add Student
          </button>
        </form>
      </div>

      {students.length > 0 && (
        <div style={styles.recordBox}>
          <h3 style={styles.subHeading}>Student Record</h3>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>#</th>
                <th style={styles.th}>Student Name</th>
                <th style={styles.th}>Roll No</th>
                <th style={styles.th}>Course</th>
                <th style={styles.th}>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={student.id}>
                  <td style={styles.td}>{index + 1}</td>
                  <td style={styles.td}>{student.name}</td>
                  <td style={styles.td}>{student.rollNo}</td>
                  <td style={styles.td}>{student.course}</td>
                  <td style={styles.td}>
                    <button 
                      onClick={() => deleteStudent(student.id)}
                      style={styles.deleteBtn}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "700px",
    margin: "40px auto",
    fontFamily: "Arial, sans-serif",
    padding: "0 15px"
  },
  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    marginBottom: "30px"
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333"
  },
  row: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px"
  },
  input: {
    flex: 1,
    minWidth: "150px",
    padding: "10px 12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    outline: "none",
    fontSize: "14px"
  },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(to right, #ff416c, #ff4b2b, #f9d423, #24c6dc, #514a9d)",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer"
  },
  recordBox: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    overflowX: "auto"
  },
  subHeading: {
    marginBottom: "15px",
    fontSize: "20px",
    color: "#333"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "500px"
  },
  th: {
    borderBottom: "2px solid #ddd",
    padding: "10px",
    textAlign: "left",
    background: "#f5f5f5",
    color: "#333"
  },
  td: {
    borderBottom: "1px solid #eee",
    padding: "10px",
    color: "#555"
  },
  deleteBtn: {
    padding: "6px 12px",
    background: "#ff4b4b",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "13px"
  }
};