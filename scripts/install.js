#!/usr/bin/env node
import { spawnSync, execFileSync } from "child_process";
import os from "os";
import fs from "fs";
import path from "path";

let platform = os.platform();
if (platform == "win32") {
  platform = "windows";
}

let arch = os.arch();
switch (arch) {
  case "x32":
    arch = "386";
    break;
  case "x64":
    arch = "amd64";
    break;
}
const shfmtVersion = "v3.2.4";
const shfmtDownloadUrl = `https://github.com/mvdan/sh/releases/download/${shfmtVersion}/shfmt_${shfmtVersion}_${platform}_${arch}`;
const hcl2jsonVersion = "v0.3.3";
const hcl2jsonDownloadUrl = `https://github.com/tmccombs/hcl2json/releases/download/${hcl2jsonVersion}/hcl2json_${platform}_${arch}`;

if (platform !== "windows") {
  let binDir = "/usr/local/bin";
  try {
    const cp = spawnSync("npm", ["config", "get", "prefix"], {
      encoding: "utf-8",
    });
    if (cp && !cp.error && cp.stdout) {
      const tmpBinDir = cp.stdout.replace("\n", "") + path.sep + "bin";
      try {
        if (fs.lstatSync(tmpBinDir).isDirectory()) {
          binDir = tmpBinDir;
        }
      } catch (err) {}
    }
  } catch (err) {
    console.log(err);
  }
  try {
    if (fs.lstatSync(binDir).isDirectory()) {
      console.log(
        "About to download shfmt and hcl2json from",
        shfmtDownloadUrl,
        hcl2jsonDownloadUrl,
        "to",
        binDir
      );
      try {
        execFileSync("curl", ["-L", shfmtDownloadUrl, "-o", binDir + "/shfmt"]);
        execFileSync("chmod", ["+x", binDir + "/shfmt"]);
        execFileSync("curl", [
          "-L",
          hcl2jsonDownloadUrl,
          "-o",
          binDir + "/hcl2json",
        ]);
        execFileSync("chmod", ["+x", binDir + "/hcl2json"]);
      } catch (err) {
        console.log("Please download shfmt manually from", shfmtDownloadUrl);
        console.log(
          "Please download hcl2json manually from",
          hcl2jsonDownloadUrl
        );
      }
      console.log("Done");
    } else {
      console.log(
        `Unable to write to ${binDir}.\nEither execute this command with sudo privileges or manually download shfmt and hcl2json`
      );
    }
  } catch (err) {
    console.log("Please download shfmt manually from", shfmtDownloadUrl);
    console.log("Please download hcl2json manually from", hcl2jsonDownloadUrl);
  }
} else {
  console.log("Please download shfmt manually from", shfmtDownloadUrl);
  console.log("Please download hcl2json manually from", hcl2jsonDownloadUrl);
}
