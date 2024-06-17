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

const EcoSectionDataType = new GraphQLObjectType({
  name: "ImageDataItem",
  fields: () => ({
    id: { type: GraphQLInt },
    img: { type: GraphQLString }
  })
})

const NewsResults = new GraphQLObjectType({
  name: "NewsResults",
  fields: () => ({
    article_id: { type: GraphQLInt },
    title: { type: GraphQLString },
    link: { type: GraphQLString },
    description: { type: GraphQLString },
    pubDate: { type: GraphQLString },
    image_url: { type: GraphQLString },
  })
})

const Experts = new GraphQLObjectType({
  name: "Experts",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    picture: { type: GraphQLString },
    jobTitle: { type: GraphQLString }
  })
}) 

const CardsDataType = new GraphQLObjectType({
  name: "CardsData",
  fields: () => ({
    cardsData: { type: new GraphQLList(CardsDataLabelsType) },
    ecoSection: { type: new GraphQLList(EcoSectionDataType) },
    newResults: { type: new GraphQLList(NewsResults) },
    experts: { type: new GraphQLList(Experts) }
  }),
});

module.exports = {CardsDataType , NewsResults};
