const dotenv = require("dotenv").config();
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const UserModel = require("./users_model");
const config = require("../../../config")[process.env.NODE_ENV];
const userController = require("./users_controller");

passport.use(
  "user",
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.SECRET_TOKEN,
    },
    async (payload, done) => {
      try {
        const user = await UserModel.findOne({
          _id: payload.id,
          role: "USER",
        });
        if (!user) {
          return done(null, false);
        }
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

const authUser = passport.authenticate("user", {
  session: false,
});

passport.use(
  "admin",
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.SECRET_TOKEN,
    },
    async (payload, done) => {
      try {
        const user = await UserModel.findOne({
          _id: payload.id,
          role: "ADMIN",
        });
        if (!user) {
          return done(null, false);
        }
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

const authAdmin = passport.authenticate("admin", {
  session: false,
});

passport.use(
  "employee",
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.SECRET_TOKEN,
    },
    async (payload, done) => {
      try {
        const user = await UserModel.findOne({
          _id: payload.id,
          role: "EMPLOYEE",
        });
        if (!user) {
          return done(null, false);
        }
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

const authEmployee = passport.authenticate("employee", {
  session: false,
});

passport.use(
  "adminemployee",
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.SECRET_TOKEN,
    },
    async (payload, done) => {
      try {
        const employee = await UserModel.findOne({
          _id: payload.id,
          role: "EMPLOYEE",
        });
        const admin = await UserModel.findOne({
          _id: payload.id,
          role: "ADMIN",
        });
        if (!employee && !admin) {
          return done(null, false);
        }
        if (employee) {
          done(null, employee);
        }
        if (admin) {
          done(null, admin);
        }
      } catch (error) {
        done(error, false);
      }
    }
  )
);

const authAdminEmployee = passport.authenticate("adminemployee", {
  session: false,
});

passport.use(
  "all",
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.SECRET_TOKEN,
    },
    async (payload, done) => {
      try {
        const user = await UserModel.findOne({
          _id: payload.id,
        });
        if (!user) {
          return done(null, false);
        }
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

const authAll = passport.authenticate("all", {
  session: false,
});

module.exports = {
  authUser,
  authAdmin,
  authEmployee,
  authAdminEmployee,
  authAll,
};