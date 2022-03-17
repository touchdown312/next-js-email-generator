import { Image, Link } from '@sproutsocial/racine';
import styled from 'styled-components';

const Table = styled.table`
  margin-bottom: 20px;
  width: 100%;
`;

export default () => {
  return (
    <Table>
      <tr>
        <td style={{ textAlign: 'left' }}>
          <Image
            src='https://d672eyudr6aq1.cloudfront.net/img/email-header-sprout-logo.1850e33571.png'
            alt='Sprout Social'
            height='27px'
          />
        </td>
        <td style={{ textAlign: 'right' }}>
          <Link href='http://www.sproutsocial.com'>Login</Link>
        </td>
      </tr>
    </Table>
  );
};
