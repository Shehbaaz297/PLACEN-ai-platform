import React, { useEffect, useRef, useState } from 'react';
import { studentProfile } from '../utils/mockData';
import { parseResume } from '../utils/resumeParser';

const sectionStyle = {
  background: 'var(--card-bg, #fff)',
  borderRadius: '12px',
  padding: '16px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
};

const labelStyle = {
  fontSize: '13px',
  color: 'var(--text-muted, #6b7280)',
  marginBottom: '4px'
};

const valueStyle = {
  fontSize: '15px',
  fontWeight: 600,
  margin: 0
};

const chipStyle = {
  padding: '6px 10px',
  borderRadius: '999px',
  background: 'var(--chip-bg, rgba(59,130,246,0.12))',
  color: 'var(--accent, #3b82f6)',
  fontSize: '12px',
  fontWeight: 600
};

function StudentProfile() {
  const fileInputRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [parsedData, setParsedData] = useState(null);

  useEffect(() => {
    try {
      const storedFile = localStorage.getItem('placen_resume_file');
      const storedParsed = localStorage.getItem('placen_resume_parsed');

      if (storedFile) {
        setUploadedFile(JSON.parse(storedFile));
      }

      if (storedParsed) {
        setParsedData(JSON.parse(storedParsed));
      }
    } catch (error) {
      console.error('Failed to load resume data:', error);
    }
  }, []);

  const formatBytes = (bytes) => {
    if (!bytes && bytes !== 0) return '';
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), sizes.length - 1);
    const value = (bytes / Math.pow(1024, i)).toFixed(1);
    return `${value} ${sizes[i]}`;
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
    if (!isPdf) {
      alert('Please upload a PDF file only.');
      event.target.value = '';
      return;
    }

    const fileInfo = {
      name: file.name,
      size: file.size,
      type: file.type
    };

    setUploadedFile(fileInfo);

    const parsed = parseResume(file);
    setParsedData(parsed);

    localStorage.setItem('placen_resume_file', JSON.stringify(fileInfo));
    localStorage.setItem('placen_resume_parsed', JSON.stringify(parsed));
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <h2 style={{ margin: 0 }}>Student Profile</h2>
      <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
        Manage your academic and personal details
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
          marginTop: '24px'
        }}
      >
        <div style={sectionStyle}>
          <h3 style={{ marginTop: 0 }}>Personal Information</h3>
          <div style={{ display: 'grid', gap: '12px' }}>
            <div>
              <p style={labelStyle}>Name</p>
              <p style={valueStyle}>{studentProfile.name}</p>
            </div>
            <div>
              <p style={labelStyle}>Email</p>
              <p style={valueStyle}>{studentProfile.email}</p>
            </div>
            <div>
              <p style={labelStyle}>College</p>
              <p style={valueStyle}>{studentProfile.college}</p>
            </div>
            <div>
              <p style={labelStyle}>Branch</p>
              <p style={valueStyle}>{studentProfile.branch}</p>
            </div>
          </div>
        </div>

        <div style={sectionStyle}>
          <h3 style={{ marginTop: 0 }}>Academic Details</h3>
          <div style={{ display: 'grid', gap: '12px' }}>
            <div>
              <p style={labelStyle}>CGPA</p>
              <p style={valueStyle}>{studentProfile.cgpa}</p>
            </div>
          </div>
        </div>

        <div style={sectionStyle}>
          <h3 style={{ marginTop: 0 }}>Skills</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {studentProfile.skills.map((skill) => (
              <span key={skill} style={chipStyle}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div style={sectionStyle}>
          <h3 style={{ marginTop: 0 }}>Resume</h3>
          <p style={{ color: 'var(--text-muted)', marginTop: 0 }}>
            Upload your latest resume for recruiters.
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept="application/pdf"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <button
            type="button"
            onClick={handleUploadClick}
            disabled={Boolean(uploadedFile)}
            style={{
              marginTop: '8px',
              padding: '10px 14px',
              borderRadius: '8px',
              border: '1px solid rgba(0,0,0,0.08)',
              background: uploadedFile ? 'rgba(34,197,94,0.9)' : 'var(--accent, #3b82f6)',
              color: '#fff',
              fontWeight: 600,
              cursor: uploadedFile ? 'not-allowed' : 'pointer',
              opacity: uploadedFile ? 0.9 : 1
            }}
          >
            {uploadedFile ? 'Uploaded' : 'Upload Resume'}
          </button>
          {uploadedFile ? (
            <div style={{ marginTop: '12px' }}>
              <p style={{ margin: 0, fontSize: '13px' }}>
                <strong>File:</strong> {uploadedFile.name}
              </p>
              <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: 'var(--text-muted)' }}>
                Size: {formatBytes(uploadedFile.size)}
              </p>
            </div>
          ) : null}
        </div>

        {parsedData ? (
          <div style={sectionStyle}>
            <h3 style={{ marginTop: 0 }}>Parsed Resume Insights</h3>
            <div style={{ display: 'grid', gap: '12px' }}>
              <div>
                <p style={labelStyle}>Parsed Skills</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {parsedData.skills.map((skill) => (
                    <span key={skill} style={chipStyle}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p style={labelStyle}>Education</p>
                <p style={valueStyle}>{parsedData.education}</p>
              </div>
              <div>
                <p style={labelStyle}>Experience</p>
                <p style={valueStyle}>{parsedData.experience}</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default StudentProfile;
