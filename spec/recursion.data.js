var TREE_DATA = {
  "items": [
    {
      "id": "1",
      "name": "johnny"
    },
    {
      "id": "2",
      "name": "ingi",
      "children": [
        {
          "id": "3",
          "name": "johnson"
        },
        {
          "id": "4",
          "name": "katy"
        },
        {
          "id": "5",
          "name": "steve",
          "children": [
            {
              "id": "6",
              "name": "lisa"
            },
            {
              "id": "7",
              "name": "penny",
              "children": [
                {
                  "id": "8",
                  "name": "john"
                },
                {
                  "id": "9",
                  "name": "hoyong"
                }
              ]
            },
            {
              "id": "10"
            }
          ]
        },
        {
          "id": "11"
        },
        {
          "id": "12"
        }
      ]
    },
    {
      "id": "13"
    },
    {
      "id": "14"
    }
  ]
};

if(typeof window === 'undefined') {
  module.exports = TREE_DATA;
}