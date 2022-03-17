import { Box, Text } from '@sproutsocial/racine';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default (props) => {
  const { message } = props;
  return (
    <Box>
      <Header />
      <Text.BodyCopy as='p'>{message}</Text.BodyCopy>
      <br />
      <Footer />
    </Box>
  );
};

export const getServerSideProps = ({ req, res, query }) => {
  const { message } = req.body.templateData;
  return {
    props: {
      message,
    },
  };
};

/**
In production mode, no javascript will be served.
 */
export const config = {
  unstable_runtimeJS: false,
};
