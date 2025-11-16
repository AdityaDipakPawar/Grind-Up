import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './profile.css';

const Profile = () => {
  const [formData, setFormData] = useState({
    collegeName: '',
    city: '',
    grade: '',
    tpoName: '',
    contactNo: '',
    email: '',
    universityAffiliation: '',
    coursesOffered: '',
    numberOfStudents: '',
    highestCGPA: '',
    averageCTC: '',
    averageStudentsPlaced: '',
    placementPercentage: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      console.log('Fetching profile...');
      const token = localStorage.getItem('authToken');
      console.log('Token:', token ? 'exists' : 'missing');
      
      if (!token) {
        console.log('No token found, redirecting to login');
        navigate('/login', { replace: true });
        return;
      }

      try {
        const response = await axios.get('http://localhost:3000/api/colleges/profile/me', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          withCredentials: true
        });
        console.log('Profile fetch response:', response.status);

        if (response.data.success) {
          const { college } = response.data;
          setFormData({
            collegeName: college.collegeName || '',
            city: college.city || '',
            grade: college.grade || '',
            tpoName: college.tpoName || '',
            contactNo: college.contactNo || '',
            email: college.email || '',
            universityAffiliation: college.universityAffiliation || '',
            coursesOffered: college.coursesOffered ? college.coursesOffered.join(', ') : '',
            numberOfStudents: college.numberOfStudents || '',
            highestCGPA: college.highestCGPA || '',
            averageCTC: college.averageCTC || '',
            averageStudentsPlaced: college.averageStudentsPlaced || '',
            placementPercentage: college.placementPercentage || ''
          });
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        if (error.response?.status === 401) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        navigate('/login', { replace: true });
        return;
      }

      const dataToSend = {
        ...formData,
        coursesOffered: formData.coursesOffered.split(',').map(course => course.trim())
      };

      await axios.put('http://localhost:3000/api/colleges/profile', dataToSend, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      setIsEditing(false);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    }
  };

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  console.log('Rendering Profile component');
  
  return (
    <div className="container">
      <div className="content-wrapper">
        
        <form onSubmit={handleSubmit} className="profile-form-container">
          <div className="profile-form">
            <h2>College Profile</h2>
          
          <div className="form-group">
            <label>College Name:</label>
            <input 
              type="text" 
              name="collegeName" 
              value={formData.collegeName} 
              onChange={handleChange} 
              disabled={!isEditing}
              required
            />
          </div>
          
          <div className="form-group">
            <label>City:</label>
            <input 
              type="text" 
              name="city" 
              value={formData.city} 
              onChange={handleChange} 
              disabled={!isEditing}
            />
          </div>
          
          <div className="form-group">
            <label>Grade:</label>
            <input 
              type="text" 
              name="grade" 
              value={formData.grade} 
              onChange={handleChange} 
              disabled={!isEditing}
            />
          </div>
          
          <div className="form-group">
            <label>TPO Name:</label>
            <input 
              type="text" 
              name="tpoName" 
              value={formData.tpoName} 
              onChange={handleChange} 
              disabled={!isEditing}
            />
          </div>
          
          <div className="form-group">
            <label>Contact Number:</label>
            <input 
              type="tel" 
              name="contactNo" 
              value={formData.contactNo} 
              onChange={handleChange} 
              disabled={!isEditing}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              disabled={!isEditing}
              required
            />
          </div>
          
          <div className="form-group">
            <label>University Affiliation:</label>
            <input 
              type="text" 
              name="universityAffiliation" 
              value={formData.universityAffiliation} 
              onChange={handleChange} 
              disabled={!isEditing}
            />
          </div>
          
          <div className="form-group">
            <label>Courses Offered (comma separated):</label>
            <input 
              type="text" 
              name="coursesOffered" 
              value={formData.coursesOffered} 
              onChange={handleChange} 
              disabled={!isEditing}
              placeholder="e.g., B.Tech, MBA, MCA"
            />
          </div>
          
          <div className="form-group">
            <label>Number of Students:</label>
            <input 
              type="number" 
              name="numberOfStudents" 
              value={formData.numberOfStudents} 
              onChange={handleChange} 
              disabled={!isEditing}
              min="0"
            />
          </div>
          
          <div className="form-group">
            <label>Highest CGPA:</label>
            <input 
              type="number" 
              name="highestCGPA" 
              value={formData.highestCGPA} 
              onChange={handleChange} 
              disabled={!isEditing}
              step="0.01"
              min="0"
              max="10"
            />
          </div>
          
          <div className="form-group">
            <label>Average CTC (in LPA):</label>
            <input 
              type="number" 
              name="averageCTC" 
              value={formData.averageCTC} 
              onChange={handleChange} 
              disabled={!isEditing}
              step="0.1"
              min="0"
            />
          </div>
          
          <div className="form-group">
            <label>Average Students Placed:</label>
            <input 
              type="number" 
              name="averageStudentsPlaced" 
              value={formData.averageStudentsPlaced} 
              onChange={handleChange} 
              disabled={!isEditing}
              min="0"
            />
          </div>
          
          <div className="form-group">
            <label>Placement Percentage:</label>
            <input 
              type="number" 
              name="placementPercentage" 
              value={formData.placementPercentage} 
              onChange={handleChange} 
              disabled={!isEditing}
              step="0.01"
              min="0"
              max="100"
            />
          </div>
          
          <div className="form-actions">
            {isEditing ? (
              <>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => {
                    setIsEditing(false);
                    // Reload the form data to discard changes
                    window.location.reload();
                  }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button 
                type="button" 
                className="btn btn-edit"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            )}
          </div>
        </div> {/* Close profile-form */}
      </form>
      </div>
    </div>
  );
};

export default Profile;