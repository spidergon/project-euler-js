exports.run = (math) => {
  const triplet = math.pythagoreanTriplet(1000);
	return triplet[0] * triplet[1] * triplet[2];
};