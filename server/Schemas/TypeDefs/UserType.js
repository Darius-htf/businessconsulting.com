const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLList,  GraphQLString } = graphql;

const CardsDataLabelsType = new GraphQLObjectType({
  name: "CardsDataItem",
  fields: () => ({
    title: { type: GraphQLString },
    caption: { type: GraphQLString },
    icon: { type: GraphQLString },
    id: { type: GraphQLInt }
  }),
});

const CardsDataType = new GraphQLObjectType({
  name: "CardsData",
  fields: () => ({
    cardsData: { type: new GraphQLList(CardsDataLabelsType) },
  }),
});

module.exports = CardsDataType;
