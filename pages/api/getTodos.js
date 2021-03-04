const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

const table = base(process.env.AIRTABLE_TABLE_NAME);

table.select({}).eachPage(
  function page(records, fetchNextPage) {
    records.forEach((record) => {
      console.log('Retrieved', record.get('description'));
    });

    fetchNextPage();
  },
  function done(err) {
    if (err) {
      console.error(err);
      return;
    }
  }
);

export default (req, res) => {
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};
