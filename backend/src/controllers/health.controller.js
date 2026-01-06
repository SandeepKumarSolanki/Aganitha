import mongoose from "mongoose";

export function healthCheck(_req, res) {
  try {
    const ok = mongoose.connection.readyState === 1;

    return res
      .status(200)
      .set("Content-Type", "application/json")
      .json({ ok });
  } catch {
    return res
      .status(200)
      .set("Content-Type", "application/json")
      .json({ ok: false });
  }
}
