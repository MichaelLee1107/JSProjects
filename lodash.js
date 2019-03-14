
const _ = require('lodash');
var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];
   
  let userIds = _.map(users, 'user');
  var rids = '12';
  var sqlText = `SELECT accessRights FROM _sys_t_rights_of_role_rtree  where rid in(${rids})`;
  console.log(userIds)

  _.filter(users, function(o) { return !o.active; });
  // => objects for ['fred']
   
  // The `_.matches` iteratee shorthand.
  _.filter(users, { 'age': 36, 'active': true });
  // => objects for ['barney']
   
  // The `_.matchesProperty` iteratee shorthand.
  _.filter(users, ['active', false]);
  // => objects for ['fred']
   
  // The `_.property` iteratee shorthand.
  console.log(_.filter(users, 'active'));
  // => objects for ['barney']