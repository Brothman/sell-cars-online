import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About Page'} />
    <Header title="About Page">Redhook Coach Works</Header>
    <Container center={center}>
      <h3>
        If you would like to purchase a vehicle or learn more, please contact us at: RedhookCoachWorks@gmail.com
      </h3>
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
