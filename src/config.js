const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);
let key = process.argv[2] ;
const configCustom = require(basePath + '/' + key + '/config.json');
const network = NETWORK.sol;

// General metadata for Solana NFTs
// const namePrefix = "Tarns 'n Case";
const namePrefix = configCustom.namePrefix;
const description = configCustom.description;
// const description = "10000 robots exploring Exploring Solana";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: configCustom.symbol,
  seller_fee_basis_points: configCustom.seller_fee_basis_points, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: configCustom.external_url,
  creators: configCustom.creators,
  // creators: [
  //   {
  //     address: "abSzV5zXTKCbkjzN2hzrg2BPTbkYAQ7tt4jQPett2jX",
  //     share: 100,
  //   },
  // ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = configCustom.layerConfigurations;
// const layerConfigurations = [
//   {
//     growEditionSizeTo: configCustom.growEditionSizeTo,
//     // layersOrder: [
//     //   { name: "Background" },
//     //   { name: "Planets" },
//     //   { name: "Surface" },
//     //   { name: "Robots" },
//     //   { name: "Misc" },
//     // ],
//     layersOrder: configCustom.layersOrder
//   }
// ];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: configCustom.width,
  height: configCustom.height,
  smoothing: configCustom.smoothing,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 1 / 128,
};

const background = {
  generate: true,
  brightness: "50%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 100000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif
};
