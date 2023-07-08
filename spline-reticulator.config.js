export default async (context) => {
  console.log('Configuration file got context:', context);

  return {
    spline: '417G',
    algorithm: context.supportedAlgorithms[0]
  };
};
