const db = require("../config/dbConnection");

const createEvent = async (req, res) => {
  try {
    // const date=req.body.date;
    // const duration=req.body.duration;

    console.log("req",req.body)
    const data = {
      date: req.body.date,
      duration: req.body.duration,
    };

    const result = db.collection("test").add(data);
  return  res.json({
        messge:"sucess",
        result:result
    })
    // res.send(result)
  } catch (error) {}
};

const freeSlots = async (req, res) => {
  try {
  } catch (error) {}
};

const getEvent = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = { createEvent, freeSlots, getEvent };
