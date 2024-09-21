import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "antd"; 
import "./JobDetails.css";



const JobDetails = () => {
    const { id } = useParams(); 
    const FeaturedJobCards = [
        {
            id: 1,
            package: '15 - 30 LPA',
            location: 'Bangalore Urban',
            title: 'Software Development ',
            tags: ['#DSA', '#Problem solving'],
            company: 'Grow',
            views: 1251,
            logo: require("../../assets/images/grow.png"),
            buttonColor: '#FFDD87'
          },
          {
            id: 2,
            package: '5 - 12 LPA',
            location: 'Bangalore Urban',
            title: ' Data Science  Engineer',
            tags: ['#API', '#React', '#.NET'],
            company: 'Anthology',
            views: 2092,
            logo: require("../../assets/images/anthology.png"),
            buttonColor: '#87CEEB'
          },
          {
            id: 3,
            package: '5 - 10 LPA',
            location: 'Noida',
            title: 'React JS Developer',
            tags: ['#jQuery', '#React', '#Angular'],
            company: 'Technoarch Softwares',
            views: 2042,
            logo: require("../../assets/images/tecnoarch.png"),
            buttonColor: '#B2FF87'
          },
          {
            id: 4,
            package: '8 - 12 LPA',
            location: 'Pune',
            title: 'Software Engineer |',
            tags: ['#SDK', '#JSON', '#XML'],
            company: 'Technoarch Softwares',
            views: 2042,
            logo: require("../../assets/images/zebra.png"),
            buttonColor: '#B2FF87'
          },
          {
            id: 5,
            package: '6 - 10 LPA',
            location: 'Noida',
            title: 'Python Developer',
            tags: ['#python', '#sql', '#DSA'],
            company: 'Impetus Technologies',
            views: 2042,
            logo: require("../../assets/images/impetus.png"),
            buttonColor: '#B2FF87'
          },
          {
            id: 6,
            package: '4.5 - 10 LPA',
            location: 'Noida',
            title: 'Jr. Node.js Developer',
            tags: ['#html/css', '#javascript', '#mongodb'],
            company: 'Excellence Technologies',
            views: 2042,
            logo:require("../../assets/images/excellence.png"),
            buttonColor: '#B2FF87'
          },
    ]




    const job = FeaturedJobCards.find(job => job.id === parseInt(id));
    

    if (!job) return <div>Job not found</div>; // Handle case where job doesn't exist

    return (
        <div className="job-container">
         <div className="job-grid">
        <div className="job-info">

       
         
            <Card className="job-title" title={job.title} bordered={false}>
                <p className="package"><strong>Package:</strong> {job.package}</p>
                <p className="location"><strong>Location:</strong> {job.location}</p>
                <h3 className="job-title">{job.title}</h3>
                <p><strong>Company:</strong> {job.company}</p>
                <p className="tags"><strong>Tags:</strong> {job.tags.join(", ")}</p>
                <p><strong>Views:</strong> {job.views}</p>
                <img src={job.logo} alt={`${job.company} logo`} />
            </Card>
        </div>
        </div>
        </div>
    );
};

export default JobDetails;
