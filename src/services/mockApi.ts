// const dt = [
//     {
//       id: 1,
//       authorInfo: {
//         id: 1,
//         name: "John Doe",
//         avatar: "https://example.com/avatar1.jpg",
//       },
//       title: "Exploring the City",
//       content: "I had an amazing day exploring the city and discovering new places.",
//       comments: [
//         {
//           id: 1,
//           content: "That sounds exciting! Where did you go?",
//           userInfo: {
//             id: 2,
//             name: "Lisa",
//             avatar: "https://example.com/avatar2.jpg",
//           },
//         },
//         {
//           id: 2,
//           content: "I love discovering new spots in the city too!",
//           userInfo: {
//             id: 3,
//             name: "Tom",
//             avatar: "https://example.com/avatar3.jpg",
//           },
//         },
//       ],
//     },
//     {
//       id: 2,
//       authorInfo: {
//         id: 2,
//         name: "Jane Smith",
//         avatar: "https://example.com/avatar2.jpg",
//       },
//       title: "The Joy of Cooking",
//       content: "Cooking is such a relaxing activity. Today, I made a delicious pasta dish!",
//       comments: [
//         {
//           id: 1,
//           content: "That sounds yummy! Can you share the recipe?",
//           userInfo: {
//             id: 4,
//             name: "Emily",
//             avatar: "https://example.com/avatar4.jpg",
//           },
//         },
//         {
//           id: 2,
//           content: "I love cooking pasta! Any special ingredients?",
//           userInfo: {
//             id: 5,
//             name: "Michael",
//             avatar: "https://example.com/avatar5.jpg",
//           },
//         },
//       ],
//     },
//     {
//       id: 3,
//       authorInfo: {
//         id: 3,
//         name: "Michael Green",
//         avatar: "https://example.com/avatar3.jpg",
//       },
//       title: "Weekend Hike",
//       content: "The hike to the mountains was breathtaking! Nature is so beautiful.",
//       comments: [
//         {
//           id: 1,
//           content: "I love hiking too! Which trail did you take?",
//           userInfo: {
//             id: 6,
//             name: "Sophia",
//             avatar: "https://example.com/avatar6.jpg",
//           },
//         },
//         {
//           id: 2,
//           content: "Sounds like a great adventure!",
//           userInfo: {
//             id: 7,
//             name: "David",
//             avatar: "https://example.com/avatar7.jpg",
//           },
//         },
//       ],
//     },
//     {
//       id: 4,
//       authorInfo: {
//         id: 4,
//         name: "Emily Brown",
//         avatar: "https://example.com/avatar4.jpg",
//       },
//       title: "My Art Journey",
//       content: "I've started painting again, and it feels so liberating!",
//       comments: [
//         {
//           id: 1,
//           content: "Your artwork is so inspiring!",
//           userInfo: {
//             id: 8,
//             name: "John",
//             avatar: "https://example.com/avatar8.jpg",
//           },
//         },
//         {
//           id: 2,
//           content: "I would love to see more of your paintings!",
//           userInfo: {
//             id: 9,
//             name: "Sara",
//             avatar: "https://example.com/avatar9.jpg",
//           },
//         },
//       ],
//     },
//     {
//       id: 5,
//       authorInfo: {
//         id: 5,
//         name: "David Wilson",
//         avatar: "https://example.com/avatar5.jpg",
//       },
//       title: "Morning Routine",
//       content: "Started my day with a fresh cup of coffee and some meditation. Feeling great!",
//       comments: [
//         {
//           id: 1,
//           content: "I also love starting my day with coffee!",
//           userInfo: {
//             id: 10,
//             name: "James",
//             avatar: "https://example.com/avatar10.jpg",
//           },
//         },
//         {
//           id: 2,
//           content: "Meditation is the best way to start the day!",
//           userInfo: {
//             id: 11,
//             name: "Mia",
//             avatar: "https://example.com/avatar11.jpg",
//           },
//         },
//       ],
//     },
//     {
//       id: 6,
//       authorInfo: {
//         id: 6,
//         name: "Lisa White",
//         avatar: "https://example.com/avatar6.jpg",
//       },
//       title: "Photography Adventures",
//       content: "Captured some amazing shots today while wandering around the park.",
//       comments: [
//         {
//           id: 1,
//           content: "Can't wait to see the photos!",
//           userInfo: {
//             id: 12,
//             name: "Nina",
//             avatar: "https://example.com/avatar12.jpg",
//           },
//         },
//         {
//           id: 2,
//           content: "Photography is such a great hobby!",
//           userInfo: {
//             id: 13,
//             name: "Max",
//             avatar: "https://example.com/avatar13.jpg",
//           },
//         },
//       ],
//     },
//   ];

const mockData = [
  {
    id: 1,
    authorInfo: {
      id: 1,
      name: "John Doe",
      avatar:
        "https://icons.veryicon.com/png/o/miscellaneous/rookie-official-icon-gallery/225-default-avatar.png",
    },
    title: "Why do we use it?",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    comments: [
      {
        id: 1,
        content: "comment1",
        userInfo: {
          id: 2,
          name: "Lisa",
          avatar:
            "https://icons.veryicon.com/png/o/miscellaneous/rookie-official-icon-gallery/225-default-avatar.png",
        },
      },
      {
        id: 2,
        content: "comment2.2",
        userInfo: {
          id: 2,
          name: "Lisa",
          avatar:
            "https://icons.veryicon.com/png/o/miscellaneous/rookie-official-icon-gallery/225-default-avatar.png",
        },
      },
    ],
    status: "OPEN",
  },
  {
    id: 2,
    authorInfo: {
      id: 3,
      name: "Alex Lunk",
      avatar:
        "https://icons.veryicon.com/png/o/miscellaneous/rookie-official-icon-gallery/225-default-avatar.png",
    },
    title: "What is Lorem Ipsum?",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    comments: [
      {
        id: 2,
        content: "comment2",
        userInfo: {
          id: 1,
          name: "John Doe",
          avatar:
            "https://icons.veryicon.com/png/o/miscellaneous/rookie-official-icon-gallery/225-default-avatar.png",
        },
      },
    ],
    status: "REJECTED",
  },
  {
    id: 3,
    authorInfo: {
      id: 3,
      name: "Alex Lunk",
      avatar:
        "https://icons.veryicon.com/png/o/miscellaneous/rookie-official-icon-gallery/225-default-avatar.png",
    },
    title: "What is Lorem Ipsum?",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    comments: [
      {
        id: 2,
        content: "comment2",
        userInfo: {
          id: 1,
          name: "John Doe",
          avatar:
            "https://icons.veryicon.com/png/o/miscellaneous/rookie-official-icon-gallery/225-default-avatar.png",
        },
      },
    ],
    status: "APPROVED",
  },
];

export { mockData };

