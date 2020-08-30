const { data } = require('./data'); 

//lists an array of ALL follower IDs in data object: ['f01', 'f02', etc]
const listFollowers = () => {
  const followers = Object.keys(data);
  return followers;
}

// console.log(listFollowers());

//lists an array of arrays. Within each array is a string followers' ID followed by an object of their info(name, age, follows)
const listFollowerData = () => {
  const followerData = Object.entries(data);
  return followerData;
}

// console.log(listFollowerData());

 
// Implement a function biggestFollower() which returns the name of the individual who follows the most people.
const biggestFollower = (data) => {
  let mostFollows = 0; 
  let mostFollowsId;
  for ([key, value] of Object.entries(data)) {
    const followsNum = value.follows.length;
    // console.log(followsNum)
    if (followsNum > mostFollows) {
      mostFollows = followsNum;
      mostFollowsId = key;   
    }
  }
  return mostFollowsId;
}

// console.log(biggestFollower(data))
// biggestFollower();

// Implement mostPopular() which returns the name of the most popular (most followed) individual.

// find the max value in an array
const max = (arr) => {
  let maxVal = 0;
  for (let i of arr) {
    if (i > maxVal) {
      maxVal = i;
    }
  }
  return maxVal;
}

const mostPopular = (data) => {

  const keys = Object.keys(data);
  // console.log(keys);
  const allFollows = keys.flatMap(k => data[k].follows);
  let count = {};
  allFollows.map(id => {
    count[id] = count[id] === undefined ? 1 : count[id] + 1
  })
  // console.log(count);
  let followedData = [];
  for ([key, value] of Object.entries(count)) {
    followedData.push({followedKey: key, followedCount: value})
  }
  // let maxVal = 0; 
  // for (let obj of followedData) {
  //   if (obj.followedCount > maxVal) {
  //     maxVal = obj.followedCount
  //   }
  // }
  const maxVal = max(followedData.map(obj => obj.followedCount))

  // console.log(max(followedData.map(obj => obj.followedCount)))
  console.log(followedData.filter(obj => obj.followedCount === maxVal).map(obj =>  data[obj.followedKey].name))
  return followedData.filter(obj => obj.followedCount === maxVal).map(obj => data[obj.followedKey].name);

}

//   let counts = {};
//   followerArr = listFollowerData();
//   console.log(followerArr);
//   followerArr.forEach(function (e) {
//     counts[e] = counts[e] === undefined ? 1 : counts[e] + 1;
//   })
//   console.log(counts);
// }
  
mostPopular(data);
  // const mostPopular = (data) = {
  //   let counts = {};
  
  //   data.forEach(function(e) {
  //     for ([key, value] of Object.entries(data))
  //       counts[e] = counts[e] === undefined ? 1 : counts[e] + 1;
  //   })
  // }

// Implement printAll() which outputs a list of everyone and for each of them, the names of who they follow and who follows them.

// Implement unrequitedFollowers() which returns a list of names for those who follow someone that doesn't follow them back.

// Implement some or all these remaining functions.

// Identify who has the most followers over 30
// Identify who follows the most people over 30
// List everyone and their reach (sum of # of followers and # of followers of followers)
// Tips

// You are encouraged to create some additional functions in order to avoid having very large functions that try to do everything. That said, be sure to name them well. All this may sound familiar - that's because it was covered recently as part of our Function Best Practices series yesterday.