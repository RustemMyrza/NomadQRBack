import express from "express";
import writeToLog from "../Log/toLog.js";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.all('*', (req, res) => {
    console.log(`Request method: ${req.method}`);
    writeToLog('request was gotten');
    res.send('Request received and logged.');
});

export default router;