module.exports = ({ pythagoreanTriplet }) => {
  const triplet = pythagoreanTriplet(1000)
  return triplet[0] * triplet[1] * triplet[2]
}
