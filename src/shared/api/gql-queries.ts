import { gql } from '@apollo/client';

export const SHIPS_DATA_QUERY = gql`
  query getData {
    vehicles {
      id
      title
      description
      icons {
        small
        large
        contour
      }
      level
      type {
        name
        title
        icons {
          default
        }
      }
      nation {
        name
        title
        icons {
          tiny
          large
        }
      }
    }

    vehicleTypes {
      name
      title
      icons {
        default
      }
    }

    nations {
      name
      title
      color
      icons {
        tiny
        small
      }
    }
  }
`;
