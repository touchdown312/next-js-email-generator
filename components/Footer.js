import { Box, Text } from '@sproutsocial/racine';
import styled from 'styled-components';

const Table = styled.table`
  margin-top: 20px;
  width: 100%;
`;

export default () => {
  return (
    <Table>
      <tr>
        <td>
          <Text as='H3'>Connect with us</Text>
        </td>
      </tr>
      <tr>
        <td style={{ textAlign: 'left' }}>
          <Text>Sprout Social, 131 S. Dearborn St., Chicago, IL 60603</Text>
        </td>
      </tr>
    </Table>
  );
};
