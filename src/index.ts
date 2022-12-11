import app from "./app";
import { dataSource } from "./db/index";
dataSource
  .initialize()
  .then(() => {
    console.log("동기화 완료");
  })
  .catch((err) => {
    console.log("Error :", err);
  });

const PORT = 7000;

app.listen(PORT, () => console.log("## Server Connecting Port", PORT));
