import { Box, ThemeProvider } from '@sproutsocial/racine';

export default ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Box width='100%' m='auto' maxWidth='800px' color='black'>
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
};
