import { User } from "./user";

export const USER_DATA : User[] = [{
  firstName : "bill",
  lastName: "gates",
  dob : new Date('Jan 21, 1965'),
  income : 50000,
  isWorking : true,
  company : "Microsoft",
  imageSrc : "./assets/images/bill.jpg",
  votes : 120,
  comments : [{
    stars: 4,
    body : "The great man",
    author : "test@test.com"
  },
  {
    stars: 5,
    body : "The Levi",
    author : "levi@test.com"
  }
],
  Description:'microsoft founder'
  
},{
  firstName : "steve",
  lastName: "jobs",
  dob : new Date('Aug 1, 1965'),
  income : 0,
  isWorking : false,
  company : "Apple",
  imageSrc : "./assets/images/steve.jpg",
  votes : 130,
  comments : [{
    stars: 3,
    body : "Great work",
    author : "test@test.com"
  },
  {
    stars: 6,
    body : "The Ninja",
    author : "Ninja@test.com"
  }
],
  Description:'CEO founder'
},{
  firstName : "tim b",
  lastName: "lee",
  dob : new Date('Dec 10, 1965'),
  income : 30000,
  isWorking : true,
  company : "World Wide Web",
  imageSrc : "./assets/images/tim.jpg",
  votes : 80,
  comments : [{
    stars: 5,
    body : "The wise man",
    author : "test@test.com"
  },
  {
    stars: 6,
    body : "The elijah",
    author : "elijah@test.com"
  }
],
  Description: 'WWW founder'
}]
