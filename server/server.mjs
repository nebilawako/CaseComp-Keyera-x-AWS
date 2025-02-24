import express from "express";
import cors from "cors";
import { QuickSightClient, GenerateEmbedUrlForRegisteredUserCommand } from "@aws-sdk/client-quicksight";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());

const client = new QuickSightClient({
    region: "us-east-1", 
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

app.get("/get-quicksight-url", async (req, res) => {
    try {
        const params = {
            AwsAccountId: process.env.AWS_ACCOUNT_ID,
            DashboardId: process.env.QUICKSIGHT_DASHBOARD_ID,
            IdentityType: "QUICKSIGHT",
            UserArn: process.env.QUICKSIGHT_USER_ARN,
            SessionLifetimeInMinutes: 600,
            ResetDisabled: false,
        };

        const command = new GenerateEmbedUrlForRegisteredUserCommand(params);
        const response = await client.send(command);
        res.json({ embedUrl: response.EmbedUrl });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
});

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
