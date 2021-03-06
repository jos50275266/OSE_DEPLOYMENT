import React, { Fragment, useState } from 'react';
import FooterSection from '../components/Homepage/FooterSection';
import Navbar from '../components/Homepage/Navbar';
import Sidebar from '../components/Homepage/Sidebar';
import ScrollToTop from '../components/ScrollToTop';
import SingleTopicPage from '../components/TopicPage/ReadTopicPage';


const SingleTopic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <SingleTopicPage />
      <FooterSection />
    </Fragment>
  );
};

export default SingleTopic;
