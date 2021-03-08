const session = require("express-session");
const MongoStore = require("connect-mongo").default;
const passport = require("passport");

module.exports = (app, express, clientPromise) => {
  // req.body
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Session store
  app.use(
    session({
      store: MongoStore.create({
        clientPromise,
        mongoOptions: {
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: false,
          useUnifiedTopology: true,
        },
      }),
      secret: process.env.COOKIESECRET,
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 24 * 60 * 60 * 1000 },
    }),
  );

  // Passport/Authentication
  app.use(passport.initialize());
  app.use(passport.session());
};
