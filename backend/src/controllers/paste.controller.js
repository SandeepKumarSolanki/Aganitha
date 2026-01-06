import { Paste } from "../models/Paste.model.js";
import { getNow } from "../utils/time.js";
import { validatePaste } from "../utils/validate.js";

export async function createPaste(req, res) {
    const error = validatePaste(req.body);
    if (error) return res.status(400).json({ error });

    const expiresAt = req.body.ttl_seconds
        ? new Date(Date.now() + req.body.ttl_seconds * 1000)
        : null;

    const paste = await Paste.create({
        content: req.body.content,
        expiresAt,
        maxViews: req.body.max_views ?? null
    });

    res.json({
        id: paste._id
    });

}

export async function fetchPaste(req, res) {
    const now = getNow(req);
    const paste = await Paste.findById(req.params.id);

    if (!paste) return res.status(404).json({ error: "Not found" });

    if (paste.expiresAt && paste.expiresAt <= now)
        return res.status(404).json({ error: "Expired" });

    if (paste.maxViews !== null && paste.viewCount >= paste.maxViews)
        return res.status(404).json({ error: "View limit exceeded" });

    paste.viewCount += 1;
    await paste.save();

    res.json({
        content: paste.content,
        remaining_views:
            paste.maxViews === null
                ? null
                : Math.max(0, paste.maxViews - paste.viewCount),
        expires_at: paste.expiresAt
    });
}
