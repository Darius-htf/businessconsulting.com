import { gql } from "@apollo/client";

export const LOAD_CARDS = gql`
  query {
    getCardsData {
      cardsData {
        title
        caption
        icon
        id
      }
    }
  }
`;

export const LOAD_ECO_IMGS = gql`
  query {
    getEcoSection {
      ecoSection {
        id
        img
      }
    }
  }
`;
