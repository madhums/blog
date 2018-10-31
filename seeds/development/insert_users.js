exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { first_name: 'John', last_name: 'Doe' },
        { first_name: 'Ram', last_name: 'Kri' },
        { first_name: 'Tom', last_name: 'Jerr' }
      ]);
    });
};
