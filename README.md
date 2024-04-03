## i guess this tree explains the project structure more than any words:
`
.
├── index.html
├── package.json
├── package-lock.json
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── auth
│   │   │   ├── authAtoms.jsx
│   │   │   ├── firebase.js
│   │   │   ├── Login.jsx
│   │   │   ├── SetUpCurrentUser.jsx
│   │   │   ├── Signup.jsx
│   │   │   └── utils.js
│   │   ├── layout
│   │   │   └── Layout.jsx
│   │   ├── mappedPoster
│   │   │   ├── homeMovies.jsx
│   │   │   ├── mappedAtoms.jsx
│   │   │   ├── topMovies.jsx
│   │   │   └── utils.js
│   │   ├── navbar
│   │   │   ├── navBar.jsx
│   │   │   ├── NewDropDown.jsx
│   │   │   └── utils.js
│   │   ├── PaginationButtons-deprecated.jsx
│   │   ├── posterCard
│   │   │   ├── posterCardAtoms.jsx
│   │   │   ├── PosterCard.jsx
│   │   │   ├── posterCardMiniDropdown.jsx
│   │   │   ├── posterCardMoreButton.jsx
│   │   │   └── utils.js
│   │   ├── profile
│   │   │   ├── micro components
│   │   │   │   ├── Collection.jsx
│   │   │   │   ├── Comment.jsx
│   │   │   │   ├── Friend.jsx
│   │   │   │   ├── History.jsx
│   │   │   │   └── List.jsx
│   │   │   ├── profileAtoms.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── simplePosterCard.jsx
│   │   │   └── utils.js
│   │   ├── routes
│   │   │   ├── MyRoutes.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── utils.js
│   │   ├── search
│   │   │   ├── atoms.jsx
│   │   │   ├── filterBar.jsx
│   │   │   ├── FilterByGenreDropDown.jsx
│   │   │   ├── FilterByRating.jsx
│   │   │   ├── FilterByTitle.jsx
│   │   │   ├── FilterByYearDropDown.jsx
│   │   │   ├── MappedForFilter.jsx
│   │   │   ├── MovieOrTvDropDown.jsx
│   │   │   ├── Search.jsx
│   │   │   └── utils.js
│   │   ├── show
│   │   │   ├── CommentsCard.jsx
│   │   │   ├── objects.js
│   │   │   ├── ShowDetailsCard.jsx
│   │   │   ├── ShowPage.jsx
│   │   │   ├── streamCard.jsx
│   │   │   ├── stream.jsx
│   │   │   └── utils.js
│   │   └── SwipeCard-deprecated.jsx
│   ├── data
│   │   ├── apiAuthToken.js
│   │   ├── apiKey.js
│   │   ├── arabicGenresNameFirst.js
│   │   ├── englishGenresIdFirst.js
│   │   ├── englishGenresNameFirst.js
│   │   ├── showExample.js
│   │   └── tmdbService.js
│   ├── index.css
│   ├── main.jsx
│   ├── services
│   │   ├── personalApi
│   │   │   ├── auth
│   │   │   │   ├── isTokenAllowed.js
│   │   │   │   ├── login.js
│   │   │   │   ├── logout.js
│   │   │   │   └── signup.js
│   │   │   ├── collection
│   │   │   │   └── collection.js
│   │   │   ├── comment
│   │   │   │   └── comment.js
│   │   │   ├── friend
│   │   │   │   └── friend.js
│   │   │   ├── history
│   │   │   │   └── history.js
│   │   │   ├── list
│   │   │   │   └── list.js
│   │   │   ├── profile
│   │   │   │   └── user.js
│   │   │   └── urls.js
│   │   ├── tmdbApi
│   │   │   └── tmdb.js
│   │   └── torrent
│   │       ├── fetchTorent.js
│   │       ├── test.json
│   │       └── utils.js
│   └── utils
│       ├── checkAuthenticated.js
│       └── getFormData.js
├── tailwind.config.js
├── vercel.json
└── vite.config.js
`
