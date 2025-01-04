import app from "./app";
import { PORT } from "./constant";

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
