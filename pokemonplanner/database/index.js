const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/pokemon')

const pokemonSchema = new Schema({
  userId: String,
  onMyTeam: Boolean,
  inMyLibrary: Boolean,
  pokemon: String,
  number: Number,
  name: String,
  pic: String,
  type: Array,
  level: Number,
  doubleDamageTo: Array,
  doubleDamageFrom: Array,
  evolvesFrom: String,
  evolvesTo: String,
})

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports.Pokemon = Pokemon;