var mongoose = require('mongoose')
	, Mongo = mongoose.mongo;
var uri = 'mongodb://admin:hihihi@kharismacluster-shard-00-00-vocgi.mongodb.net:27017, kharismacluster-shard-00-01-vocgi.mongodb.net:27017, kharismacluster-shard-00-02-vocgi.mongodb.net:27017/Classes?ssl=true&replicaSet=KharismaCluster-shard-0&authSource=admin';
var connection = mongoose.createConnection(
    uri);

//Define a schema
var Schema = mongoose.Schema;

var schemaClass = new Schema({
    Name: String,
    Primary: String,
    Secondary: String
});

var classes = connection.model('Classes', schemaClass);

connection.on('open', function() {
	let barbarian = new classes({
		Name: 'Barbarian',
		Primary: 'Str',
		Secondary: 'Con'
	});
	barbarian.save((err, data) => {
		if (err) return console.error(err);
		console.log("Barbarian Added");
	});
	let bard = new classes({
		Name: 'Bard',
		Primary: 'Cha',
		Secondary: 'Dex'
	});
	bard.save((err, data) => {
		if (err) return console.error(err);
		console.log("Bard Added");
	});
	let cleric = new classes({
		Name: 'Cleric',
		Primary: 'Wis',
		Secondary: 'Str'
	});
	cleric.save((err, data) => {
		if (err) return console.error(err);
		console.log("Cleric Added");
	});
	let druid = new classes({
		Name: 'Druid',
		Primary: 'Wis',
		Secondary: 'Con'
	});
	druid.save((err, data) => {
		if (err) return console.error(err);
		console.log("Druid Added");
	});
	let fighter = new classes({
		Name: 'Fighter',
		Primary: 'Str',
		Secondary: 'Dex'
	});
	fighter.save((err, data) => {
		if (err) return console.error(err);
		console.log("Fighter Added");
	});
	let monk = new classes({
		Name: 'Monk',
		Primary: 'Dex',
		Secondary: 'Wis'
	});
	monk.save((err, data) => {
		if (err) return console.error(err);
		console.log("Monk Added");
	});
	let paladin = new classes({
		Name: 'Paladin',
		Primary: 'Str',
		Secondary: 'Cha'
	});
	paladin.save((err, data) => {
		if (err) return console.error(err);
		console.log("Paladin Added");
	});
	let ranger = new classes({
		Name: 'Ranger',
		Primary: 'Dex',
		Secondary: 'Wis'
	});
	ranger.save((err, data) => {
		if (err) return console.error(err);
		console.log("Ranger Added");
	});
	let rogue = new classes({
		Name: 'Rogue',
		Primary: 'Dex',
		Secondary: 'Int'
	});
	rogue.save((err, data) => {
		if (err) return console.error(err);
		console.log("Rogue Added");
	});
	let sorcerer = new classes({
		Name: 'Sorcerer',
		Primary: 'Cha',
		Secondary: 'Con'
	});
	sorcerer.save((err, data) => {
		if (err) return console.error(err);
		console.log("Sorcerer Added");
	});
	let warlock = new classes({
		Name: 'Warlock',
		Primary: 'Cha',
		Secondary: 'Con'
	});
	warlock.save((err, data) => {
		if (err) return console.error(err);
		console.log("Warlock Added");
	});
	let wizard = new classes({
		Name: 'Wizard',
		Primary: 'Int',
		Secondary: 'Con'
	});
	wizard.save((err, data) => {
		if (err) return console.error(err);
		console.log("Wizard Added");
	});
});