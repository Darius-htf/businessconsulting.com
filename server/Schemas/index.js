const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;

// News API:
let newsData = null;
const APIKey = "pub_45469feb2109afa8d167f127dfda431a22fea";
const getTheNewsData = async () => {
  try {
    const response = await fetch(
      `https://newsdata.io/api/1/latest?apikey=${APIKey}&language=en`
    );

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }

    const data = await response.json();
    newsData = data.results;
    console.log(newsData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
getTheNewsData();

const cardsData = require("../Data/services.json");
const ecoSection = require("../Data/services.json");
const CardsDataType = require("./TypeDefs/UserType");

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
    getNewsResults: {
      type: new GraphQLList(CardsDataType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return newsData;
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
