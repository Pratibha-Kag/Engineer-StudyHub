import React from "react";
import { useParams } from "react-router-dom";


const JobDetails =() => {
    const { id } = useParams();

     const jobs = [
    {
      id: 1,
      package: '15 - 30 LPA',
      location: 'Bangalore Urban',
      title: 'Software Development Engineer - II',
      tags: ['#DSA', '#Problem solving'],
      company: 'Groww',
      views: 1251,
      logo: require("../../assets/images/grow.png"),
      buttonColor: '#FFDD87',
      description: 'Full job description goes here.',
    },
   
  ];

  const job = jobs.find((job) => job.id === parseInt(id)); 

  if (!job) {
    return <div>Job not found</div>;
  }
  return (
    <div className="job-details">
      <h1>{job.title}</h1>
      <p>{job.package}</p>
      <p>{job.location}</p>
      <div className="tags">
        {job.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <p>{job.description}</p>
      <img src={job.logo} alt={job.company} />
    </div>
  );
}
export default JobDetails