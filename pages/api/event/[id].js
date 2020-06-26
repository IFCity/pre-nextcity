import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';
import {ObjectID} from 'mongodb';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  const {
    query: { id },
  } = req;
  let doc = {};
  doc = await req.db.collection('events').findOne({_id: new ObjectID(id)});
  res.json(doc || {});
});

export default (req, res) => handler.apply(req, res)