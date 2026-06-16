const { model } = require("mongoose");

const { PositionSchema } = require("../schemas/PositionSchema");

const PositionsModel = model("position", PositionSchema);

module.exports = { PositionsModel };
