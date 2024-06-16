const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;

// Data
const cardsData = require("../Data/services.json");
const ecoSection = require("../Data/services.json");
const experts = require("../Data/services.json");

// Data type
const { CardsDataType, NewsResults } = require("./TypeDefs/UserType");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getCardsData: {
      type: new GraphQLList(CardsDataType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return cardsData;
      },
    },
    getEcoSection: {
      type: new GraphQLList(CardsDataType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return ecoSection;
      },
    },
    getNews: {
      type: new GraphQLList(NewsResults),
      args: { id: { type: GraphQLInt } },
      resolve: async (parent, args) => {
        const APIKey = "pub_45469feb2109afa8d167f127dfda431a22fea";
        const apiUrl = `https://newsdata.io/api/1/latest?apikey=${APIKey}&language=en&q=business`;

        try {
          const res = await fetch(apiUrl);
          const data = await res.json();

          if (!data.results) {
            throw new alert("No results found");
          }

          return data.results;
        } catch (error) {
          console.error(error);
          return [];
        }
      },
    },
    getExperts: {
      type: new GraphQLList(CardsDataType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return experts;
      },
    },
  },
});

// const Mutation = new GraphQLObjectType({
//   name: "Mutation",
//   fields: {
//     createUser: {
//       type: UserType,
//       args: {
//         firstName: { type: GraphQLString },
//         lastName: { type: GraphQLString },
//         email: { type: GraphQLString },
//         password: { type: GraphQLString },
//       },
//       resolve(parent, args) {
//         userData.push({
//           id: userData.length + 1,
//           firstName: args.firstName,
//           lastName: args.lastName,
//           email: args.email,
//           password: args.password,
//         });
//         return args;
//       },
//     },
//   },
// });

module.exports = new GraphQLSchema({ query: RootQuery });
