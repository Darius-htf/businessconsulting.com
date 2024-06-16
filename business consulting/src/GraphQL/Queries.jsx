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

export const GET_NEWS = gql`
  query {
    getNews {
      link
      title
      image_url
      pubDate
      description
    }
  }
`;

export const GET_EXPERTS = gql`
  query {
    getExperts {
      experts {
        id
        picture
        name
      }
    }
  }
`;
