//正则匹配
const templateReg = /^(\{\{)(\w*)(\}\})$/i;

/**
 * [JsonMockService 数据对象mock]
 * @author  johnnyjiang
 * @email       johnnyjiang813@gmail.com
 * @createTime  2017-03-29T15:55:39+0800
 */
function JsonMockService(obj) {
  let newdata = generateFromTemplate(obj);
  return newdata;
}


/**
 * [copy 深度拷贝]
 * @param      {[object]} obj                    [拷贝对象]
 * @param      {[boll]} deep                     [是否深拷贝]
 * @return     {[type]}                          [description]
 * @author  johnnyjiang
 * @email               johnnyjiang813@gmail.com
 * @createTime          2017-03-29T16:14:11+0800
 */
function copy(obj, deep) {
  //如果obj不是对象，那么直接返回值就可以了
  if (obj === null || typeof obj !== "object") {
    return obj;
  }　　　　　 //定义需要的局部变脸，根据obj的类型来调整target的类型
  var i, target = isArray(obj) ? [] : {},
    value, valueType;
  for (i in obj) {
    value = obj[i];
    if (deep && (isArray(value) || isObjet(value))) {
      target[i] = copy(value, true);
    } else {
      target[i] = value;
    }
  }
  return target;
}


/**
 * 类型判断
 * @param      {[type]} obj                      [description]
 * @return     {[type]}                          [description]
 * @author  johnnyjiang
 * @email               johnnyjiang813@gmail.com
 * @createTime          2017-04-01T10:47:16+0800
 */
function type(obj) {
  return isArray(obj) ? 'array' : (obj === null) ? 'null' : typeof obj;
}


/**
 * [isArray 是否是数组]
 * @param      {[type]}  obj                      [object]
 * @return     {Boolean}                          [返回类型]
 * @author  johnnyjiang
 * @email                johnnyjiang813@gmail.com
 * @createTime           2017-04-01T10:48:44+0800
 */
function isArray(obj) {
  return obj && obj.constructor.name.toLocaleLowerCase() === 'array';
}

/**
 * [isObjet 是否是对象]
 * @param      {[type]}  obj                      [description]
 * @return     {Boolean}                          [description]
 * @author  johnnyjiang
 * @email                johnnyjiang813@gmail.com
 * @createTime           2017-04-01T10:51:55+0800
 */
function isObjet(obj) {
  return obj && obj.constructor.name.toLocaleLowerCase() === 'object';
}


/**
 * [generateFromTemplate 生成数据]
 * @param      {[type]} template                 [模板类型]
 * @param      {[type]} name                     [模板key]
 * @return     {[type]}                          [description]
 * @author  johnnyjiang
 * @email               johnnyjiang813@gmail.com
 * @createTime          2017-04-01T10:42:40+0800
 */
function generateFromTemplate(template, name) {
  var length = 0;
  var matches = (name || '').match(/\w+\|(\d+)-(\d+)/);
  if (matches) {
    var length_min = parseInt(matches[1], 10);
    var length_max = parseInt(matches[2], 10);
    length = Math.round(Math.random() * (length_max - length_min)) + length_min;
  }

  var generated = null;
  switch (type(template)) {
    case 'array':
      generated = [];
      for (var i = 0; i < (length || template.length); i++) {
        generated[i] = generateFromTemplate( length ? template[0] : template[i]);
      }
      break;

    case 'object':
      generated = {};
      if (Object.keys(template).length > 0) {
        for (var p in template) {
          generated[p.replace(/\|(\d+-\d+|\+\d+)/, '')] = generateFromTemplate(template[p], p);
          var inc_matches = p.match(/\w+\|\+(\d+)/);
          if (inc_matches && type(template[p]) == 'number') {
            var increment = parseInt(inc_matches[1], 10);
            template[p] += increment;
          }
        }
      }
      break;

    case 'number':
      generated = (matches) ? length : template;
      break;

    case 'boolean':
      generated = (matches) ? Math.random() >= 0.5 : template;
      break;

    case 'string':
      if (template.length) {
        generated = '';
        length = length || 1;
        for (var i = 0; i < length; i++) {
          generated += template;
        }
        var keys = generated.match(/@([A-Z_0-9\(\),]+)/g) || [];
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var randomData = getRandomData(key);
          generated = generated.replace(key, randomData);
          if (type(randomData) == 'number')
            generated = Number(generated);
        }
      } else {
        generated = ""
        for (var i = 0; i < length; i++) {
          generated += String.fromCharCode(Math.floor(rand() * 255));
        }
      }
      break

    default:
      generated = template;
      break;
  }
  return generated;

}


/**
 * [getRandomData 生成随机数]
 * @param      {[type]} key                      [key]
 * @return     {[type]}                          [description]
 * @author  johnnyjiang
 * @email               johnnyjiang813@gmail.com
 * @createTime          2017-04-01T11:20:47+0800
 */
function getRandomData(key) {
  key = key.substr(1); // remove "@"

  //var params = key.match(/\(((\d+),?)+\)/g) || [];
  var params = key.match(/\(([^\)]+)\)/g) || [];

  if (!(key in STATIC_DATA)) {
    return key;
  }

  var a = STATIC_DATA[key];

  switch (type(a)) {
    case 'array':
      var index = Math.floor(a.length * Math.random());
      return a[index];

    case 'function':
      return a();
  }
}


function randomDate() {
  return new Date(Math.floor(Math.random() * new Date().valueOf()));
}



/**
 * [STATIC_DATA 基本数据]
 * @type {Object}
 */
const STATIC_DATA = {
  NUMBER: "0123456789".split(''),
  LETTER_UPPER: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''),
  LETTER_LOWER: "abcdefghijklmnopqrstuvwxyz".split(''),
  MALE_FIRST_NAME: ["James", "John", "Robert", "Michael", "William", "David",
    "Richard", "Charles", "Joseph", "Thomas", "Christopher", "Daniel",
    "Paul", "Mark", "Donald", "George", "Kenneth", "Steven", "Edward",
    "Brian", "Ronald", "Anthony", "Kevin", "Jason", "Matthew", "Gary",
    "Timothy", "Jose", "Larry", "Jeffrey", "Frank", "Scott", "Eric"
  ],
  FEMALE_FIRST_NAME: ["Mary", "Patricia", "Linda", "Barbara", "Elizabeth",
    "Jennifer", "Maria", "Susan", "Margaret", "Dorothy", "Lisa", "Nancy",
    "Karen", "Betty", "Helen", "Sandra", "Donna", "Carol", "Ruth", "Sharon",
    "Michelle", "Laura", "Sarah", "Kimberly", "Deborah", "Jessica",
    "Shirley", "Cynthia", "Angela", "Melissa", "Brenda", "Amy", "Anna"
  ],
  LAST_NAME: ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller",
    "Davis", "Garcia", "Rodriguez", "Wilson", "Martinez", "Anderson",
    "Taylor", "Thomas", "Hernandez", "Moore", "Martin", "Jackson",
    "Thompson", "White", "Lopez", "Lee", "Gonzalez", "Harris", "Clark",
    "Lewis", "Robinson", "Walker", "Perez", "Hall", "Young", "Allen"
  ],
  EMAIL: function() {
    return getRandomData('@LETTER_LOWER') + '.' + getRandomData('@LAST_NAME').toLowerCase() + '@' + getRandomData('@LAST_NAME').toLowerCase() + '.com';
  },
  DATE: function() {
    return (new Date(Math.floor(Math.random() * new Date()))).getTime();
  },
  LOREM: function() {
    var words = 'lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum'.split(' ');
    var index = Math.floor(Math.random() * words.length);
    return words[index];
  },
  LOREM_IPSUM: function() {
    var words = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'.split(' ');
    var result = [];
    var length = Math.floor(Math.random() * words.length / 2);
    for (var i = 0; i < length; i++) {
      var index = Math.floor(Math.random() * words.length);
      result.push(words[index]);
    }
    return result.join(' ');
  }
};


module.exports = JsonMockService;