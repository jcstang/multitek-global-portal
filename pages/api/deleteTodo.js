import { table, getMinifiedRecord } from './utils/Airtable';

export default async (req, res) => {
  const { id } = req.body;
  try {
    const deletedRecords = await table.destroy([id]);
    res.statusCode = 200;
    res.json({
      id: deletedRecords[0].id,
      msg: 'delete was successful',
    });
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.json({ msg: 'something went wrong, yo' });
  }
};
