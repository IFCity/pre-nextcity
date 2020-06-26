import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  let doc = {};
  doc = await req.db.collection('events').find().toArray(function(err, docs) {
    res.json(docs)
  })
});

export default (req, res) => handler.apply(req, res)