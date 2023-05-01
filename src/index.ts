import express = require("express");
import { Express } from "express-serve-static-core";

const app = express();

serveStaticFilesFromDir(app, "dir");

function serveStaticFilesFromDir(app: Express, directoryName : string) {
}