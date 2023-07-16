import path from "path";
import bodyParser from "body-parser";
import express, { Application } from "express";
import session from "express-session";
import passport from "passport";
import cors from "cors";
import { v4 as uuid } from "uuid";
import "./config/passport";
import routes from "./routes/index";

() => {
	mongoose.connect("");
	mongoose.connection.on("error", (error) => {
		throw error;
	});
	console.log("dog")
	const app: Application = express();

	app.use(
		// CORS
		cors({
			origin: env.CLIENT_DOMAIN_NAME,
			credentials: true,
		}),
	);
	app.use(
		session({
			name: "session",
			genid: () => uuid(),
			cookie: {
				maxAge: 36000 * 24 * 365,
				httpOnly: true,
				sameSite: "lax",
				secure: "auto",
				domain: undefined,
			},
			secret: "secret",
			resave: false,
			saveUninitialized: false,
		}),
	);
	app.use(passport.initialize());
	app.use(passport.session());

	app.use(bodyParser.json());
	app.use("/", routes);

	app.listen(3000, () => {
		console.log("🚀 Server running on localhost:3000.");
	});
};
