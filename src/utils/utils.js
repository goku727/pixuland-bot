import fs from "node:fs";
import path from "node:path";
import yaml from "yaml";

export function getFiles(directory, arrayOfFiles) {
  const files = fs.readdirSync(directory);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach((file) => {
    if (fs.statSync(directory + "/" + file).isDirectory()) {
      arrayOfFiles = getFiles(directory + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(directory, "/", file));
    }
  });

  return arrayOfFiles;
}

export const config = yaml.parse(
  fs.readFileSync("./config/config.yml", "utf8")
);
export const lang = yaml.parse(fs.readFileSync("./config/lang.yml", "utf8"));
