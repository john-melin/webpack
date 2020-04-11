require('avif.js').register('/avif-sw.js');

interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
}

const newUser: User = {
  id: 123,
  username: 'jpreecedev',
  firstName: 'Jon',
  lastName: 'Preece',
};

newUser.id = 1;
